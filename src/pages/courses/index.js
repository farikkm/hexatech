import coursesData from "@/shared/data/courses.json";
import CoursesItem from "@/shared/ui/courses-item";
import styles from "./courses.module.css";

export default function Page() {
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

        <video
          className={`transition-mask ${styles.video}`}
          src="/videos/courses.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
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
