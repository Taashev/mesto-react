function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_fullscreen ${card ? 'popup_opened' : ''}`}>
      <div className="popup__container-fullscreen">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно" onClick={onClose}></button>
        <img className="popup__full-img" src={card.link} alt="#" />
        <h2 className="popup__full-text">{card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
