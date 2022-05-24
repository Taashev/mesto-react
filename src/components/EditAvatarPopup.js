import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import useInputValidation from '../utils/useInputValidation';

function EditAvatarPopup({ isOpen, onClose, onCloseOverlay, onUpdateAvatar }) {
  const inputAvatar = useInputValidation('');

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onUpdateAvatar({ avatar: inputAvatar.value }, setLoader, nameBtn);
  };

  useEffect(() => {
    inputAvatar.resetValidation('', false);
  }, [isOpen]);

  return (
    <Popup popupType="update-avatar" title="Обновить аватар" isOpen={ isOpen } onClose={ onClose } onCloseOverlay={ onCloseOverlay }>
      <PopupWithForm name="update-avatar" onSubmit={ handleSubmit } formValidation={ inputAvatar.valid }>
        <label className="popup__input-group">
          <input
            className={ `popup__input popup__input_type_avatar ${ inputAvatar.inputError ? '' : 'input-invalid' }` }
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
            value={ inputAvatar.value || '' }
            onChange={ e => inputAvatar.onChange(e) }
            onBlur={ e => inputAvatar.onBlur(e) }
          />
          <p className="input-error">{ inputAvatar.errorMessage }</p>
        </label>
      </PopupWithForm>
    </Popup>
  );
}

export default EditAvatarPopup;
