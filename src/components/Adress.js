import React from 'react';
import './Adress.css';

export default function Adress() {
  return (
    <div class="footer_nav">
        <address class="socials">
            <span class='requisites'>ИП КРЕМЕНЕНКО АРТЁМ СЕРГЕЕВИЧ
            </span>
            <span class="requisites">ОГРНИП: 316237500030511 ИНН:230820278417</span>
            <ul class="widget-socials">
              <li class="widget-social">
                <a href="https://vk.com/methin" class="widget-link widget-link-vk"><span class="link-text">vk</span></a></li>
              <li class="widget-social">
                <a href="https://www.instagram.com/methin.space/?igshid=1sxxwqfz2zfqh" class="widget-link widget-link-instagram"><span class="link-text">instagram</span></a></li>
              <li class="widget-social">
                <a href="#0" class="widget-link widget-link-youtube"><span class="link-text">youtube</span></a></li>
            </ul>
          </address>
          {/* <img className='watermark' alt='author' src='./img/watermark.svg' /> */}
    </div>
  )
}
