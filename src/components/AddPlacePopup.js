import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import useInputValidation from "../utils/useInputValidation";

function AddPlacePopup({ onClose, isOpen, onCloseOverlay, onAddPlace }) {
  const inputName = useInputValidation();
  const inputLink = useInputValidation();
  const [formValidation, setFormValidation] = useState(false);

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onAddPlace({ name: inputName.value, link: inputLink.value }, setLoader, nameBtn);
  };

  useEffect(() => {
    setFormValidation([inputName.valid, inputLink.valid].every(item => item));
  });

  useEffect(() => {
    inputName.resetValidation('', false);
    inputLink.resetValidation('', false);
  }, [isOpen]);

  return (
    <Popup popupType="photo" title="Новое место" onClose={onClose} onCloseOverlay={onCloseOverlay} isOpen={isOpen}>
      <PopupWithForm name="photo" onSubmit={handleSubmit} formValidation={formValidation} >
        <label className="popup__input-group">
          <input
            className={`popup__input popup__input_type_card-name ${inputName.inputError ? '' : 'input-invalid'}`}
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            value={inputName.value || ''}
            onChange={e => inputName.onChange(e)}
            onBlur={e => inputName.onBlur(e)} />
          <p className="input-error">{inputName.errorMessage}</p>
        </label>
        <label className="popup__input-group">
          <input
            className={`popup__input popup__input_type_card-link ${inputLink.inputError ? '' : 'input-invalid'}`}
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
            value={inputLink.value || ''}
            onChange={e => inputLink.onChange(e)}
            onBlur={e => inputLink.onBlur(e)} />
          <p className="input-error">{inputLink.errorMessage}</p>
        </label>
      </PopupWithForm>
    </Popup>
  );
}

export default AddPlacePopup;
