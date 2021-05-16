import './Header_nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  function HeaderMenuActive(event) {
    let { target } = event;
    const parentMenu = target.closest('.header_nav').querySelector('.menu_box');
    if (target.classList.contains('header_nav_burger')) {
      event.preventDefault();
      parentMenu.querySelector('.header_nav_list').classList.toggle('menu_active');
    } else if (target.closest('li')) {
      target = target.closest('li');
      if (target.querySelector('.header_nav_sublist')) {
        event.preventDefault();
        target.querySelector('.header_nav_sublist').classList.toggle('menu_active');
      }
    }
  }

  return (
    <nav
      className="header_nav"
      onClick={HeaderMenuActive}
      role="presentation"
    >
      <button
        className="logo_button"
        type="button"
      >
        <img
          className="header_nav_img"
          src="/img/layers-2.png"
          alt="логотип Methin"
        />
      </button>
      <div className="header_nav_burger menu_active" />
      <div className="menu_box">
        <ul className="header_nav_list">
          <li className="header_nav_list_item"><Link className="header_nav_list_item_link" to="/">Главная</Link></li>
          <li className="header_nav_list_item">
            <a className="header_nav_list_item_link" href="#0">Обучение</a>
            <ul className="header_nav_sublist">
              <li className="header_nav_sublist_item"><Link className="header_nav_list_item_link" to="/guitar">Гитара</Link></li>
              <li className="header_nav_sublist_item"><a className="header_nav_list_item_link" href="#0">Бас-гитара</a></li>
              <li className="header_nav_sublist_item"><a className="header_nav_list_item_link" href="#0">Вокал</a></li>
              <li className="header_nav_sublist_item"><a className="header_nav_list_item_link" href="#0">Укулеле</a></li>
              <li className="header_nav_sublist_item"><a className="header_nav_list_item_link" href="#0">Английский язык</a></li>
              <li className="header_nav_sublist_item"><a className="header_nav_list_item_link" href="#0">Теория музыки</a></li>
            </ul>
          </li>
          <li className="header_nav_list_item"><Link className="header_nav_list_item_link" to="/about_us">О нас</Link></li>
        </ul>
      </div>
    </nav>
  );
}
