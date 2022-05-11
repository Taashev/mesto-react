import React, { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [ cards, setCards ] = useState([]);

  // user info
  const { avatar, name, about, _id: userId } = useContext(CurrentUserContext);

  useEffect(() => {
    // get card info
    api.getCards()
      .then(res => {
        setCards(res.map(item => item))
      })
      .catch(err => console.err(`Ошибка: ${ err }`))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === userId);

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

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(_ => {
        setCards((state) => state.filter((item) => item._id !== card._id))
      })
      .catch(err => console.error(`Ошибка: ${ err }`))
  }

  return (
    <main className="content">
      {/* profile */}
      <section className="profile">
        <div className="profile__img-wraper" onClick={ onEditAvatar }>
          <img className="profile__img" src={ avatar || '#' } alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{ name || '...' }</h1>
          <button className="profile__edit-btn hover" type="button" aria-label="редактировать профиль" onClick={ onEditProfile }></button>
          <p className="profile__user-about">{ about || '...' }</p>
        </div>
        <button className="profile__add-btn hover" onClick={ onAddPlace } type="button" aria-label="добавить новое фото"></button>
      </section>
      {/* cards */}
      <section className="card">
        <ul className="card__items">
          {cards.map((card) => <Card card={ card } key={ card._id } onCardClick={ onCardClick } onCardLike={ handleCardLike } onCardDelete={ handleCardDelete } />)}
        </ul>
      </section>
    </main>
  )
}

export default Main;
