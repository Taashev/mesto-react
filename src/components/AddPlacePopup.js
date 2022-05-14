import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChengeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();

    onAddPlace({name: name, link: link}, setLoader, nameBtn)
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  return (
    <PopupWithForm
      name="photo"
      title="Новое место"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="popup__input-group">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name-input"
          type="text"
          name="cardname"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={name ?? ''}
          onChange={handleChangeName}
        />
        <p className="popup__input-error card-name-input-error"></p>
      </label>
      <label className="popup__input-group">
        <input
          className="popup__input popup__input_type_card-link"
          id="card-link-input"
          type="url"
          name="cardlink"
          placeholder="Ссылка на картинку"
          required
          value={link ?? ''}
          onChange={handleChengeLink}
        />
        <p className="popup__input-error card-link-input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
