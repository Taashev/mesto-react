import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  // handle edit profile
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  // handle add photo
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  // handle edit avatar
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  // close popup
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
			{/* page */}
			<div className="page">
				{/* Header */}
        <Header />
				{/* Main */}
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
				{/* Footer */}
				<Footer />

        {/* popup profile */}
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="popup__input-group">
            <input className="popup__input popup__input_type_user-name" id="user-name-input" type="text" name="username" placeholder="Имя" minLength="2" maxLength="40" required />
            <p className="popup__input-error user-name-input-error"></p>
          </label>
          <label className="popup__input-group">
            <input className="popup__input popup__input_type_about-me" id="about-me-input" type="text" name="aboutme" placeholder="О себе" minLength="2" maxLength="200" required />
            <p className="popup__input-error about-me-input-error"></p>
          </label>
        </PopupWithForm>
        {/* popup photo */}
        <PopupWithForm name="photo" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label className="popup__input-group">
            <input className="popup__input popup__input_type_card-name" id="card-name-input" type="text" name="cardname" placeholder="Название" minLength="2" maxLength="30" required />
            <p className="popup__input-error card-name-input-error"></p>
          </label>
          <label className="popup__input-group">
            <input className="popup__input popup__input_type_card-link" id="card-link-input" type="url" name="cardlink" placeholder="Ссылка на картинку" required />
            <p className="popup__input-error card-link-input-error"></p>
          </label>
        </PopupWithForm>
        {/* popup card delete */}
        <PopupWithForm name="card-delete" title="Вы уверены?" ariaLabelBtn="Подтвердить удаление карточки" nameBtn="Да" />
        {/* popup update avatar */}
        <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label className="popup__input-group">
            <input className="popup__input popup__input_type_avatar" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
            <p className="popup__input-error avatar-input-error"></p>
          </label>
        </PopupWithForm>
        {/* popup fullscreen */}
        <ImagePopup />
			</div>
		</>
  );
}

export default App;
