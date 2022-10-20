import React, { useState } from "react";
import styles from "./header.module.scss";
import toggleBtn from "../../../../img/toggle-close.svg";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>Logo</h1>
      <button className={styles.header__toggle} onClick={() => setOpen(!open)}>
        <img src={toggleBtn} alt="toggle" />
      </button>
      <div
        className={
          open ? cx("header__list-wrapper-opened") : cx("header__list-wrapper")
        }
      >
        <ul
          className={
            open
              ? cx("header__list", "header__list-info-opened")
              : cx("header__list", "header__list-info")
          }
        >
          <li>
            <a className={styles.header__items} href="#">
              Проекты
            </a>
          </li>
          <li>
            <a className={styles.header__items} href="#">
              О компании
            </a>
          </li>
          <li>
            <a
              className={cx("header__items", "header__items-contacts")}
              href="#"
            >
              Контакты
            </a>
          </li>
        </ul>
        <div
          className={open ? cx("header__right-opened") : cx("header__right")}
        >
          <ul
            className={
              open
                ? cx("header__list", "header__list-lang-opened")
                : cx("header__list", "header__list-lang")
            }
          >
            <li>
              <a
                className={cx(
                  "header__items-lang",
                  "header__items-lang-option"
                )}
                href="#"
              >
                RU
              </a>
            </li>
            <li>
              <a
                className={cx("header__items-lang", "header__items-lang-eng")}
                href="#"
              >
                EN
              </a>
            </li>
          </ul>
          <button className={styles.header__button}>Начать проект</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
