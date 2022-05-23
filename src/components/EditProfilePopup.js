import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useInputValidation from "../utils/useInputValidation";

function EditProfilePopup({ isOpen, onClose, onCloseOverlay, keyClosePopup, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const inputName = useInputValidation(currentUser.name);
  const inputAbout = useInputValidation(currentUser.about);
  const [formValidation, setFormValidation] = useState(true);

  function handleFormValidation() {
    const res = [inputName.valid, inputAbout.valid].every(item => item);
    setFormValidation(res);
  }

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onUpdateUser({ name: inputName.value, about: inputAbout.value }, setLoader, nameBtn);
  }

  useEffect(() => {
    handleFormValidation();
  })

  useEffect(() => {
    inputName.resetValidation(currentUser.name);
    inputAbout.resetValidation(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={ isOpen }
      onClose={ onClose }
      onCloseOverlay={ onCloseOverlay }
      keyClosePopup={ keyClosePopup }
      onSubmit={ handleSubmit }
      formValidation={ formValidation } >
      <label className="popup__input-group">
        <input
          className={ `popup__input popup__input_type_user-name ${ inputName.inputError ? '' : 'input-invalid' }` }
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={ inputName.value || '' }
          onChange={ e => inputName.onChange(e) }
          onBlur={ e => inputName.onBlur(e) } />
        <p className="input-error">{ inputName.errorMessage }</p>
      </label>
      <label className="popup__input-group">
        <input
          className={ `popup__input popup__input_type_about-me ${ inputAbout.inputError ? '' : 'input-invalid' }` }
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={ inputAbout.value || '' }
          onChange={ e => inputAbout.onChange(e) }
          onBlur={ e => inputAbout.onBlur(e) } />
        <p className="input-error">{ inputAbout.errorMessage }</p>
      </label>
    </PopupWithForm>
  );
}


export default EditProfilePopup;
