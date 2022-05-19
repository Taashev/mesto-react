import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import InputValidation from "./InputValidation";

function EditProfilePopup({ isOpen, onClose, onCloseOverlay, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const [validation, setValidation] = useState({ name: true, description: true });
  const [valid, setValid] = useState(true);

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
    onUpdateUser({ name, about: description }, setLoader, nameBtn);
  }

  useEffect(() => {
    handleButtonValidation();
  }, [handleValidity])

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setValidation({ name: true, description: name });
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={ isOpen }
      onClose={ onClose }
      onCloseOverlay={ onCloseOverlay }
      onSubmit={ handleSubmit }
      validation={ valid }
    >
      <InputValidation
        className="popup__input_type_user-name"
        type="text"
        name="username"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required="required"
        value={ name ?? '' }
        setValue={ setName }
        reset={ isOpen }
        validation={ handleValidity }
        />
      <InputValidation
        className="popup__input_type_about-me"
        type="text"
        name="aboutme"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required="required"
        value={ description ?? '' }
        setValue={ setDescription }
        reset={ isOpen }
        validation={ handleValidity }
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
