import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [userName, setUserName] = useState('...');
  const [userDescription, setUserDescription ] = useState('...');
  const [userAvatar, setUserAvatar] = useState('#');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    // promise get user info
    const getUserInfo = new Promise((resolve, reject) => {
      resolve(api.getUserInfo())
      reject('Ошибка')
    })
      .catch(err => console.err(err));

    // promise get cards
    const getCards = new Promise((resolve, reject) => {
      resolve(api.getCards())
      reject('Ошибка')
    })
      .catch(err => console.err(err))

    // static promise: user information first, then maps
    Promise.all([getUserInfo, getCards])
      .then(res => {
        const getUserInfo = res[0];
        const getCards = res[1];

        // get user name
        setUserName(getUserInfo.name)
        // get user about
        setUserDescription(getUserInfo.about)
        // get user avatar
        setUserAvatar(getUserInfo.avatar)

        return getCards;
      })
      .then(res => {
        setCards(res.map(item => item))
      })
      .catch(err => console.err(`Ошибка: ${err}`))
    },[])

  return (
    <main className="content">
      {/* profile */}
      <section className="profile">
        <div className="profile__img-wraper" onClick={onEditAvatar}>
          <img className="profile__img" src={userAvatar} alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{userName}</h1>
          <button className="profile__edit-btn hover" type="button" aria-label="редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__user-about">{userDescription}</p>
        </div>
        <button className="profile__add-btn hover" onClick={onAddPlace} type="button" aria-label="добавить новое фото"></button>
      </section>
      {/* cards */}
      <section className="card">
        <ul className="card__items">
          {cards.map((card) => <Card card={card} key={card._id} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  )
}

export default Main;
