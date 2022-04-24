import React from 'react';

function Main() {
  return (
    <main className="content">
      {/* profile */}
      <section className="profile">
        <div className="profile__img-wraper">
          <img className="profile__img" src="#" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">...</h1>
          <button className="profile__edit-btn hover" type="button" aria-label="редактировать профиль"></button>
          <p className="profile__user-about">...</p>
        </div>
        <button className="profile__add-btn hover" type="button" aria-label="добавить новое фото"></button>
      </section>
      {/* card */}
      <section className="card">
        <ul className="card__items">
        </ul>
      </section>
    </main>
  )
}

export default Main;
