import React from 'react';
import HeaderBoxForm from './HeaderBoxForm';
import HeaderForHeaderBox from './HeaderBox_header';
import './HeaderBox.css';

export default function HeaderBox(props) {
  let { descriptions } = props;
  descriptions = descriptions.map((e) => <p className="header_box_description_specification" key={e.id}>{e.text}</p>);

  const backgroundImage = {
    backgroundImage: `url(${props.backgroundUrl})`,
  };

  return (
    <header className="header_box" style={backgroundImage}>
      <HeaderForHeaderBox h1="methin.space" h2="Академический подход в современной обработке" descriptions={descriptions} />
      <HeaderBoxForm updateState={props.updateState} userName={props.userName} userEmail={props.userEmail} userNumber={props.userNumber} userAgree={props.userAgree} formValidate={props.formValidate} errorMessage={props.errorMessage} />
    </header>
  );
}
