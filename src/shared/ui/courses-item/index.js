import Link from "next/link";
import styles from "./courses-item.module.css";
import LimitedText from "../limited-text";

export default function CoursesItem({ course }) {
  return (
    <div className={styles.courses__item}>
      <div className={styles.courses__inner}>
        <div className={`${styles.right__corner}`}></div>

        <div className={`glass-icon ${styles.courses__item__img}`}>
          <img src={course.icon} alt="course-icon" />
        </div>
        <span className={styles.courses__item__badge}>курс</span>
        <h2
          className={styles.courses__item__title}
          dangerouslySetInnerHTML={{ __html: course.name }}
        ></h2>
        <span className={styles.courses__item__duration}>
          {course.duration}
        </span>

        <LimitedText text={course.desc} classes={styles.courses__item__desc} />

        <Link
          className={styles.courses__item__link}
          href={`/courses/${course.slug}`}
        >
          {course.more_info}
        </Link>
      </div>
    </div>
  );
}
