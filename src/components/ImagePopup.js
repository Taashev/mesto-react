function ImagePopup() {
  return (
    <div className="popup popup_type_fullscreen">
      <div className="popup__container-fullscreen">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно"></button>
        <img className="popup__full-img" src="#" alt="#" />
        <h2 className="popup__full-text"></h2>
      </div>
    </div>
  )
}

export default ImagePopup;
