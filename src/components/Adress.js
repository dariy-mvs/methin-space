import React from 'react';
import './Adress.css';

export default function Adress() {
  return (
    <div className="footer_nav">
        <address className="socials">
            <span className='requisites'>ИП КРЕМЕНЕНКО АРТЁМ СЕРГЕЕВИЧ
            </span>
            <span className="requisites">ОГРНИП: 316237500030511 ИНН:230820278417</span>
            <ul className="widget-socials">
              <li className="widget-social">
                <a href="https://vk.com/methin" className="widget-link widget-link-vk"><span className="link-text">vk</span></a></li>
              <li className="widget-social">
                <a href="https://www.instagram.com/methin.space/?igshid=1sxxwqfz2zfqh" className="widget-link widget-link-instagram"><span className="link-text">instagram</span></a></li>
              <li className="widget-social">
                <a href="#0" className="widget-link widget-link-youtube"><span className="link-text">youtube</span></a></li>
            </ul>
          </address>
          {/* <img className='watermark' alt='author' src='./img/watermark.svg' /> */}
    </div>
  )
}
