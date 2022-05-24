import { useState } from "react";

const useInputValidation = (e) => {
  const [value, setValue] = useState(e);
  const [valid, setValid] = useState(true);
  const [inputError, setInputError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    setValid(e.target.validity.valid);
    setInputError(e.target.validity.valid);
    setErrorMessage(e.target.validationMessage);
  }

  const onBlur = (e) => {
    setValid(e.target.validity.valid);
    setInputError(e.target.validity.valid);
    setErrorMessage(e.target.validationMessage);
  }

  const resetValidation = (value, status = true) => {
    setValue(value);
    setValid(status);
    setInputError(true);
    setErrorMessage('');
  }

  const checkInputValid = () => {
    if(!valid) {
      if(value.length === 0) {
        setErrorMessage('Заполните это поле.')
        setInputError(false);
        return
      }
    }
  }

  return {
    value,
    setValue,
    valid,
    setValid,
    inputError,
    setInputError,
    errorMessage,
    setErrorMessage,
    onChange,
    onBlur,
    resetValidation,
    checkInputValid
  }
}

export default useInputValidation;
