import React from 'react'
import HeaderBoxForm from './HeaderBoxForm';
import './HeaderBox.css';


export default function HeaderBox(props) {
  let descriptions = props.descriptions;
  descriptions = descriptions.map((e) => {
    return <p className='header_box_description_specification' key={e.id}>{e.text}</p>
  })

  const backgroundImage = {
    backgroundImage: `url(${props.backgroundUrl})`
  };

  return (
    <header className="header_box" style={backgroundImage}>
            <div className="header_box_description">
                <h1 className='header_box_description_caption'>{props.h1}</h1>
                <h2 className='header_box_description_caption_h2'>{props.h2}</h2>
                {descriptions}
                <button className='header_box_description_button'>Узнать больше</button> 
            </div>
            <HeaderBoxForm />
        </header>
  )
}
