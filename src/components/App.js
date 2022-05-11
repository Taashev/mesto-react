import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  // component did mount
  useEffect(() => {
    // Promise get user info
    const getUserInfo = new Promise((resolve, reject) => {
      resolve(api.getUserInfo())
      reject('Ошика');
    })
    .catch(err => console.error(err));

    // static promise: user information first, then maps
    Promise.all([getUserInfo])
      .then(res => {
        const getUserInfo = res[0];
        setCurrentUser(getUserInfo);
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }, [])

  // handle edit profile
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  // handle add photo
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  // handle edit avatar
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  // close popup
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  // handle card click
  function handleCardClick(card) {
    setSelectedCard(card)
  };

  return (
    <CurrentUserContext.Provider value={ currentUser }>
        <div className="page">
          {/* Header */}
          <Header />
          {/* Main */}
          <Main
          onEditProfile={ handleEditProfileClick }
          onAddPlace={ handleAddPlaceClick }
          onEditAvatar={ handleEditAvatarClick }
          onCardClick={ handleCardClick } />
          {/* Footer */}
          <Footer />

          {/* popup profile */}
          <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            isOpen={ isEditProfilePopupOpen }
            onClose={closeAllPopups}>
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
          <PopupWithForm
            name="photo"
            title="Новое место"
            isOpen={ isAddPlacePopupOpen }
            onClose={ closeAllPopups }>
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
          <PopupWithForm
            name="card-delete"
            title="Вы уверены?"
            ariaLabelBtn="Подтвердить удаление карточки"
            nameBtn="Да" />
          {/* popup update avatar */}
          <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            isOpen={ isEditAvatarPopupOpen }
            onClose={ closeAllPopups }>
            <label className="popup__input-group">
              <input className="popup__input popup__input_type_avatar" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
              <p className="popup__input-error avatar-input-error"></p>
            </label>
          </PopupWithForm>
          {/* popup fullscreen */}
          <ImagePopup card={ selectedCard } onClose={ closeAllPopups }/>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
