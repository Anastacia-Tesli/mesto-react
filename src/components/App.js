import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import {api} from '../utils/api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {
  
// Попапы

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);
  const [deletedCard, setDeletedCard] = React.useState();
  function handleDeleteClick(card) {
    setIsConfirmationPopupOpen(true);
    setDeletedCard(card)
  }

  const [selectedCard, setSelectedCard] = React.useState();
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [isLoading, setIsLoading] = React.useState(false)

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }

  function closeOnOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    } 
  }

// Пользователь

  const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => {
    api.getUserInfo()
    .then((info) => {
      setCurrentUser(info)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }, [])

  function handleUpdateUser(data) {
    setIsLoading(true)
    api.editProfile(data)
    .then((info) => {
      setCurrentUser(info)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      setIsLoading(false)
    })
    closeAllPopups()
  }

  function handleUpdateAvatar(data) {
    setIsLoading(true)
    api.editAvatar(data)
    .then((info) => {
      setCurrentUser(info)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      setIsLoading(false)
    })
    closeAllPopups()
  }

  // Карточки

  const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
      api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    }, []);
    function handleCardLike(card) {
      const isLiked = card.likes.some((like) => like._id === currentUser._id);
      if (!isLiked) {
        api.putLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
      } else {
        api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
      }
    };
    function handleCardDelete(card) {
      setIsLoading(true)
        api.deleteCard(card._id)
        .then(() => {
          setCards((cards) => {
            cards.filter((item) => {
              return item != card
            })
          })
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          setIsLoading(false)
        })
        closeAllPopups()
    }
    function handleAddPlaceSubmit(data) {
      setIsLoading(true)
      api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setIsLoading(false)
      })
      closeAllPopups()
    }
  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main cards={cards} onCardLike={handleCardLike} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardDelete={handleDeleteClick} />
          <Footer />
          <EditProfilePopup isLoading={isLoading} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isLoading={isLoading} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick} onUpdateAvatar={handleUpdateAvatar} />  
          <AddPlacePopup isLoading={isLoading} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick} onAddPlace={handleAddPlaceSubmit} />
          <ConfirmationPopup isLoading={isLoading} card={deletedCard} isOpen={isConfirmationPopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick} DeleteCard={handleCardDelete} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} onOverlay={closeOnOverlayClick}/>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App
