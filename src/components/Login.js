import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import useInputValidation from "../utils/useInputValidation";
import NotFound from "./NoutFound";

function Login({ onLogin, onInfoTooltip }) {
  const {path} = useRouteMatch();
  const inputEmail = useInputValidation('');
  const inputPassword = useInputValidation('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(inputPassword.value, inputEmail.value)
      .then(res => {
        if(res) {
          inputEmail.setValue('');
          inputPassword.setValue('');
        }
      })
      .catch(err => {
        onInfoTooltip({ isOpen: true, status: false, message: err.error || err.message })
      })
  }

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <section className="login">
          <h2 className="login__title title">Вход</h2>
          <form className="form" name="login" method="post" onSubmit={ handleSubmit } noValidate>
            <label className="form__input-group">
              <input
                className={ `form__input ${ inputEmail.inputError ? '' : 'input-invalid' }` }
                type="email"
                name="login-email"
                placeholder="Email"
                required
                value={ inputEmail.value || '' }
                onChange={ e => inputEmail.onChange(e) }
                onBlur={ e => inputEmail.onBlur(e) } />
              <p className="input-error">{ inputEmail.errorMessage }</p>
            </label>
            <label className="form__input-group">
              <input
                className={ `form__input ${ inputPassword.inputError ? '' : 'input-invalid' }` }
                type="password"
                name="login-password"
                placeholder="Пароль"
                minLength="3"
                required
                value={ inputPassword.value || '' }
                onChange={ e => inputPassword.onChange(e) }
                onBlur={ e => inputPassword.onBlur(e) } />
              <p className="input-error">{ inputPassword.errorMessage }</p>
            </label>
            <button className="form__button" type="submit">Войти</button>
          </form>
        </section>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Login;
