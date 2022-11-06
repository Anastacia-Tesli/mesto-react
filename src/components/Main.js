export function handleEditAvatarClick() {
    document.querySelector('.profile__pic').addEventListener('click', () => {
        document.querySelector('.popup_type_pic').classList.add('popup_opened')
    })
}
export function handleEditProfileClick() {
    document.querySelector('.profile__edit-button').addEventListener('click', () => {
        document.querySelector('.popup_type_edit').classList.add('popup_opened')
    })
}
export function handleAddPlaceClick() {
    document.querySelector('.profile__add-button').addEventListener('click', () => {
        document.querySelector('.popup_type_add').classList.add('popup_opened')
    })
}

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__pic" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" alt="Аватар пользователя" />
                </div>
                <div className="profile__info">
                   <div className="profile__heading">
                        <h1 className="profile__name"></h1>
                        <button className="button button_open profile__edit-button" onClick={handleEditProfileClick} type="button" aria-label="Открыть редактирование профиля"></button>
                    </div>
                    <p className="profile__job"></p>
                </div>
                <button className="button button_open profile__add-button" onClick={handleAddPlaceClick} type="button" aria-label="Добавить место"></button>
            </section>
            <section className="places">
            </section>
        </main>
    )
}
export default Main