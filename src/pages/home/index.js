import styles from "./home.module.css";
import coursesData from "@/shared/data/courses.json";
import advantages from "@/shared/data/advantages.json";
import CoursesItem from "@/shared/ui/courses-item";
import Link from "next/link";
import VideoReviews from "@/widgets/video-reviews";
import Form from "@/widgets/form/ui";
import { scrollIntoApplicationForm } from "@/widgets/form/lib";

export default function Page() {
  return (
    <>
      <div id="home-page">
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.hero__wrapper}>
              <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>
                  HEXATECH - кибербезопасности и стань специалистом в этой
                  области
                </h1>
                <p className={styles.hero__text}>
                  Учитесь у действующих профессионалов международного масштаба и
                  прокачивайте навыки в которых есть острая потребность на рынке
                  труда во всем мире
                </p>
                <button
                  onClick={scrollIntoApplicationForm}
                  className={styles.hero__button}
                >
                  Оставить заявку
                </button>
              </div>
              <div className={styles.hero__media}>
                <video
                  src="/videos/main.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <img
                  className={styles.hero__globus}
                  src="/images/home-page/hero/globus.png"
                  alt="globus"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.advantages}>
          <div className="container">
            <div className={styles.advantages__wrapper}>
              <h2 className={styles.advantages__title}>
                Преимуществами HEXATECH
              </h2>

              <div className={styles.advantages__items}>
                {advantages.map((item, index) => (
                  <div key={index} className={styles.advantages__item}>
                    <div
                      className={`glass-icon ${styles.advantages__item_img}`}
                    >
                      <img src={item.icon} alt="advantages-icon" />
                    </div>
                    <h4 className={styles.advantages__item_title}>
                      {item.title}
                    </h4>
                    <p className={styles.advantages__item_text}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.courses}>
          <div className="container">
            <div className={styles.courses__wrapper}>
              <h2 className={styles.courses__title}>Популярные курсы</h2>
              <p className={styles.courses__subtitle}>
                Более 5 образовательных программ
              </p>
              <div className={styles.courses__items}>
                {coursesData.slice(0, 3).map((course, index) => (
                  <CoursesItem key={index} course={course} />
                ))}
              </div>
              <Link className={styles.courses__link} href={`/courses`}>
                Смотреть все курсы
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.reviews}>
          <div className="container">
            <div className={styles.reviews__wrapper}>
              <h2 className={styles.reviews__title}>Видео отзывы</h2>

              <VideoReviews />
            </div>
          </div>
        </section>

        <section className="sign-up-for-courses">
          <Form />
        </section>
      </div>
    </>
  );
}
