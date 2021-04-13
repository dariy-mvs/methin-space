import React, { Component } from 'react'

  // Элемент принимает массив с элементами вида: {id: 1, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'} из свойства props.questions
  // В props нужно передать: 
  // sectionHeader={'заголовок типа 'Почему мы классные?''} 
  // sectionDescription={'Описание преимуществ'} 
  // advantages={[массив преимуществ-описаний]} 
  

export default class OurAdvantages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advantage: ''
    };
  this.advantages = props.advantages.map(e => {
    <li class='col_box_weAreGreat_description_list_item' key={e.id}>
        <h4 class='col_box_weAreGreat_description_list_item_header'>{e.header}</h4>
        <p class='col_box_weAreGreat_description_list_item_descr'>{e.advantage}</p>
    </li>
  });
  this.choiceOfAdvantege = this.choiceOfAdvantege.bind(this)
  }

  choiceOfAdvantege(event) {
    const target = event.target.closest('li');
    
  }

  render() {
    return (
      <article class='col_box_article col_box_weAreGreat col_box_detalis'>
        <h3 class='col_box_detalis_header'>{this.props.sectionHeader}</h3>
        <span class='col_box_detalis_description'>{this.props.sectionDescription}</span>  
        <ul class='col_box_weAreGreat_description_list'>
        {this.advantages}
        </ul>
      </article>
    )
  }
}
