import coursesData from "@/shared/data/courses.json";
import CoursesItem from "@/shared/ui/courses-item";
import styles from "./courses.module.css";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";

function Page() {
  return (
    <div id="courses-page" className={styles.courses}>
      <div className="container">
        <div className={styles.courses__content}>
          <h1 className={styles.courses__title}>
            Обучение Кибербезопасности Нового Поколения
          </h1>
          <p className={styles.courses__text}>
            Миссия HEXATECH — подготовить специалистов, которые смогут
            эффективно противостоять киберугрозам и обеспечивать безопасность
            данных в любой точке мира
          </p>
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
          <h2>Все нужные навыки в одном месте</h2>
          <p>
            Наши курсы — это путь от новичка до эксперта в мире цифровой
            безопасности
          </p>
          <div className={styles.courses__items}>
            {coursesData.map((course, index) => (
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
