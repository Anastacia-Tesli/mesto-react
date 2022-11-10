import {api} from '../utils/api.js';
import Card from './Card.js';
import React from 'react';
function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([data, cards]) => {
            setUserName(data.name)
            setUserDescription(data.about)
            setUserAvatar(data.avatar)
            setCards(cards)
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
    }, []);
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__pic" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" alt="Аватар пользователя" src={userAvatar}/>
                </div>
                <div className="profile__info">
                   <div className="profile__heading">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="button button_open profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Открыть редактирование профиля"></button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="button button_open profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить место"></button>
            </section>
            <section className="places">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} onDeleteClick={props.onDeleteClick}></Card>
                ))}
            </section>
        </main>
    )
}
export default Main