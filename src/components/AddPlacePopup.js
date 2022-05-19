import React, { Children, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import InputValidation from "./InputValidation";

function AddPlacePopup({ onClose, isOpen, onCloseOverlay, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [validation, setValidation] = useState({ name: false, link: false });
  const [valid, setValid] = useState(false);

  function handleValidity(name, inputValid) {
    const inputValidity = Object.assign({}, validation);
    inputValidity[name] = inputValid;
    setValidation(inputValidity);
  }

  function handleButtonValidation() {
    let res = Object.values(validation).every(item => item);
    setValid(res);
  }

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onAddPlace({ name: name, link: link }, setLoader, nameBtn);
  }

  useEffect(() => {
    handleButtonValidation()
  }, [handleValidity])

  useEffect(() => {
    setName('');
    setLink('');
    setValidation({ name: false, link: false });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="photo"
      title="Новое место"
      onClose={ onClose }
      onCloseOverlay={ onCloseOverlay }
      isOpen={ isOpen }
      onSubmit={ handleSubmit }
      validation={ valid }
    >
      <InputValidation
        className="popup__input_type_card-name"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required="required"
        value={ name ?? '' }
        setValue={ setName }
        reset={ isOpen }
        validation={ handleValidity }
      />
      <InputValidation
        className="popup__input_type_card-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required="required"
        value={ link ?? '' }
        setValue={ setLink }
        reset={ isOpen }
        validation={ handleValidity }
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
