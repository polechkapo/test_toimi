import React, { useState } from "react";
import styles from "../Content/content.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Form() {
  // const [send, setSend] = useState();
  // const [animation, setAnimation] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(["Отправить", false])
  const handleSubmit = (event) => {
    event.preventDefault();
    // setAnimation(true);
    // setSend();
    setFormSubmitted(["Ваше сообщение отправлено!", true])
    event.target.reset();
    setTimeout(() => {
      setFormSubmitted((["Отправить", false]))
    }, 2000);
  };

  return (
    <div className={styles.content__container}>
      <form className={styles.content__form} onSubmit={handleSubmit}>
        <div className={cx("content__form-wrapper")}>
          <div className={cx("content__form-inputs")}>
            <label htmlFor="name" className={cx("content__form-label")}>
              <input
                type="text"
                name="name"
                className={cx("content__form-name")}
                required
              />
              <p className={cx("content__form-name-p")}>
                Ваше имя<span className={styles.content__span}>*</span>
              </p>
            </label>
            <label htmlFor="name" className={cx("content__form-label")}>
              <input
                type="text"
                name="name"
                className={cx("content__form-name", "content__form-email")}
                required
              />
              <p className={cx("content__form-name-p")}>
                Ваш E-Mail<span className={styles.content__span}>*</span>
              </p>
            </label>
          </div>
          <label htmlFor="name" className={cx("content__form-label")}>
            <input
              type="text"
              name="name"
              className={cx("content__form-name", "content__form-comment")}
              required
            />
            <p className={cx("content__form-name-p")}>
              Комментарий<span className={styles.content__span}>*</span>
            </p>
          </label>
          <div className={cx("content__form-radio-wrapper")}>
            <input
              type="radio"
              name="policy"
              className={cx("content__form-checkbox-input")}
              required
            />
            <label htmlFor="policy" className={cx("content__form-checkbox")}>
              Согласен с{" "}
              <a className={cx("content__email", "content__policy")} href="#">
                Политикой конфиденциальноcти
              </a>
            </label>
          </div>
        </div>
        <button
          className={
            formSubmitted[1]
              ? cx("content__form-button", "submited")
              : cx("content__form-button")
          }
          type="submit"
          name="btn"
        >
          {formSubmitted[0]}
        </button>
      </form>
    </div>
  );
}

export default Form;
