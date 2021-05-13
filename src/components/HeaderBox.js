import React from 'react';
import PropTypes from 'prop-types';
import HeaderBoxForm from './HeaderBoxForm';
import HeaderForHeaderBox from './HeaderForHeaderBox';
import './HeaderBox.css';

// Принимает массив descriptions
// с объектами вида: { id: 1, text: 'Прогрессивная...' },
// backgroundUrl=".."
// updateState - функция
// userName, userEmail, userNumber, errorMessage - строки,
// userAgree - boolean,
// formValidate - функция,
//

export default function HeaderBox(props) {
  let { descriptions } = props;
  descriptions = descriptions.map((e) => <p className="header_box_description_specification" key={e.id}>{e.text}</p>);
  const {
    updateState, userAgree, userName, userEmail, userNumber,
    errorMessage, formValidate, backgroundUrl,
  } = props;
  const backgroundImage = {
    backgroundImage: `url(${backgroundUrl})`,
  };

  return (
    <header className="header_box" style={backgroundImage}>
      <HeaderForHeaderBox h1="methin.space" h2="Академический подход в современной обработке" descriptions={descriptions} />
      <HeaderBoxForm
        updateState={updateState}
        userName={userName}
        userEmail={userEmail}
        userNumber={userNumber}
        userAgree={userAgree}
        formValidate={formValidate}
        errorMessage={errorMessage}
      />
    </header>
  );
}

HeaderBox.propTypes = {
  updateState: PropTypes.func.isRequired,
  userName: PropTypes.string,
  formValidate: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  userNumber: PropTypes.string,
  userAgree: PropTypes.bool,
  errorMessage: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.object),
  backgroundUrl: PropTypes.string,
};
HeaderBox.defaultProps = {
  userName: '',
  userEmail: '',
  userNumber: '',
  userAgree: false,
  errorMessage: '',
  descriptions: [],
  backgroundUrl: '',
};
