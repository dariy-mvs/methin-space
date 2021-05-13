import React, { Component } from 'react';
import './Courses.css';
import PropTypes from 'prop-types';

// Элемент принимает массив с элементами вида:
// {id: 1,
//  nameButton: 'курс 1',
//  header: 'Курс по аккустической гитаре: простые прогрессии.',
//  description: 'lorem1',
//  url:'',
//  documentName: '<имя файла при скачивании>' } из свойства props.courses

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: props.courses[0].id,
      // nameButton: props.courses[0].nameButton,
      header: props.courses[0].header,
      description: props.courses[0].description,
      url: props.courses[0].url,
      documentName: props.courses[0].documentName,
    };
    this.img = {
      src: props.src,
      alt: props.alt,
    };
    this.changeCourse = this.changeCourse.bind(this);
    this.buttonsList = props.courses.map((e) => <li className="col_box_guitar_button_item" key={e.id}><button type="button" className="col_box_guitar_button" onClick={this.changeCourse} data-ident={e.id}>{e.nameButton}</button></li>);
  }

  changeCourse(event) {
    const { target } = event;
    const { courses } = this.props;
    const course = courses.find(({ id }) => +id === +target.dataset.ident);
    this.setState({
      // id: course.id,
      // nameButton: course.nameButton,
      header: course.header,
      description: course.description,
      url: course.url,
    });
  }

  render() {
    const {
      header, description, url, documentName,
    } = this.state;
    return (
      <article className="col_box_article col_box_guitar">
        <div className="col_box_guitar_buttons">
          <ul className="guitar_buttons_list">
            {this.buttonsList}
          </ul>
        </div>
        <div className="col_box_guitar_descriptions">
          <div className="col_box_guitar_description_box">
            <h3 className="col_box_guitar_header">{header}</h3>
            <p className="col_box_guitar_description">{description}</p>
            <a className="col_box_guitar_download" href={url} download={documentName}>скачать</a>
          </div>
        </div>
        <img className="col_box_guitar_img" src={this.img.src} alt={this.img.alt} />
      </article>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
  src: PropTypes.string,
  alt: PropTypes.string,
};
Courses.defaultProps = {
  courses: [],
  src: '',
  alt: '',
};
