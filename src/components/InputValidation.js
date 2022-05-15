import React, { useEffect, useState } from "react";

function InputValidation({
  className,
  type,
  name,
  placeholder,
  minLength,
  maxLength,
  required,
  value,
  setValue,
  reset,
  validation
}) {
  const [ inputValid, setInputValid ] = useState(true);
  const [ errorMessege, setErrorMessege ] = useState('');

  // handle change
  function handleChange(e) {
    setValue(e.target.value);
    setInputValid(e.target.validity.valid);
    setErrorMessege(e.target.validationMessage);

    validation(name, e.target.validity.valid)
  }

  // handle blur
  function handleBlur(e) {
    setInputValid(e.target.validity.valid);
    setErrorMessege(e.target.validationMessage);
  }

  // reset
  useEffect(() => {
    setInputValid(true);
    setErrorMessege('');
  }, [reset])

  return (
    <label className="popup__input-group">
      <input
        className={ `popup__input ${ className } ${ inputValid ? '' : 'popup__input_type_invalid' }` }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        minLength={ minLength }
        maxLength={ maxLength }
        required={ required }
        value={ value }
        onChange={ handleChange }
        onBlur={ handleBlur }
      />
      <p className="popup__input-error">{ errorMessege }</p>
    </label>
  )
}

export default InputValidation;
