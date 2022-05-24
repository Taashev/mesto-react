import React, { useEffect } from "react";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import useInputValidation from "../utils/useInputValidation";
import NotFound from "./NoutFound";

function Register({ onInfoTooltip, onRegister }) {
  const {path} = useRouteMatch();
  const inputEmail = useInputValidation('');
  const inputPassword = useInputValidation('');

  function handleSubmit(e) {
    e.preventDefault();

    const validation = inputEmail.valid && inputPassword.valid;
    if(!validation) {
      inputEmail.checkInputValid();
      inputPassword.checkInputValid();
      return
    }

    onRegister(inputPassword.value, inputEmail.value)
      .catch(err => {
        onInfoTooltip({isOpen: true, status: false, message: err?.message || err.error});
      })
  };

  useEffect(() => {
    inputEmail.setValid(false);
    inputPassword.setValid(false);
  }, [])

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <section className="register">
          <h2 className="register__title title">Регистрация</h2>
          <form className="form" name="register" method="post" onSubmit={handleSubmit} noValidate>
            <label className="form__input-group">
              <input
                className={`form__input ${inputEmail.inputError ? '' : 'input-invalid'}`}
                type="email"
                name="register-email"
                placeholder="Email"
                required
                value={inputEmail.value || ''}
                onChange={e => inputEmail.onChange(e)}
                onBlur={e => inputEmail.onBlur(e)} />
              <p className="input-error">{inputEmail.errorMessage}</p>
            </label>
            <label className="form__input-group">
              <input
                className={`form__input ${inputPassword.inputError ? '' : 'input-invalid'}`}
                type="password"
                name="register-password"
                placeholder="Пароль"
                minLength="3"
                required
                value={inputPassword.value || ''}
                onChange={e => inputPassword.onChange(e)}
                onBlur={e => inputPassword.onBlur(e)} />
              <p className="input-error">{inputPassword.errorMessage}</p>
            </label>
            <button className="form__button" type="submit">Зарегистрироваться</button>
          </form>
          <p className="register__login">Уже зарегистрированы? {<Link className="register__link hover" to="/sign-in">Войти</Link>}</p>
        </section>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Register;
