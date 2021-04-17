
import React, { Component } from 'react';
import './Prices.css'

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
      ad.innerHTML = `<span className='price_active_span'>${this.state.description}</span>`;
      target.querySelector('.programPrice_descr_list').classList.add('descr_active');
    }

    choiceOtherPrice(event) {
      let target = event.target.closest('.arrow');

      if (target.classList.contains('arrow_left')) {
        
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
          <ul className="arrows_box prices_arrows">
          <li className="arrows_box_item"><svg className='arrow arrow_left' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="640.000000pt" height="640.000000pt" viewBox="0 0 640.000000 640.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
            fill="#cc3333" stroke="none">
            <path d="M713 5404 c4 -6 416 -504 917 -1105 500 -601 910 -1096 910 -1099 0
            -3 -94 -118 -208 -256 -820 -982 -1609 -1931 -1617 -1944 -7 -12 -5 -12 11 1
            10 9 134 101 274 206 140 104 732 547 1315 983 583 436 1124 841 1202 899 79
            58 142 109 140 113 -1 4 -290 223 -642 486 -1385 1035 -2281 1705 -2294 1716
            -11 8 -13 8 -8 0z"/>
            <path d="M3652 4328 c495 -596 910 -1093 920 -1105 l20 -21 -898 -1079 c-493
            -593 -909 -1091 -923 -1107 -14 -16 -19 -25 -11 -20 15 8 429 317 1935 1444
            424 316 825 616 892 665 67 50 122 92 122 95 0 3 -196 152 -437 331 -461 344
            -2141 1599 -2375 1775 -76 57 -140 104 -142 104 -3 0 401 -487 897 -1082z"/>
            </g>
            </svg>
          </li>
          <li className="arrows_box_item">
            <svg     className='arrow arrow_right' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="640.000000pt" height="640.000000pt" viewBox="0 0 640.000000 640.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
            fill="#cc3333" stroke="none">
            <path d="M713 5404 c4 -6 416 -504 917 -1105 500 -601 910 -1096 910 -1099 0
            -3 -94 -118 -208 -256 -820 -982 -1609 -1931 -1617 -1944 -7 -12 -5 -12 11 1
            10 9 134 101 274 206 140 104 732 547 1315 983 583 436 1124 841 1202 899 79
            58 142 109 140 113 -1 4 -290 223 -642 486 -1385 1035 -2281 1705 -2294 1716
            -11 8 -13 8 -8 0z"/>
            <path d="M3652 4328 c495 -596 910 -1093 920 -1105 l20 -21 -898 -1079 c-493
            -593 -909 -1091 -923 -1107 -14 -16 -19 -25 -11 -20 15 8 429 317 1935 1444
            424 316 825 616 892 665 67 50 122 92 122 95 0 3 -196 152 -437 331 -461 344
            -2141 1599 -2375 1775 -76 57 -140 104 -142 104 -3 0 401 -487 897 -1082z"/>
            </g>
            </svg>
            </li>
        </ul>
      </article>
      )
    }
  }

