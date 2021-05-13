import React from 'react';
import './Teacher.css';
import PropTypes from 'prop-types';

// В props нужно передать:
// img={src: '', alt: ''},
// teacherName='';
// teacherPosition='';
// teacherDescription='';

export default function Teacher(props) {
  const {
    img, teacherName, teacherPosition, teacherDescription,
  } = props;
  return (
    <div className="col_box_article our_teacher">
      <img className="our_teacher_img" src={img.src} alt={img.alt} />
      <h3 className="our_teacher_name">{teacherName}</h3>
      <h4 className="our_teacher_position">{teacherPosition}</h4>
      <p className="our_teacher_descr">{teacherDescription}</p>
    </div>
  );
}

Teacher.propTypes = {
  teacherName: PropTypes.string,
  teacherDescription: PropTypes.string,
  teacherPosition: PropTypes.string,
  img: PropTypes.objectOf(PropTypes.string),
};
Teacher.defaultProps = {
  teacherName: '',
  teacherDescription: '',
  teacherPosition: '',
  img: {},
};
