import React, { Component } from 'react';
import './Prices.css';
import PropTypes from 'prop-types';
import Arrows from './Arrows';

// Элемент принимает объект с элементами вида:
// {id: 1,
// packageName: 'Базовый',
// price: '3000',
// time: 'оплата за месяц',
// packageFeatures: ['бла', 'бла-бла']}
// из свойства props.prices
// В props нужно передать:
// sectionHeader={'заголовок типа 'стоимость обучения''}
// sectionDescription={'Описание цен'}
// prices={[массив преимуществ-описаний]}

export default class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceId: '2',
      description: 'Cамый популярный набор',
    };
    this.choiceOfPrice = this.choiceOfPrice.bind(this);
    this.choiceOtherPrice = this.choiceOtherPrice.bind(this);
    this.myClick = new Event('click', { bubbles: true, cancelable: true, composed: false });

    // массив цен с описаниями (prices).
    // Внутри мапится список преимуществ пакета в массив packageFeatures
    this.prices = props.prices.map((e) => {
      const { description } = this.state;

      // массив преимуществ каждого пакета
      const packageFeatures = e.packageFeatures.map((el) => (
        <li className="programPrice_descr_list_item">
          <span className="programPrice_descr_list_item_span">{el}</span>
        </li>
      ));

      // сам элемент описания цены
      if (+e.id === 2) {
        return (
          <li className="col_box_programPrice_description_list_item" key={e.id} data-priceid={e.id} onClick={this.choiceOfPrice} role="presentation">
            <div className="programPrice_name">
              <span className="programPrice_name_span">{e.packageName}</span>
            </div>
            <div className="programPrice_price">
              <span className="programPrice_price_span">{e.price}</span>
              <span className="programPrice_price_descr_span">{e.time}</span>
            </div>
            <div className="ad price_active"><span className="price_active_span">{description}</span></div>
            <ul className="programPrice_descr_list">
              {packageFeatures}
            </ul>
          </li>
        );
      }
      return (
        <li className="col_box_programPrice_description_list_item" key={e.id} data-priceid={e.id} onClick={this.choiceOfPrice} role="presentation">
          <div className="programPrice_name">
            <span className="programPrice_name_span">{e.packageName}</span>
          </div>
          <div className="programPrice_price">
            <span className="programPrice_price_span">{e.price}</span>
            <span className="programPrice_price_descr_span">{e.time}</span>
          </div>
          <div className="ad" />
          <ul className="programPrice_descr_list">
            {packageFeatures}
          </ul>
        </li>
      );
    });
  }

  choiceOfPrice(event) {
    // переменные для объекта события
    const { priceId, description } = this.state;
    const target = event.target.closest('.col_box_programPrice_description_list_item');
    const ad = target.querySelector('.ad');
    const priceList = target.closest('.col_box_programPrice_description_list');
    const oldPriceActive = priceList.querySelector(`[data-priceid = "${priceId}"]`);

    // позиционируем новый элемент посередине и снимаем активные классы со старого
    target.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' });
    oldPriceActive.querySelector('.ad').classList.remove('price_active');
    oldPriceActive.querySelector('.ad').textContent = '';
    oldPriceActive.querySelector('.programPrice_descr_list').classList.remove('descr_active');
    this.setState({
      priceId: target.dataset.priceid,
      description: 'Отличный выбор!',
    });
    ad.classList.add('price_active');
    ad.innerHTML = `<span class='price_active_span'>${description}</span>`;
    target.querySelector('.programPrice_descr_list').classList.add('descr_active');
  }

  choiceOtherPrice(event) {
    const { priceId } = this.state;
    const target = event.target.closest('.arrow');
    const parent = target.closest('.programPrice');
    const list = [...parent.querySelectorAll('.col_box_programPrice_description_list_item')];
    const oldIndexActive = priceId - 1;

    if (target.classList.contains('arrow_left')) {
      if (oldIndexActive === 0) {
        list[list.length - 1].dispatchEvent(this.myClick);
      } else {
        list[oldIndexActive - 1].dispatchEvent(this.myClick);
      }
    } else if (target.classList.contains('arrow_right')) {
      if (oldIndexActive === list.length - 1) {
        list[0].dispatchEvent(this.myClick);
      } else {
        list[oldIndexActive + 1].dispatchEvent(this.myClick);
      }
    }
  }

  render() {
    const { sectionHeader, sectionDescription } = this.props;
    return (
      <article className="col_box_article col_box_detalis programPrice color-block">
        <h3 className="col_box_detalis_header">{sectionHeader}</h3>
        <span className="col_box_detalis_description">{sectionDescription}</span>
        <ul className="col_box_programPrice_description_list">
          {this.prices}
        </ul>
        <Arrows arrowFunction={this.choiceOtherPrice} />
      </article>
    );
  }
}

Prices.propTypes = {
  sectionHeader: PropTypes.string,
  sectionDescription: PropTypes.string,
  prices: PropTypes.arrayOf(PropTypes.object),
};
Prices.defaultProps = {
  sectionHeader: '',
  sectionDescription: '',
  prices: [],
};
