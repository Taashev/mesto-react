import React, { useEffect, useState } from "react";

function PopupWithForm({
  name,
  title,
  children,
  ariaLabelBtn = "сохранить изминения",
  nameBtn = "Сохранить",
  textLoading = "Сохранение...",
  isOpen,
  onClose,
  onCloseOverlay,
  onSubmit
}) {
  const [loader, setLoader] = useState(nameBtn);

  function handleSubmit(e) {
    onSubmit(e, setLoader, nameBtn);
    setLoader(textLoading);
  }

  useEffect(() => {
    function keyClosePopup(e) {
      if(e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keyup', keyClosePopup);

    return () => {
      document.removeEventListener('keyup', keyClosePopup);
    }
  }, [])


  return (
    <div className={ `popup popup_type_${ name } ${ isOpen ? 'popup_opened' : '' }` } onClick={ onCloseOverlay }>
      <div className="popup__container">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно" onClick={ onClose }></button>
        <h2 className="popup__title">{ title }</h2>
        <form className={ `popup__form popup__form_type_${ name }` } method="get" name={ name } onSubmit={ handleSubmit }>
          { children }
          <button className="popup__button" type="submit" aria-label={ ariaLabelBtn }>{ loader }</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
