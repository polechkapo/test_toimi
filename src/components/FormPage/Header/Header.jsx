import React from 'react';
import '../../../styles/components/header.scss'

function Header() {
   return (
      <div className='header'>
        <h1 className='header__title'>Logo</h1> 
        <ul className='header__list'>
         <li className='header__items'>Проекты</li>
         <li className='header__items'>О компании</li>
         <li className='header__items header__items-contacts'>Контакты</li>
        </ul>
        <div className='header__right'>
         <ul className='header__list header__list-lang'>
            <li className='header__items-lang header__items-lang-ru'>RU</li>
            <li className='header__items-lang header__items-lang-eng'>EN</li>
         </ul>
         <button className='header__button'>Начать проект</button>
        </div>
      </div>
   );
}

export default Header;