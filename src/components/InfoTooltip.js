import React, { useEffect } from "react";
import Valid from "../images/valid.png";
import Invalid from "../images/invalid.png";

function InfoTooltip({ config, onClose, onCloseOverlay, keyClosePopup }) {
  useEffect(() => {
    document.addEventListener('keyup', keyClosePopup);

    return () => {
      document.removeEventListener('keyup', keyClosePopup);
    }
  }, [])

  return (
    <div className={ `popup popup_type_info ${ config.isOpen ? 'popup_opened' : '' }` } onClick={ onCloseOverlay } >
      <div className="popup__container popup__container_type_info">
        <button className="popup__close hover" type="button" aria-label="закрыть всплывающее окно" onClick={ onClose }></button>
        <img className="popup__images" src={ config.status ? Valid : Invalid } alt={ config.status ? 'Успешно' : config.message } />
        <h2 className="popup__title popup__title_type_info">{ config.message }</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;
