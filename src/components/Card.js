function Card({card, id}) {
  return (
  //   card.map(item => {
  //     return (
  //       <li className="card__item" key={item._id}>
  //         <button className="card__trash hover" type="button" aria-label="удалить карточку"></button>
  //         <img className="card__img" src={item.link} alt={item.name} />
  //         <div className="card__footer">
  //           <h2 className="card__text">{item.name}</h2>
  //           <div className="card__like-wraper">
  //             <button className="card__like" type="button" aria-label="лайк"></button>
  //             <span className="card__counter">{item.likes.length}</span>
  //           </div>
  //         </div>
  //       </li>
  //     )
  //   })

    <li className="card__item">
      <button className="card__trash hover" type="button" aria-label="удалить карточку"></button>
      <img className="card__img" src={card.link} alt={card.name} />
      <div className="card__footer">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like-wraper">
          <button className="card__like" type="button" aria-label="лайк"></button>
          <span className="card__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;
