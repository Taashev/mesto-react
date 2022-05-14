import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef();

  useEffect(() => {
    avatar.current.value = '';
  }, [isOpen])

  function handleSubmit(e, setLoader, nameBtn) {
    e.preventDefault();

    onUpdateAvatar({avatar: avatar.current.value}, setLoader, nameBtn);
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__input-group">
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar-input"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          ref={avatar}
        />
        <p className="popup__input-error avatar-input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
