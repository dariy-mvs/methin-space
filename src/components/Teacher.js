import React from 'react';
import './Teacher.css';

//В props нужно передать:
// img={src: '', alt: ''},
// teacherName='';
// teacherPosition='';
// teacherDescription='';


export default function Teacher(props) {
  return (
    <div className='col_box_article our_teacher'>
      <img className='our_teacher_img' src={props.img.src} alt={props.img.alt}/>
      <h3 className='our_teacher_name'>{props.teacherName}</h3>
      <h4 className='our_teacher_position'>{props.teacherPosition}</h4>
      <p className='our_teacher_descr'>{props.teacherDescription}</p>
    </div>
  )
}
  