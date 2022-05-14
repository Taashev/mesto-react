import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();

    onUpdateUser({ name, about: description }, setLoader, nameBtn);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__input-group">
        <input
          className="popup__input popup__input_type_user-name"
          id="user-name-input"
          type="text"
          name="username"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name ?? ''}
          onChange={handleChangeName}
        />
        <p className="popup__input-error user-name-input-error"></p>
      </label>
      <label className="popup__input-group">
        <input
          className="popup__input popup__input_type_about-me"
          id="about-me-input"
          type="text"
          name="aboutme"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={description ?? ''}
          onChange={handleChangeDescription}
        />
        <p className="popup__input-error about-me-input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
