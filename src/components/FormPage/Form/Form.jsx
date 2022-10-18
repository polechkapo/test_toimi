import React from "react";

function Form() {
  return (
    <div>
      <form className="content__form">
         <div className="content__form-wrapper">
        <div className="content__form-inputs">
          <label htmlFor="name" className="content__form-label">
            <p>Ваше имя<span className="content__span">*</span></p>
            <input type="text" name="name" placeholder="Ваше имя" className="content__form-name" />
          </label>
          <label htmlFor="email" className="content__form-label">
            <p>Ваш E-Mail<span className="content__span">*</span></p>
            <input type="text" name="email" placeholder="Ваш E-Mail" className="content__form-email" />
          </label>
        </div>
        <label htmlFor="comment" className="content__form-label">
          <p>Комментарий<span className="content__span">*</span></p>
          <input type="text" name="comment" placeholder="Комментарий" className="content__form-comment"/>
        </label>
        <label htmlFor="policy" className="content__form-checkbox">
          <input type="radio" name="policy" />
          Согласен с Политикой конфиденциальности
        </label>
        </div>
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default Form;
