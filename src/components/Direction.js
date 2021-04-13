
import React from 'react';
import './Direction.css'

export default function Direction(props) {

  // Элемент принимает массив с элементами вида: {id: 1, question: 'С какого возраста можно начинать обучение?', answer: 'Наши программы рассчитаны и на детей, и на взрослых. Мы принимаем на обучение с 10 лет.'} из свойства props.questions, делает из него список. В props нужно передать: 
  // courseHeader={'название направления'} 
  // courseDescription={'Описание направления'} 
  // questions={[массив вопросаов-ответов]} 
  // imgPosition={'позиция картинки относительно текста'} 
  // img={{alt: 'подпись к картинке', src: 'ссылка на картинку'}}

  let questionsItems = props.questions.map(e => {
    return <li className='col_box_direction_description_list_item' key={e.id}>
    <h4 className='col_box_direction_description_list_item_header'>{e.question}</h4>
    <p className='col_box_direction_description_list_item_descr'>{e.answer}</p>
</li>
  });

  if (props.imgPosition === 'left') {
    return (
      <section className='col_box_article'>
        <img className='col_box_direction_img' alt={props.img.alt} src={props.img.src} />
        <div className="col_box_direction_descriptions">
          <h3 className='col_box_direction_header'>{props.courseHeader}</h3>
          <p className='col_box_direction_description'>{props.courseDescription}</p>
          <img className='col_box_direction_img_mobile' alt={props.img.alt} src={props.img.src} />
          <ul className='col_box_direction_description_list'>
            {questionsItems}
          </ul>
      </div>
      </section>
    )
  } else if (props.imgPosition === 'right') {
    return (
    <section className='col_box_article col_box_acusticGuitar'>
      <div className="col_box_direction_descriptions">
        <h3 className='col_box_direction_header'>{props.courseHeader}</h3>
        <p className='col_box_direction_description'>{props.courseDescription}</p>
        <img className='col_box_direction_img_mobile' alt={props.img.alt} src={props.img.src} />
        <ul className='col_box_direction_description_list'>
          {questionsItems}
        </ul>
      </div>
      <img className='col_box_direction_img' alt={props.img.alt} src={props.img.src} />
    </section>
    )
  }
  
}