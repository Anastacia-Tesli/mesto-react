
function Card({card, onCardClick, onDeleteClick}) {
    function handleClick() {
        onCardClick(card);
      }  
    return (
          <article className="place">
              <img className="place__image" alt={card.name} src={card.link} onClick={handleClick}/>
              <button className="button place__delete-button" type="button" aria-label="Удалить карточку" onClick={onDeleteClick}></button>
              <div className="place__caption">
                  <h2 className="place__title">{card.name}</h2>
                  <div className="place__like">
                      <button className="place__like-button" type="button" aria-label="Лайкнуть"></button>
                      <span className="place__like-number" aria-label="Количество лайков">{card.likes.length}</span>
                  </div> 
              </div>
          </article>
    )
}
export default Card