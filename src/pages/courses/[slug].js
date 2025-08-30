import Form from "@/widgets/form/ui";
import styles from "./course.module.css";
import coursesData from "@/shared/data/courses.json";

export default function Page({ course }) {
  return (
    <div className={styles.course__page} id="course-page">
      <div className="container">
        <div className={styles.course__hero}>
          <img
            className={styles.course__bg}
            src={course.background_url}
            alt="course_background"
          />
          <h1 className={styles.course__title}>{course.name}</h1>
          <span className={styles.course__subtitle}>{course.subtitle}</span>

          <p className={styles.course__description}>{course.full_desc}</p>
          <p className={styles.course__aim}>{course.course_aim}</p>

          <div className={styles.course__info}>
            <div>
              <img
                src="/images/course/education-format.png"
                alt="course-info-img"
              />
              <div className={styles.course__info_text}>
                <h5>Формат обучения</h5>
                <span>{course.education_format}</span>
              </div>
            </div>
            <div>
              <img
                src="/images/course/course-duration.png"
                alt="course-info-img"
              />
              <div className={styles.course__info_text}>
                <h5>Длительность</h5>
                <span>{course.full_duration}</span>
              </div>
            </div>
            <div>
              <img
                src="/images/course/courses-number.png"
                alt="course-info-img"
              />
              <div className={styles.course__info_text}>
                <h5>Количество занятий</h5>
                <span>{course.courses_number}</span>
              </div>
            </div>
            <div>
              <img
                src="/images/course/portfolio-info.png"
                alt="course-info-img"
              />
              <div className={styles.course__info_text}>
                <h5>Портфолио</h5>
                <span>{course.portfolio_info}</span>
              </div>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = coursesData.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const course = coursesData.find((item) => item.slug === slug);

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: { course },
  };
}
