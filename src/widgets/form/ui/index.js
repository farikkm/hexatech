import { useState } from "react";
import styles from "./form.module.css";
import FormInput from "./FormInput";

export default function Form() {
  const [isUserAgreed, setIsUserAgreed] = useState(false);

  return (
    <div className={styles.form__wrapper}>
      <h2 className={styles.form__title}>
        Начни карьеру в кибербезопасности уже сегодня
      </h2>
      <p className={styles.form__subtitle}>
        Курсы Hexatech помогут тебе овладеть профессией и найти первую работу в
        этой области
      </p>

      <form className={styles.form}>
        <div className={styles.form__inputs}>
          <FormInput required type="text" placeholder="ФИО" name="full-name" />
          <FormInput
            required
            type="tel"
            placeholder="Телефон"
            name="telephone"
          />
          <FormInput
            required
            type="email"
            placeholder="Эл. почта"
            name="email"
          />
          <FormInput
            required
            type="text"
            placeholder="Username в ТГ"
            name="tg-username"
          />
        </div>

        <div className={styles.form__agreement}>
          <input
            onChange={() => setIsUserAgreed(!isUserAgreed)}
            name="agreement"
            id="agreement"
            type="checkbox"
          />
          <label htmlFor="agreement">
            Я даю согласие на обработку моих персональных данных в соответствии
            с Политикой конфиденциальности.
          </label>
        </div>
        <button
          disabled={!isUserAgreed}
          className={styles.form__button}
          type="submit"
        >
          ЗАПИСАТЬСЯ
        </button>
      </form>
    </div>
  );
}
