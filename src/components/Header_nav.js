
import React from 'react';

import './Header_nav.css';
import img from '../img/layers-2.png';

export default function Header_nav() {

  function HeaderMenuActive (event) {
    let target = event.target;
    let parentMenu = target.closest('.menu_box');

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
    <nav className="header_nav" onClick={HeaderMenuActive}>
        <img className='header_nav_img' src={img} alt='логотип Methin'/> 
        <div className="menu_box">
            <div className="header_nav_burger menu_active"></div>
            <ul className='header_nav_list'>
                <li className='header_nav_list_item'><a className='header_nav_list_item_link' href='index.html'>Главная</a></li>
                {/* как оформить ссылку отсюда? */}
                <li className='header_nav_list_item'><a className='header_nav_list_item_link' href='#0'>Обучение</a>
                  <ul className='header_nav_sublist'>
                    <li className='header_nav_sublist_item'><a className='header_nav_list_item_link' href='#0'>Джазовая гитара</a></li>
                    <li className='header_nav_sublist_item'><a className='header_nav_list_item_link' href='#0'>Эстрадная гитара</a></li>
                    <li className='header_nav_sublist_item'><a className='header_nav_list_item_link' href='#0'>Рок-гитара</a></li>
                    <li className='header_nav_sublist_item'><a className='header_nav_list_item_link' href='#0'>Вокал</a></li>
                    <li className='header_nav_sublist_item'><a className='header_nav_list_item_link' href='#0'>Укулеле</a></li>
                  </ul>
                </li>
                <li className='header_nav_list_item'><a className='header_nav_list_item_link' href='#0'>Услуги</a></li>
                <li className='header_nav_list_item'><a className='header_nav_list_item_link' href='#0'>Статьи</a></li>
                <li className='header_nav_list_item'><a className='header_nav_list_item_link' href='#0'>Мероприятия</a></li>
                <li className='header_nav_list_item'><a className='header_nav_list_item_link' href='#0'>О нас</a></li>
            </ul>
        </div>
     </nav>
  )
}


