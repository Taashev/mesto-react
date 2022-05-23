import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import useInputValidation from '../utils/useInputValidation';

function EditAvatarPopup({ isOpen, onClose, onCloseOverlay, keyClosePopup, onUpdateAvatar }) {
  const inputAvatar = useInputValidation('');

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();
    onUpdateAvatar({ avatar: inputAvatar.value }, setLoader, nameBtn);
  };

  useEffect(() => {
    inputAvatar.resetValidation('', false);
  }, [isOpen]);

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={ isOpen }
      onClose={ onClose }
      onCloseOverlay={ onCloseOverlay }
      keyClosePopup={ keyClosePopup }
      onSubmit={ handleSubmit }
      formValidation={ inputAvatar.valid } >
      <label className="popup__input-group">
        <input
          className={ `popup__input popup__input_type_avatar ${ inputAvatar.inputError ? '' : 'input-invalid' }` }
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          value={ inputAvatar.value || '' }
          onChange={ e => inputAvatar.onChange(e) }
          onBlur={ e => inputAvatar.onBlur(e) } />
        <p className="input-error">{ inputAvatar.errorMessage }</p>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
