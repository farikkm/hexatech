import coursesData from "@/shared/data/courses.json";
import CoursesItem from "@/shared/ui/courses-item";
import styles from "./courses.module.css";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("Courses-Page");
  const translator = useTranslations("");
  const coursesValues = translator.raw("Courses");

  return (
    <div id="courses-page" className={styles.courses}>
      <div className="container">
        <div className={styles.courses__content}>
          <h1 className={styles.courses__title}>{t("hero.title")}</h1>
          <p className={styles.courses__text}>{t("hero.subtitle")}</p>
        </div>

        <div className={`transition-mask ${styles.video__wrapper}`}>
          <video
            className={`${styles.video}`}
            src="/videos/courses.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className={styles.courses__wrapper}>
          <h2>{t("courses.title")}</h2>
          <p>{t("courses.subtitle")}</p>
          <div className={styles.courses__items}>
            {Object.values(coursesValues).map((course, index) => (
              <CoursesItem key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Page);
