import { useState } from "react";
import styles from "../styles/form.module.css";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@/widgets/loading-button";
import { sendEmail } from "../api";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import { useTranslations } from "next-intl";

function Form() {
  const t = useTranslations("Form");

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
      title: "Записаться на курс",
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
      <h2 className={styles.form__title}>{t("title")}</h2>
      <p className={styles.form__subtitle}>{t("subtitle")}</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__inputs}>
          <FormInput
            type="text"
            placeholder={t("placeholders.full-name")}
            name="full-name"
            {...register("fullName", {
              required: t("errors.required"),
              minLength: { value: 5, message: t("errors.full-name") },
            })}
            error={errors.fullName}
          />
          <FormInput
            type="tel"
            placeholder={t("placeholders.telephone")}
            name="telephone"
            {...register("telephone", {
              required: t("errors.required"),
              pattern: {
                value: /^\+?[0-9]{9,15}$/,
                message: t("errors.telephone"),
              },
            })}
            error={errors.telephone}
          />
          <FormInput
            type="email"
            placeholder={t("placeholders.email")}
            name="email"
            {...register("email", {
              required: t("errors.required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("errors.email"),
              },
            })}
            error={errors.email}
          />
          <FormInput
            type="text"
            placeholder={t("placeholders.tg")}
            name="tg-username"
            {...register("tgUsername", {
              required: t("errors.required"),
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
          <label htmlFor="agreement">{t("agreement")}</label>
        </div>
        <LoadingButton
          className={styles.form__button}
          type="submit"
          isLoading={isLoading}
          disabled={!isUserAgreed}
        >
          {t("button")}
        </LoadingButton>

        <ToastContainer />
      </form>
    </div>
  );
}

const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Form);
