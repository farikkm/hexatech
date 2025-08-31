import { useState } from "react";
import styles from "../styles/form.module.css";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@/widgets/loading-button";
import { sendEmail } from "../api";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAgreed, setIsUserAgreed] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    const params = {
      fullName: data.fullName,
      email: data.email,
      telephone: data.telephone,
      tgUsername: data.tgUsername,
    };

    const { success } = await sendEmail(params);

    if (success) {
      toast.success("Сообщение успешно отправлено!", {
        position: "top-right",
        autoClose: 3000,
        className: styles.custom__toast,
        progressClassName: styles.custom__progress,
      });
      reset();
      setIsUserAgreed(false);
    } else {
      toast.error("Ошибка при отправке!", {
        position: "top-right",
        autoClose: 3000,
        className: styles.custom__toast,
        progressClassName: styles.custom__progress,
      });
    }

    setIsLoading(false);
  };

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
            checked={isUserAgreed}
            name="agreement"
            id="agreement"
            type="checkbox"
          />
          <label htmlFor="agreement">
            Я даю согласие на обработку моих персональных данных в соответствии
            с Политикой конфиденциальности.
          </label>
        </div>
        <LoadingButton
          className={styles.form__button}
          type="submit"
          isLoading={isLoading}
          disabled={!isUserAgreed}
        >
          ЗАПИСАТЬСЯ
        </LoadingButton>

        <ToastContainer />
      </form>
    </div>
  );
}
