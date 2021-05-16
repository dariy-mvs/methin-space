import React from 'react';
import { Link } from 'react-router-dom';
import './Direction.css';
import DirectionDescription from './DirectionDescription';

export default function Direction(props) {
  // Элемент принимает массив с элементами вида:
  // {id: 1, question: 'С какого возраста можно начинать обучение?',
  //  answer: 'Наши программы рассчитаны и на детей, и на взрослых'}
  // из свойства props.questions,
  // делает из него список. В props нужно передать:
  // courseHeader={'название направления'}
  // courseDescription={'Описание направления'}
  // questions={[массив вопросаов-ответов]}
  // imgPosition={'позиция картинки относительно текста'}
  // img={{alt: 'подпись к картинке', src: 'ссылка на картинку'}}
  // homepage = {
  //  linkTo:'' - ссылка на страницу направления
  // }
  // forDescription = {
  // headerDescription= '',
  // directionDescription = '',
  // src=''
  // }

  const {
    courseHeader, courseDescription, imgPosition, img, homepage, forDescription,
  } = props;
  const { questions } = props;
  // const descriptionRef = useRef(null);
  const showDescription = (event) => {
    const target = event.target.closest('.col_box_direction').querySelector('.cours-description');
    target.classList.toggle('active_descr');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const renderHeader = () => {
    if (homepage) {
      return (
        <h3 className="col_box_direction_header"><Link to={homepage.linkTo}>{courseHeader}</Link></h3>
      );
    }
    return (
      <h3 className="col_box_direction_header" onClick={showDescription} role="presentation">{courseHeader}</h3>
    );
  };
  const renderDescription = () => (
    <DirectionDescription
      forDescription={forDescription}
      // descriptionRef={descriptionRef}
      showDescription={showDescription}
    />
  );
  const questionsItems = questions.map((e) => (
    <li className="col_box_direction_description_list_item" key={e.id}>
      <h4 className="col_box_direction_description_list_item_header">{e.question}</h4>
      <p className="col_box_direction_description_list_item_descr">{e.answer}</p>
    </li>
  ));

  if (imgPosition === 'left') {
    return (
      <div className="col_box_direction color-block">
        <section className="col_box_article">
          <img className="col_box_direction_img" alt={img.alt} src={img.src} />
          <div className="col_box_direction_descriptions">
            {renderHeader()}
            <p className="col_box_direction_description">{courseDescription}</p>
            <img className="col_box_direction_img_mobile" alt={img.alt} src={img.src} />
            <ul className="col_box_direction_description_list">
              {questionsItems}
            </ul>
          </div>
        </section>
        {renderDescription()}
      </div>
    );
  } if (imgPosition === 'right') {
    return (
      <div className="col_box_direction color-block">
        <section className="col_box_article col_box_acusticGuitar">
          <div className="col_box_direction_descriptions">
            {renderHeader()}
            <p className="col_box_direction_description">{courseDescription}</p>
            <img className="col_box_direction_img_mobile" alt={img.alt} src={img.src} />
            <ul className="col_box_direction_description_list">
              {questionsItems}
            </ul>
          </div>
          <img className="col_box_direction_img" alt={img.alt} src={img.src} />
        </section>
        {renderDescription()}
      </div>
    );
  }
}
