import React from 'react';
import PropTypes from 'prop-types';
import './DirectionDescription.css';

// принимает:
// forDescription = {
// headerDescription= '',
// directionDescription = '',
// src=<ссылка на видео строкой>
// }
//  descriptionRef - ref на описание
//  showDescription - функция для переключения классов

export default function DirectionDescription(props) {
  const {
    forDescription: { headerDescription, directionDescription, src }, showDescription,
  } = props;
  return (
    <div className="cours-description">
      <h3 className="cours-description__header" onClick={showDescription} role="presentation">{headerDescription}</h3>
      <div className="cours-description__wrapper">
        <div className="cours-description__descript">
          <p>{directionDescription}</p>
        </div>
        <div className="cours-description__video">
          <iframe width="100%" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

DirectionDescription.propTypes = {
  forDescription: PropTypes.objectOf(PropTypes.string),
  // descriptionRef: PropTypes.node.isRequired,
  showDescription: PropTypes.func.isRequired,
};
DirectionDescription.defaultProps = {
  forDescription: {},
};
