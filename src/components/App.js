import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {

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
  function handleDeleteClick() {
    setIsConfirmationPopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState();
  function handleCardClick(card) {
    setSelectedCard(card)
  }

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

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onDeleteClick={handleDeleteClick}/>
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick}>
          <input id="name-input" className="popup__input" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__error name-input-error"></span>
          <input id="job-input" className="popup__input" name="about" type="text" placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="popup__error job-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="pic" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick}>
          <input id="pic-input" className="popup__input" name="avatar" type="url" placeholder="Ссылка на картинку" minLength="2" required />
          <span className="popup__error pic-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick}>
          <input id="place-input" className="popup__input" name="name" type="text" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__error place-input-error"></span>
          <input id="link-input" className="popup__input" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__error link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="confirm" title="Вы уверены?" button="Да" isOpen={isConfirmationPopupOpen} onClose={closeAllPopups} onOverlay={closeOnOverlayClick}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} onOverlay={closeOnOverlayClick}/>
      </div>
    </div>
  );
}

export default App;
