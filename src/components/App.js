import logo from '../images/logo.svg';

function App() {
  return (
    <>
			{/* page */}
			<div className="page">
				{/* header */}
				<header className="header">
					<img className="logo" src={logo} alt="логотип 'Mesto'" />
				</header>
				{/* main */}
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
				{/* footer */}
				<footer className="footer">
					<p className="footer__cop">&copy; 2021 Mesto Russia</p>
				</footer>

				{/* popup profile */}
				<div className="popup popup_type_profile">
					<div className="popup__container">
						<button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно"></button>
						<h2 className="popup__title">Редактировать профиль</h2>
						<form className="popup__form popup__form_type_profile" method="get" name="profile" noValidate>
							<label className="popup__input-group">
								<input className="popup__input popup__input_type_user-name" id="user-name-input" type="text" name="username" placeholder="Имя" minLength="2" maxLength="40" required />
								<p className="popup__input-error user-name-input-error"></p>
							</label>
							<label className="popup__input-group">
								<input className="popup__input popup__input_type_about-me" id="about-me-input" type="text" name="aboutme" placeholder="О себе" minLength="2" maxLength="200" required />
								<p className="popup__input-error about-me-input-error"></p>
							</label>
							<button className="popup__button" type="submit" aria-label="сохранить изминения">Сохранить</button>
						</form>
					</div>
				</div>
				{/* popup photo */}
				<div className="popup popup_type_photo">
					<div className="popup__container">
						<button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно"></button>
						<h2 className="popup__title">Новое место</h2>
						<form className="popup__form popup__form_type_photo" method="get" name="photo" noValidate>
							<label className="popup__input-group">
								<input className="popup__input popup__input_type_card-name" id="card-name-input" type="text" name="cardname" placeholder="Название" minLength="2" maxLength="30" required />
								<p className="popup__input-error card-name-input-error"></p>
							</label>
							<label className="popup__input-group">
								<input className="popup__input popup__input_type_card-link" id="card-link-input" type="url" name="cardlink" placeholder="Ссылка на картинку" required />
								<p className="popup__input-error card-link-input-error"></p>
							</label>
							<button className="popup__button" type="submit" aria-label="сохранить изминения">Сохранить</button>
						</form>
					</div>
				</div>
				{/* popup fullscreen */}
				<div className="popup popup_type_fullscreen">
					<div className="popup__container-fullscreen">
						<button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно"></button>
						<img className="popup__full-img" src="#" alt="#" />
						<h2 className="popup__full-text"></h2>
					</div>
				</div>
				{/* popup card delete */}
				<div className="popup popup_type_card-delete">
					<div className="popup__container">
						<button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно"></button>
						<h2 className="popup__title">Вы уверены?</h2>
						<form className="popup__form popup__form_type_card-delete" method="get" name="card-delete" noValidate>
							<button className="popup__button" type="submit" aria-label="Подтвердить удаление карточки">Да</button>
						</form>
					</div>
				</div>
				{/* popup update avatar */}
				<div className="popup popup_type_update-avatar">
					<div className="popup__container">
						<button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно"></button>
						<h2 className="popup__title">Обновить аватар</h2>
						<form className="popup__form popup__form_type_update-avatar" method="get" name="update-avatar" noValidate>
							<label className="popup__input-group">
								<input className="popup__input popup__input_type_avatar" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
								<p className="popup__input-error avatar-input-error"></p>
							</label>
							<button className="popup__button" type="submit" aria-label="сохранить изминения">Сохранить</button>
						</form>
					</div>
				</div>
			</div>

			{/* template */}
			<template className="card-template">
				<li className="card__item">
					<button className="card__trash hover" type="button" aria-label="удалить карточку"></button>
					<img className="card__img" src="#" alt="#" />
					<div className="card__footer">
						<h2 className="card__text"></h2>
						<div className="card__like-wraper">
							<button className="card__like" type="button" aria-label="лайк"></button>
							<span className="card__counter"></span>
						</div>
					</div>
				</li>
			</template>
		</>
  );
}

export default App;
