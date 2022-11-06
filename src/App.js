import Header from './components/Header.js';
import Main from './components/Main.js';
import {handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick} from './components/Main.js';
import Footer from './components/Footer.js';
//import PopupWithForm from './components/PopupWithForm.js';

function App() {
  return (
    <body className="page">
    <div className="page__container">
      <Header />
      <Main />
      <Footer />
      
        <div className="popup popup_type_show">
            <div className="popup__content">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <img className="popup__image" />
                <h2 className="popup__description"></h2>
            </div>
        </div>
        <template id="template">
            <div className="place">
                <img className="place__image" />
                <button className="button place__delete-button" type="button" aria-label="Удалить"></button>
                <div className="place__caption">
                    <h2 className="place__title"></h2>
                    <div className="place__like">
                        <button className="place__like-button" type="button" aria-label="Лайкнуть"></button>
                        <span className="place__like-number"></span>
                    </div>
                    
                </div>
            </div>
        </template>
    </div>

</body>
  );
}

export default App;
