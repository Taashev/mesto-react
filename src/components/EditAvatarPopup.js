import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import InputValidation from "./InputValidation";

function EditAvatarPopup({ isOpen, onClose, onCloseOverlay, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState('');
  const [validation, setValidation] = useState({ avatar: false });
  const [valid, setValid] = useState(false);

  function handleValidity(name, inputValid) {
    const inputValidity = Object.assign({}, validation);
    inputValidity[name] = inputValid;
    setValidation(inputValidity);
  }

  function handleButtonValidation() {
    const res = Object.values(validation).every(item => item);
    setValid(res);
  }

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatar }, setLoader, nameBtn);
  }

  useEffect(() => {
    handleButtonValidation()
  }, [handleValidity])

  useEffect(() => {
    setAvatar('')
    setValidation({ avatar: false })
  }, [isOpen]);

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={ isOpen }
      onClose={ onClose }
      onCloseOverlay={ onCloseOverlay }
      onSubmit={ handleSubmit }
      validation={ valid }
    >
      <InputValidation
        className="popup__input_type_avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required="required"
        reset={ isOpen }
        value={ avatar }
        setValue={ setAvatar }
        validation={ handleValidity }
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
