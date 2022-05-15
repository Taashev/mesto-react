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
  onSubmit,
  validation
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
    <div className={ `popup popup_type_${ name } ${ isOpen ? 'popup_opened' : '' }` } onMouseDown={ onCloseOverlay }>
      <div className="popup__container">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно" onClick={ onClose }></button>
        <h2 className="popup__title">{ title }</h2>
        <form className={ `popup__form popup__form_type_${ name }` } method="get" name={ name } noValidate onSubmit={ handleSubmit }>
          { children }
          <button className={ `popup__button ${ validation ? '' : 'popup__button_type_inactive' }` } type="submit" aria-label={ ariaLabelBtn } disabled={ validation ? false : true } >{ loader }</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
