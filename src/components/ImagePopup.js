function ImagePopup({ card, onClose, onCloseOverlay }) {
  return (
    <div className={`popup popup_type_fullscreen ${ card?.link ? 'popup_opened' : '' }`} onClick={ onCloseOverlay }>
      <div className="popup__container-fullscreen">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно" onClick={ onClose }></button>
        <img className="popup__full-img" src={ card?.link } alt={ card?.name } />
        <h2 className="popup__full-text">{ card?.name }</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
