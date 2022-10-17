import React from "react";

function Form() {
  return (
    <div>
      <form className="content__form">
         <div className="content__form-wrapper">
        <div className="content__form-inputs">
          <label htmlFor="name" className="content__form-label">
            Ваше имя
            <input type="text" name="name" placeholder="Ваше имя" className="content__form-name" />
          </label>
          <label htmlFor="email" className="content__form-label">
            Ваш E-Mail
            <input type="text" name="email" placeholder="Ваш E-Mail" />
          </label>
        </div>
        <label htmlFor="comment" className="content__form-label">
          Комментарий
          <input type="text" name="comment" placeholder="Комментарий" />
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
