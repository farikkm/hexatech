import styles from "./contacts.module.css";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.title}>
            Свяжитесь с нами удобным для вас способом
          </h3>

          <ul className={styles.list}>
            <li className={styles.tel}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/telephone.svg" alt="telephone" />
              </div>

              <span>+998 77 494 11 88</span>
            </li>
            <li className={styles.email}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/email.svg" alt="email" />
              </div>
              <span>hexatech500@gmail.com</span>
            </li>
            <li className={styles.telegram}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/telegram.svg" alt="telegram" />
              </div>

              <span>@hexatech-tg</span>
            </li>
            <li className={styles.instagram}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/instagram.svg" alt="instagram" />
              </div>

              <span>@hexa_tech</span>
            </li>
            <li className={styles.youtube}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/youtube.svg" alt="youtube" />
              </div>

              <span>hexatech-youtube</span>
            </li>
          </ul>
        </div>
        <div className={styles.map__wrapper}>
          <h3 className={styles.map__title}>Адрес: </h3>
          <div className={styles.map}></div>
        </div>
      </div>
    </div>
  );
}
