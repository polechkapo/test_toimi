import React, { useState } from "react";

function Form() {
  const [send, setSend] = useState("Отправить");
  const [plane, setPlain] = useState(false);
  const handleButton = (event) => {
    event.preventDefault();
    setPlain(true);
    setSend("Ваше сообщение отправлено!");
    event.target.reset();
    setTimeout(() => {
      setPlain(false);
      setSend("Отправить");
    }, 2000);
  };
  return (
    <div className="content__container">
      <form className="content__form" onSubmit={handleButton}>
        <div className="content__form-wrapper">
          <div className="content__form-inputs">
            <label htmlFor="name" className="content__form-label">
              <input
                type="text"
                name="name"
                className="content__form-name"
                required
              />
               <p className="content__form-name-p">
                Ваше имя<span className="content__span">*</span>
              </p>
            </label>
            <label htmlFor="name" className="content__form-label">
              <input
                type="text"
                name="name"
                className="content__form-name content__form-email"
                required
              />
               <p className="content__form-name-p">
               Ваш E-Mail<span className="content__span">*</span>
              </p>
            </label>
          </div>
          <label htmlFor="name" className="content__form-label">
              <input
                type="text"
                name="name"
                className="content__form-name content__form-comment"
                required
              />
               <p className="content__form-name-p">
               Комментарий<span className="content__span">*</span>
              </p>
            </label>
          <div className="content__form-radio-wrapper">
            <input
              type="radio"
              name="policy"
              className="content__form-checkbox-input"
              required
            />
            <label htmlFor="policy" className="content__form-checkbox">
              Согласен с{" "}
              <a class="content__email content__policy" href="#">
                Политикой конфиденциальноcти
              </a>
            </label>
          </div>
        </div>
        <button
          className={
            plane ? "content__form-button submited" : "content__form-button"
          }
          type="submit"
          onSubmit={handleButton}
          name="btn"
        >
          {send}
        </button>
      </form>
    </div>
  );
}

export default Form;
