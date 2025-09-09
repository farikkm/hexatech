import { useState } from "react";
import styles from "./subscription-form.module.css";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../form/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@/widgets/loading-button";
import FormInput from "../../form/ui/FormInput";

export default function SubscriptionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const params = {
      title: "Подписаться на новости",
      fullName: data.fullName,
      email: data.email,
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
    <div id="subscription-form" className={styles.form__wrapper}>
      <div className="container">
        <h2 className={styles.form__title}>
          Получайте свежие статьи, новости и советы из мира
          <span> кибербезопасности</span> прямо на почту
        </h2>
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

          <LoadingButton
            className={styles.form__button}
            type="submit"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
          >
            Подписаться
          </LoadingButton>

          <ToastContainer />
        </form>
      </div>

      <div className={styles.chart__img} />
    </div>
  );
}
