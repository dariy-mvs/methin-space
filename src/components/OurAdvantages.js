import React, { Component } from 'react';
import './OurAdvantages.css'

  // Элемент принимает массив с элементами вида: {id: 1, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'} из свойства props.questions
  // В props нужно передать: 
  // sectionHeader={'заголовок типа 'Почему мы классные?''} 
  // sectionDescription={'Описание преимуществ'} 
  // advantages={[массив преимуществ-описаний]} 
  

export default function OurAdvantages(props) {


  const choiceOfAdvantege = (event) => {
    const target = event.target.closest('li');
      
      if (target.classList.contains("descr_active")) {
        target.classList.remove("descr_active");
        target.querySelector('.descr_active').classList.remove('descr_active')
      } else {
        [...target.closest('ul').querySelectorAll('.descr_active')].forEach(el => el.classList.remove('descr_active'));
        target.classList.add("descr_active");
        target.querySelector('.col_box_weAreGreat_description_list_item_descr').classList.add("descr_active");
      };
  }

  const advantages = props.advantages.map(e => {
    return <li className='col_box_weAreGreat_description_list_item' onClick={choiceOfAdvantege} key={e.id}>
        <h4 className='col_box_weAreGreat_description_list_item_header'>{e.header}</h4>
        <p className='col_box_weAreGreat_description_list_item_descr'>{e.advantage}</p>
    </li>
  });

    return (
      <article className='col_box_article col_box_weAreGreat col_box_detalis'>
        <h3 className='col_box_detalis_header'>{props.sectionHeader}</h3>
        <span className='col_box_detalis_description'>{props.sectionDescription}</span>  
        <ul className='col_box_weAreGreat_description_list'>
        {advantages}
        </ul>
      </article>
    );
}



