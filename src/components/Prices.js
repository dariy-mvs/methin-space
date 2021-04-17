
import React, { Component } from 'react';
import './Prices.css';
import Arrows from './Arrows.js';

// Элемент принимает объект с элементами вида: {id: 1, packageName: 'Базовый', price: '3000', time: 'оплата за месяц' packageFeatures: ['бла', 'бла-бла']} из свойства props.prices
  // В props нужно передать: 
  // sectionHeader={'заголовок типа 'стоимость обучения''} 
  // sectionDescription={'Описание цен'} 
  // prices={[массив преимуществ-описаний]} 

  
  export default class Prices extends Component {
    constructor(props) {
      super(props);
      this.state = {
        priceId: '2',
        description: 'Cамый популярный набор'
      };
      this.choiceOfPrice = this.choiceOfPrice.bind(this);
      this.choiceOtherPrice = this.choiceOtherPrice.bind(this);
      this.myClick = new Event('click', {bubbles: true, cancelable: true, composed: false});

      // массив цен с описаниями (prices). Внутри мапится список преимуществ пакета в массив packageFeatures
      this.prices = props.prices.map(e => {

        //массив преимуществ каждого пакета 
        let packageFeatures = e.packageFeatures.map(el => {
          return <li className='programPrice_descr_list_item'>
          <span className ='programPrice_descr_list_item_span'>{el}</span>
          </li>
        });

        // сам элемент описания цены
        if (+e.id === 2) {
          return (<li className='col_box_programPrice_description_list_item' key={e.id} data-priceId={e.id} onClick={this.choiceOfPrice}>
          <div className="programPrice_name">
            <span className ='programPrice_name_span'>{e.packageName}</span>
          </div>
          <div className="programPrice_price">
            <span className ='programPrice_price_span'>{e.price}</span>
            <span className ='programPrice_price_descr_span'>{e.time}</span>
          </div>
          <div className='ad price_active'><span className='price_active_span'>{this.state.description}</span></div>
          <ul className='programPrice_descr_list'>
            {packageFeatures}
          </ul>
        </li>)
        } else {
          return (<li className='col_box_programPrice_description_list_item' key={e.id} data-priceId={e.id} onClick={this.choiceOfPrice}>
          <div className="programPrice_name">
            <span className ='programPrice_name_span'>{e.packageName}</span>
          </div>
          <div className="programPrice_price">
            <span className ='programPrice_price_span'>{e.price}</span>
            <span className ='programPrice_price_descr_span'>{e.time}</span>
          </div>
          <div className='ad'></div>
          <ul className='programPrice_descr_list'>
            {packageFeatures}
          </ul>
        </li>)
        }
      })
    }

    choiceOfPrice(event) {
      // переменные для объекта события
      let target = event.target.closest('.col_box_programPrice_description_list_item');
      let ad = target.querySelector('.ad');
      let priceList = target.closest('.col_box_programPrice_description_list');
      let oldPriceActive = priceList.querySelector(`[data-priceId = "${this.state.priceId}"]`);
      
      // позиционируем новый элемент посередине и снимаем активные классы со старого
      target.scrollIntoView({behavior: 'auto', block: 'center', inline: 'nearest'});
      oldPriceActive.querySelector('.ad').classList.remove('price_active');
      oldPriceActive.querySelector('.ad').textContent = '';
      oldPriceActive.querySelector('.programPrice_descr_list').classList.remove('descr_active');
      this.setState({priceId: target.dataset.priceid,
      description: 'Отличный выбор!'});
      ad.classList.add('price_active');
      ad.innerHTML = `<span class='price_active_span'>${this.state.description}</span>`;
      target.querySelector('.programPrice_descr_list').classList.add('descr_active');
    }

    choiceOtherPrice(event) {
      let target = event.target.closest('.arrow');
      let parent = target.closest('.programPrice');
      let list = [...parent.querySelectorAll('.col_box_programPrice_description_list_item')];
      let oldIndexActive = this.state.priceId - 1;

      if (target.classList.contains('arrow_left')) {
        if (oldIndexActive === 0) {
          list[list.length - 1].dispatchEvent(this.myClick);
        } else {
          list[oldIndexActive - 1].dispatchEvent(this.myClick);
        }
      } else if (target.classList.contains('arrow_right')) {
        if (oldIndexActive === list.length -1) {
          list[0].dispatchEvent(this.myClick);
        } else {
          list[oldIndexActive + 1].dispatchEvent(this.myClick);
        }
      }
    }
    
    render() {
      return (
        <article className='col_box_article col_box_detalis programPrice'>
          <h3 className='col_box_detalis_header'>{this.props.sectionHeader}</h3>
          <span className='col_box_detalis_description'>{this.props.sectionDescription}</span>
          <ul className='col_box_programPrice_description_list'>
            {this.prices}  
          </ul>
          <Arrows arrowFunction={this.choiceOtherPrice}/>
      </article>
      )
    }
  }

