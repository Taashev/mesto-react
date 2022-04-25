import React from 'react';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar
}) {
  return (
    <main className="content">
      {/* profile */}
      <section className="profile">
        <div className="profile__img-wraper" onClick={onEditAvatar}>
          <img className="profile__img" src="#" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">...</h1>
          <button className="profile__edit-btn hover" type="button" aria-label="редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__user-about">...</p>
        </div>
        <button className="profile__add-btn hover" onClick={onAddPlace} type="button" aria-label="добавить новое фото"></button>
      </section>
      {/* cards */}
      <section className="card">
        <ul className="card__items">
        </ul>
      </section>
    </main>
  )
}

export default Main;
