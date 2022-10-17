import React from 'react';
import Form from '../Form/Form';
import '../../../styles/components/content.scss'

function Content(props) {
   return (
      <div className='content'>
         <ul className='content__breadcrums'>
            <li>Главная</li>
            <li>Контакты</li>
         </ul>
        <h2 className='content__title'>Мы рядом</h2>
        <p>Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту info@site.com</p>
         <Form/>
      </div>
   );
}

export default Content;