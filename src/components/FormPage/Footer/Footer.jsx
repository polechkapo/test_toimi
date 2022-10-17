import React from 'react';
import '../../../styles/components/footer.scss';
import telegram from '../../../img/telegram.svg';
import whatsapp from '../../../img/whatsapp.svg';

function Footer(props) {
   return (
      <div className='footer'>
         <div className='footer__wrapper'>
         <div className='footer__top'>
         <h1 className='footer__title'>Logo</h1>
         <div className='footer__lists'>
         <div>
            <h3 className='footer__subtitle'>Услуги</h3>
         <ul className='footer__list'>
            <li className='footer__items'>Support and development</li>
            <li className='footer__items'>UI/UX and product design</li>
            <li className='footer__items'>Progressive Web Applications (PWA)</li>
         </ul>
         </div>
         <div>
            <h3 className='footer__subtitle'>Компания</h3>
         <ul className='footer__list'>
            <li className='footer__items'>О компании</li>
            <li className='footer__items'>Проекты</li>
            <li className='footer__items'>Контакты</li>
         </ul>
         </div>
         <div>
            <h3 className='footer__subtitle'>Контакты</h3>
         <ul className='footer__list'>
            <li className='footer__items'>Скачать презентацию</li>
            <li className='footer__items'><a href='tel:+7(499)9999999'>+7 (499) 999-99-99</a></li>
            <li className='footer__items'>info@site.com</li>
         </ul>
         </div>
         </div>
         <div className='footer__list'>
            <ul className='footer__list-contacts'>
               <li><button className='footer__list-btn'><img src={telegram} alt="Telegram" /></button></li>
               <li><button className='footer__list-btn'><img src={whatsapp} alt="Whatsapp" /></button></li>
            </ul>
         </div>
         </div>
         <div className='footer__bottom'>
            <p>© Company 2022. All rights reserved.</p>
            <p>Политика конфиденциальноcти</p>
         </div>
         </div>
      </div>
   );
}

export default Footer;