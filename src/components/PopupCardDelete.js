import PopupWithForm from "./PopupWithForm";

function PopupCardDelete({ onClose, onCloseOverlay, isOpen, onCardDelete, card }) {
  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onCardDelete(card, setLoader, nameBtn)
  }

  return (
    <PopupWithForm
      name="card-delete"
      title="Вы уверены?"
      ariaLabelBtn="Подтвердить удаление карточки"
      nameBtn="Да"
      textLoading="Удалине..."
      onClose={ onClose }
      onCloseOverlay={ onCloseOverlay }
      isOpen={ isOpen }
      onSubmit={ handleSubmit }
      formValidation="true" />
  );
}

export default PopupCardDelete;
