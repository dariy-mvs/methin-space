import React from 'react';
import PropTypes from 'prop-types';
import HeaderBoxForm from './HeaderBoxForm';
import HeaderForHeaderBox from './HeaderForHeaderBox';
import './HeaderBox.css';

// backgroundUrl=".."
// updateState - функция
// userName, userEmail, userNumber, errorMessage - строки,
// userAgree - boolean,
// formValidate - функция,
// headerForHeaderBox - объект {
//  h1: ''
//  h2: ''
//  descriptions: массив descriptions
// с объектами вида: { id: 1, text: 'Прогрессивная...' },
// }

export default function HeaderBox(props) {
  const {
    updateState, userAgree, userName, userEmail, userNumber,
    errorMessage, formValidate, backgroundUrl, headerForHeaderBox,
  } = props;
  let { descriptions } = headerForHeaderBox;
  const { h1, h2 } = headerForHeaderBox;

  descriptions = descriptions.map((e) => <p className="header_box_description_specification" key={e.id}>{e.text}</p>);

  const backgroundImage = {
    backgroundImage: `url(${backgroundUrl})`,
  };

  return (
    <header className="header_box" style={backgroundImage}>
      <HeaderForHeaderBox h1={h1} h2={h2} descriptions={descriptions} />
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
  headerForHeaderBox: PropTypes.objectOf(PropTypes.any).isRequired,
  backgroundUrl: PropTypes.string,
};
HeaderBox.defaultProps = {
  userName: '',
  userEmail: '',
  userNumber: '',
  userAgree: false,
  errorMessage: '',
  backgroundUrl: '',
};
