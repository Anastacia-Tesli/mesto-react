export default class Api {
    constructor(object) {
        this._baseUrl = object.baseUrl
        this._headers = object.headers
    }
    _makePromise(url, method, body) {
        return fetch(`${this._baseUrl}${url}`, {
            method: `${method}`,
            headers: this._headers,
            body: body
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`); 
            })    
    }
    getUserInfo() {
        return this._makePromise('/users/me', 'GET')
    }
    getInitialCards() {
        return this._makePromise('/cards', 'GET')
    }
    editProfile(data) {
        return this._makePromise('/users/me', 'PATCH', JSON.stringify({
            name: `${data.name}`,
            about: `${data.about}`
          })
        )
    }
    editAvatar(data) {
        return this._makePromise('/users/me/avatar', 'PATCH', JSON.stringify({
            avatar: `${data.avatar}`
        }))
    }
    addCard(data) {
        return this._makePromise('/cards', 'POST', JSON.stringify({
            name: `${data.name}`,
            link: `${data.link}`
        }))
    }
    deleteCard(id) {
        return this._makePromise('/cards/' + id, 'DELETE')
    }
    putLike(id) {
        return this._makePromise('/cards/' + id + '/likes', 'PUT')
    }
    deleteLike(id) {
        return this._makePromise('/cards/' + id + '/likes', 'DELETE')
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
      authorization: '0e26ece0-9983-4f1f-b710-b6f03d354c92',
      'Content-Type': 'application/json'
    }
});