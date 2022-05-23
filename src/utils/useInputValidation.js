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
    resetValidation
  }
}

export default useInputValidation;
