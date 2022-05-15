import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import PopupCardDelete from './PopupCardDelete';


function App() {
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false);
  const [ isDeleteCardPopupOpen, setIsDeleteCardPopupOpen ] = useState(false);

  const [ selectedCard, setSelectedCard ] = useState({});
  const [ currentUser, setCurrentUser ] = useState({});
  const [ cards, setCards ] = useState([]);
  const [ selectCardDelete, setSelectCardDelete ] = useState({});

  // component did mount
  useEffect(() => {
    // static promise: user information first, then maps
    Promise.all([ api.getUserInfo(), api.getCards() ])
      .then(res => {
        const getUserInfo = res[0];
        const getCards = res[1];

        setCurrentUser(getUserInfo);

        return getCards;
      })
      .then(res => {
        setCards(res.map(card => card));
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }, [])

  // card like
  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    if(!isLiked) {
      api.addLike(card._id)
        .then((res) => {
          setCards((state) => state.map((c) => c._id === card._id ? res : c));
        })
        .catch(err => console.error(`Ошибка: ${ err }`))
    } else {
      api.deleteLike(card._id)
        .then((res) => {
          setCards((state) => state.map((c) => c._id === card._id ? res : c));
        })
        .catch(err => console.error(`Ошибка: ${ err }`))
    }
  };

  // handle add photo popup
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  // handle edit profile popup
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  // handle edit avatar popup
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  // handle card delete popup
  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true);
    setSelectCardDelete(card)
  }

  // close popup
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
  };

  // close popup overlay
  function closeOverlay(e) {
    if(e.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  // handle card click
  function handleCardClick(card) {
    setSelectedCard(card);
  };

  // set user info
  function handleUpdateUser({ name, about }, setLoader, nameBtn) {

    api.setUserInfo(name, about)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
        setLoader(nameBtn);
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }

  // set user avatar
  function handleUpdateAvatar({ avatar }, setLoader, nameBtn) {
    api.setUserAvatar(avatar)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
        setLoader(nameBtn);
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }

  // set card
  function handleAddPlaceSubmit({ name, link }, setLoader, nameBtn) {
    api.setCard(name, link)
      .then(newCards => {
        setCards([newCards, ...cards]);
        closeAllPopups();
        setLoader(nameBtn);
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }

  // card delete
  function handleCardDelete(card, setLoader, nameBtn) {
    api.deleteCard(card._id)
      .then(_ => {
        setCards((state) => state.filter((item) => item._id !== card._id));
        closeAllPopups();
        setLoader(nameBtn);
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
        <div className="page">
          {/* Header */}
          <Header />
          {/* Main */}
          <Main
            cards={ cards }
            onEditProfile={ handleEditProfileClick }
            onAddPlace={ handleAddPlaceClick }
            onEditAvatar={ handleEditAvatarClick }
            onCardClick={ handleCardClick }
            onCardLike={ handleCardLike }
            onCardDelete={ handleDeleteCardClick } />
          {/* Footer */}
          <Footer />

          {/* popup profile */}
          <EditProfilePopup isOpen={ isEditProfilePopupOpen } onClose={ closeAllPopups } onCloseOverlay={ closeOverlay } onUpdateUser={ handleUpdateUser } />
          {/* popup photo */}
          <AddPlacePopup isOpen={ isAddPlacePopupOpen } onClose={ closeAllPopups } onCloseOverlay={ closeOverlay } onAddPlace={ handleAddPlaceSubmit } />
          {/* popup card delete */}
          <PopupCardDelete isOpen={ isDeleteCardPopupOpen } onClose={ closeAllPopups } onCloseOverlay={ closeOverlay } onCardDelete={ handleCardDelete } card={ selectCardDelete } />
          {/* popup update avatar */}
          <EditAvatarPopup isOpen={ isEditAvatarPopupOpen } onClose={ closeAllPopups } onCloseOverlay={ closeOverlay } onUpdateAvatar={ handleUpdateAvatar } />
          {/* popup fullscreen */}
          <ImagePopup card={ selectedCard } onClose={ closeAllPopups } onCloseOverlay={ closeOverlay }/>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
