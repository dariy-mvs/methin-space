import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderForHeaderBox({ h1, h2, descriptions }) {
  return (
    <div className="header_box_description">
      <h1 className="header_box_description_caption">{h1}</h1>
      <h2 className="header_box_description_caption_h2">{h2}</h2>
      {descriptions}
      <button
        className="header_box_description_button"
        type="button"
      >
        Узнать больше
      </button>
    </div>
  );
}

HeaderForHeaderBox.propTypes = {
  h1: PropTypes.string,
  h2: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.object),
};
HeaderForHeaderBox.defaultProps = {
  h1: '',
  h2: '',
  descriptions: [],
};
