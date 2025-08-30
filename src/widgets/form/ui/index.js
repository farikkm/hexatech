import { useState } from "react";
import styles from "./form.module.css";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

export default function Form() {
  const [isUserAgreed, setIsUserAgreed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div id="applicant-form" className={styles.form__wrapper}>
      <h2 className={styles.form__title}>
        Начни карьеру в кибербезопасности уже сегодня
      </h2>
      <p className={styles.form__subtitle}>
        Курсы Hexatech помогут тебе овладеть профессией и найти первую работу в
        этой области
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__inputs}>
          <FormInput
            type="text"
            placeholder="ФИО"
            name="full-name"
            {...register("fullName", {
              required: "Поле обязательно",
              minLength: { value: 5, message: "Минимум 5 символов" },
            })}
            error={errors.fullName}
          />
          <FormInput
            type="tel"
            placeholder="Телефон"
            name="telephone"
            {...register("telephone", {
              required: "Поле обязательно",
              pattern: {
                value: /^\+?[0-9]{9,15}$/,
                message: "Введите корректный номер",
              },
            })}
            error={errors.telephone}
          />
          <FormInput
            type="email"
            placeholder="Эл. почта"
            name="email"
            {...register("email", {
              required: "Поле обязательно",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
            error={errors.email}
          />
          <FormInput
            type="text"
            placeholder="Username в ТГ"
            name="tg-username"
            {...register("tgUsername", {
              required: "Поле обязательно",
            })}
            error={errors.tgUsername}
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
