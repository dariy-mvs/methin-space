import React from 'react';

const HeaderForHeaderBox = ({ h1, h2, descriptions }) => (
  <div className="header_box_description">
    <h1 className="header_box_description_caption">{h1}</h1>
    <h2 className="header_box_description_caption_h2">{h2}</h2>
    {descriptions}
    <button className="header_box_description_button">Узнать больше</button>
  </div>
);

export default HeaderForHeaderBox;
