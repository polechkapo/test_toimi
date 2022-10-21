import React from "react";
import Form from "../Form/Form";
import styles from "./content.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={styles.content}>
      <ul className={styles.content__breadcrums}>
        <li className={cx("content__breadcrums-item")}>Главная</li>
        <li
          className={cx(
            "content__breadcrums-item",
            "content__breadcrums-contact"
          )}
        >
          Контакты
        </li>
      </ul>
      <h2 className={styles.content__title}>Мы рядом</h2>
      <p className={styles.content__description}>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам
        на почту{" "}
        <a className={styles.content__email} href="mailto:info@site.com">
          info@site.com
        </a>
      </p>
      <Form />
    </div>
  );
}

export default Content;
