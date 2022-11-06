import {handleEditAvatarClick,
    handleEditProfileClick,
    handleAddPlaceClick} from './components/Main.js';
function PopupWithForm() {
    return (
        <>
            <div className="popup popup_type_edit">
            <div className="popup__container">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form popup__form_type_edit" name="edit-form" novalidate>
                   <input id="name-input" className="popup__input" name="name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
                   <span className="popup__error name-input-error"></span>
                   <input id="job-input" className="popup__input" name="about" type="text" placeholder="О себе" required minlength="2" maxlength="200" />
                   <span className="popup__error job-input-error"></span>
                   <button className="popup__button" type="submit">Сохранить</button>
                </form>  
            </div>
        </div>
        <div className="popup popup_type_pic">
            <div className="popup__container">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form popup__form_type_pic" name="edit-form" novalidate>
                   <input id="pic-input" className="popup__input" name="avatar" type="url" placeholder="Ссылка на картинку" minlength="2" required />
                   <span className="popup__error pic-input-error"></span>
                   <button className="popup__button" type="submit">Сохранить</button>
                </form>  
            </div>
        </div>
        <div className="popup popup_type_add">
            <div className="popup__container">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form popup__form_type_add" name="add-form" novalidate>
                   <input id="place-input" className="popup__input" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
                   <span className="popup__error place-input-error"></span>
                   <input id="link-input" className="popup__input" name="link" type="url" placeholder="Ссылка на картинку" required />
                   <span className="popup__error link-input-error"></span>
                   <button className="popup__button" type="submit">Создать</button>
                </form>  
            </div>
        </div>
        <div className="popup popup_type_confirm">
            <div className="popup__container">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <button className="popup__button" type="button">Да</button>
            </div>
        </div>
        </>
    )
}
export default PopupWithForm