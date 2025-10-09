import { useState } from "react";
import styles from "./subscription-form.module.css";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../form/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@/widgets/loading-button";
import FormInput from "../../form/ui/FormInput";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import { useTranslations } from "next-intl";

function SubscriptionForm() {
  const t = useTranslations("Form");

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
          {t.rich("subscription-title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </h2>
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

          <LoadingButton
            className={styles.form__button}
            type="submit"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
          >
            {t("button")}
          </LoadingButton>

          <ToastContainer />
        </form>
      </div>

      <div className={styles.chart__img} />
    </div>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(SubscriptionForm);
