import React, { useState } from 'react';
import '../../../styles/components/header.scss'
import toggleBtn from '../../../img/toggle-close.svg'

function Header() {

   const [toggle, setToggle] = useState(false)
   return (
      <div className='header'>
        <h1 className='header__title'>Logo</h1>
        <button className='header__toggle' onClick={() => setToggle(!toggle)}><img src={toggleBtn} alt="toggle" /></button>
        <div className={toggle ? 'header__list-wrapper-opened': 'header__list-wrapper'}>
        <ul className={toggle?'header__list header__list-info-opened' : 'header__list header__list-info'}>
         <li className='header__items'>Проекты</li>
         <li className='header__items'>О компании</li>
         <li className='header__items header__items-contacts'>Контакты</li>
        </ul>
        <div className={toggle ? 'header__right-opened': 'header__right'}>
         <ul className={toggle? 'header__list header__list-lang-opened': 'header__list header__list-lang'}>
            <li className='header__items-lang header__items-lang-ru'>RU</li>
            <li className='header__items-lang header__items-lang-eng'>EN</li>
         </ul>
         <button className='header__button'>Начать проект</button>
        </div>
        </div>
      </div>
   );
}

export default Header;