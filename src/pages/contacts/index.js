import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import styles from "./contacts.module.css";

const EMAIL = "info@hexatech.uz";
const TG = "hexatechuz";
const INSTAGRAM = "hexatech.uz";

function Page() {
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
              <span>{EMAIL}</span>
            </li>
            <li className={styles.telegram}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/telegram.svg" alt="telegram" />
              </div>

              <span>@{TG}</span>
            </li>
            <li className={styles.instagram}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/instagram.svg" alt="instagram" />
              </div>

              <span>{INSTAGRAM}</span>
            </li>
            {/* <li className={styles.youtube}>
              <div className={styles.list__item_img}>
                <img src="/icons/contacts/youtube.svg" alt="youtube" />
              </div>

              <span>hexatech-youtube</span>
            </li> */}
          </ul>
        </div>
        <div className={styles.map__wrapper}>
          <h3 className={styles.map__title}>Адрес: </h3>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d748.9211245209966!2d69.3260169!3d41.3374735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48daad5fa8b%3A0x3dfb36cd36226769!2zODhQRytYSlIsINCX0LjRkdC70LjQu9Cw0YAg0YPQuy4gMSwgMTAwMDAwLCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQ!5e0!3m2!1sru!2s!4v1759743902611!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Page);
