import React from "react";
import telegram from "../../../img/telegram.svg";
import whatsapp from "../../../img/whatsapp.svg";
import styles from "./footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__top}>
          <h1 className={styles.footer__title}>Logo</h1>
          <div className={styles.footer__lists}>
            <div>
              <h3
                className={cx("footer__subtitle", "footer__subtitle-services")}
              >
                Услуги
              </h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    Support and development
                  </a>
                </li>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    UI/UX and product design
                  </a>
                </li>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    Progressive Web Applications (PWA)
                  </a>
                </li>
              </ul>
            </div>
            <div className={cx("footer__list-company")}>
              <h3 className={styles.footer__subtitle}>Компания</h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    О компании
                  </a>
                </li>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    Проекты
                  </a>
                </li>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className={cx("footer__list-contacts-wrapper")}>
              <h3
                className={cx("footer__subtitle", "footer__subtitle-contacts")}
              >
                Контакты
              </h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__items}>
                  <a className={cx("footer__items-link")} href="#">
                    Скачать презентацию
                  </a>
                </li>
                <li className={styles.footer__items}>
                  <a
                    className={cx(
                      "footer__items-link",
                      "footer__items-link-phone"
                    )}
                    href="tel:+7(499)9999999"
                  >
                    +7 (499) 999-99-99
                  </a>
                </li>
                <li className={styles.footer__items}>
                  <a
                    className={cx("footer__items-link")}
                    href="mailto:info@site.com"
                  >
                    info@site.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className={cx("footer__list-contacts")}>
                <li>
                  <button className={cx("footer__list-btn")}>
                    <img src={telegram} alt="Telegram" />
                  </button>
                </li>
                <li>
                  <button className={cx("footer__list-btn")}>
                    <img src={whatsapp} alt="Whatsapp" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p className={styles.footer__items}>
            © Company 2022. All rights reserved.
          </p>
          <p className={styles.footer__items}>Политика конфиденциальноcти</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
