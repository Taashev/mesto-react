function PopupWithForm({
  name,
  title,
  children,
  ariaLabelBtn="сохранить изминения",
  nameBtn="Сохранить",
  isOpen,
  onClose,
  onSubmit
}) {
  return (
    <div className={ `popup popup_type_${ name } ${ isOpen ? 'popup_opened' : '' }` }>
      <div className="popup__container">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно" onClick={ onClose }></button>
        <h2 className="popup__title">{ title }</h2>
        <form className={ `popup__form popup__form_type_${ name }` } method="get" name={ name } noValidate onSubmit={onSubmit}>
          { children }
          <button className="popup__button" type="submit" aria-label={ ariaLabelBtn }>{ nameBtn }</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
