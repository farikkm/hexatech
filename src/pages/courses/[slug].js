import Form from "@/widgets/form/ui";
import styles from "./course.module.css";
import coursesData from "@/shared/data/courses.json";
import { scrollIntoApplicationForm } from "@/widgets/form/lib";
import SocCourseBg from "@/shared/ui/course-backgrounds/soc-course-bg";
import PysploitCourseBg from "@/shared/ui/course-backgrounds/pysploit-course-bg";
import { useRouter } from "next/router";
import CorporativeBg from "@/shared/ui/course-backgrounds/corporative-bg";
import ForensicsBg from "@/shared/ui/course-backgrounds/forensics-bg";
import CybersecurityCourseBg from "@/shared/ui/course-backgrounds/cybersecurity-course-bg";
import { getMessages } from "@/shared/libs/getMessages";
import { withMessages } from "@/shared/libs/withMessages";
import { useTranslations } from "next-intl";

const backgrounds = {
  pysploit: <PysploitCourseBg />,
  "soc-analytics": <SocCourseBg />,
  cybersecurity: <CybersecurityCourseBg />,
  "cooperative-courses": <CorporativeBg />,
  forensics: <ForensicsBg />,
};

function Page() {
  const router = useRouter();
  const pathname = router.asPath;

  const courseName = pathname.split("/").pop();

  const translator = useTranslations("");
  const coursesValues = translator.raw("Courses");

  const course = coursesValues[courseName];

  return (
    <div className={styles.course__page} id="course-page">
      <div className="course-background">{backgrounds[courseName]}</div>
      <div className="container">
        <div className={styles.course__hero}>
          <h2
            className={styles.course__title}
            dangerouslySetInnerHTML={{ __html: course.name }}
          ></h2>
          <span className={styles.course__subtitle}>{course.subtitle}</span>

          <p
            className={styles.course__description}
            dangerouslySetInnerHTML={{ __html: course.full_desc }}
          />
          <p
            className={styles.course__aim}
            dangerouslySetInnerHTML={{ __html: course.course_aim }}
          />

          <div className={styles.course__info}>
            <div>
              <div
                style={{
                  "--icon": "url('/images/course/education-format.svg')",
                }}
                className={`glass-icon ${styles.course__info_img}`}
              >
                <img
                  src="/images/course/education-format.svg"
                  alt="course-info-img"
                />
              </div>

              <div className={styles.course__info_text}>
                <h5 data-glitch="Ф%рмат обуче#ия">
                  {course.education_format_title}
                </h5>
                <span>{course.education_format}</span>
              </div>
            </div>
            <div>
              <div
                style={{
                  "--icon": "url('/images/course/education-duration.svg')",
                }}
                className={`glass-icon ${styles.course__info_img}`}
              >
                <img
                  src="/images/course/education-duration.svg"
                  alt="course-info-img"
                />
              </div>
              <div className={styles.course__info_text}>
                <h5 data-glitch="Дли%ель#ость">{course.full_duration_title}</h5>
                <span>{course.full_duration}</span>
              </div>
            </div>
            <div>
              <div
                style={{
                  "--icon": "url('/images/course/education-number.svg')",
                }}
                className={`glass-icon ${styles.course__info_img}`}
              >
                <img
                  src="/images/course/education-number.svg"
                  alt="course-info-img"
                />
              </div>
              <div className={styles.course__info_text}>
                <h5 data-glitch="Кол%честв& занятий ">
                  {course.courses_number_title}
                </h5>
                <span>{course.courses_number}</span>
              </div>
            </div>
            <div>
              <div
                style={{ "--icon": "url('/images/course/portfolio-info.svg')" }}
                className={`glass-icon ${styles.course__info_img}`}
              >
                <img
                  src="/images/course/portfolio-info.svg"
                  alt="course-info-img"
                />
              </div>
              <div className={styles.course__info_text}>
                <h5 data-glitch="П%ртфоли%">{course.portfolio_info_title}</h5>
                <span>{course.portfolio_info}</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Блок с информацией о преподавателях везде убираем */}

        {/* <div className={styles.teachers}>
          <h2 className={styles.teachers__title}>Преподаватели</h2>

          <div className={styles.teachers__content_wrapper}>
            <div className={styles.teachers__imgs}>
              <img src="/images/course/teacher-img.png" alt="teacher-img" />
            </div>
            <div className={styles.teachers__content}>
              <div className={styles.teachers__info}>
                <h2 className={styles.teachers__info_name}>
                  Александра Смирнова
                </h2>
                <div className={styles.teachers__info_statistics}>
                  <h2 className={styles.teachers__info_students}>
                    + 1000 <span>студентов</span>
                  </h2>
                  <h2 className={styles.teachers__info_experience}>
                    3 года
                    <span>опыт</span>
                  </h2>
                </div>
              </div>
              <p className={styles.teachers__overview}>
                Эксперт по кибербезопасности с 8-летним опытом работы в SOC и
                проведении пентестов для международных компаний.Обучил более
                1500 студентов, автор курсов по этичному хакингу, сертифицирован
                CEH (Certified Ethical Hacker).
              </p>
              <div className={styles.teachers__skills}>
                <h4 className={styles.teachers__skills_title}>Навыки:</h4>
                <div className={styles.teachers__skills_langs}>
                  <div>
                    <img src="/icons/course/languages/sql.png" alt="sql" />
                    <span>SQL</span>
                  </div>
                  <div>
                    <img
                      src="/icons/course/languages/python.png"
                      alt="python"
                    />
                    <span>Python</span>
                  </div>
                  <div>
                    <img src="/icons/course/languages/bash.png" alt="bash" />
                    <span>Bash</span>
                  </div>
                  <div>
                    <img
                      src="/icons/course/languages/powershell.png"
                      alt="powershell"
                    />
                    <span>PowerShell</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {course.pricing && (
          <div className={styles.prices}>
            <h2 className={styles.prices__title}>{course.pricing.title}</h2>

            <div className={styles.prices__cards}>
              <div className={styles.prices__card}>
                <div className={styles.prices__card_top}>
                  <h3 className={styles.prices__card_title}>
                    {course.pricing.online.title}
                  </h3>
                  <span className={styles.prices__card_duration}>
                    {course.pricing.online.duration}
                  </span>
                </div>
                <ul className={styles.prices__card_conditions}>
                  <h5>{course.pricing.online.condition}: </h5>
                  {course.pricing.online.list?.map((label, index) => (
                    <li key={index}>{label}</li>
                  ))}
                </ul>
                <button
                  onClick={scrollIntoApplicationForm}
                  className={styles.prices__card_button}
                >
                  {course.pricing.online.button}
                </button>
              </div>
              <div className={styles.prices__card}>
                <div className={styles.prices__card_top}>
                  <h3 className={styles.prices__card_title}>
                    {course.pricing.offline.title}
                  </h3>
                  <span className={styles.prices__card_duration}>
                    {course.pricing.offline.duration}
                  </span>
                </div>
                <ul className={styles.prices__card_conditions}>
                  <h5>{course.pricing.offline.condition}: </h5>
                  {course.pricing.offline.list?.map((label, index) => (
                    <li key={index}>{label}</li>
                  ))}
                </ul>
                <button
                  onClick={scrollIntoApplicationForm}
                  className={styles.prices__card_button}
                >
                  {course.pricing.offline.button}
                </button>
              </div>
            </div>
          </div>
        )}

        {course.resume && (
          <div className={styles.resume}>
            <h2 className={styles.resume__title}>{course.resume.title}</h2>
            <div className={styles.resume__cards}>
              <div className={styles.resume__preview}>
                <img
                  className={styles.resume__preview_img}
                  src="/images/resume/student.png"
                  alt="student-image"
                />
                <span>{course.resume.job.title}</span>
                <h3 className={styles.resume__preview_job}>
                  {course.resume.job.subtitle}
                </h3>
              </div>
              <div className={styles.resume__skills}>
                <ul>
                  <h4>{course.resume.skills.title}</h4>
                  {course.resume.skills.items?.map((label, index) => (
                    <li key={index}>{label}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.resume__tools}>
                <h4 className={styles.resume__tools_title}>
                  {course.resume.tools.title}
                </h4>
                {course.resume.tools.items && (
                  <div className={styles.resume__tools_items}>
                    {course.resume.tools.items.map((item, index) => (
                      <div key={index} className={styles.resume__tools_item}>
                        {item.icon_url && (
                          <img src={item.icon_url} alt="tools-icon" />
                        )}
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.resume__add}>
              <img src="/icons/course/plus.svg" alt="plus" />
            </div>
          </div>
        )}

        {course.portfolio && (
          <div className={styles.portfolio}>
            <h2 className={styles.portfolio__title}>
              {course.portfolio.title}
            </h2>

            <div className={styles.portfolio__cards}>
              {course.portfolio.first && (
                <div className={styles.portfolio__card}>
                  <div className={styles.portfolio__card_top}>
                    <h3 className={styles.portfolio__card_title}>
                      {course.portfolio.first.title}
                    </h3>
                    <span className={styles.portfolio__card_index}>01</span>
                  </div>
                  <p className={styles.portfolio__card_text}>
                    {course.portfolio.first.text}
                  </p>
                </div>
              )}
              {course.portfolio.second && (
                <div className={styles.portfolio__card}>
                  <div className={styles.portfolio__card_top}>
                    <h3 className={styles.portfolio__card_title}>
                      {course.portfolio.second.title}
                    </h3>
                    <span className={styles.portfolio__card_index}>02</span>
                  </div>
                  <p className={styles.portfolio__card_text}>
                    {course.portfolio.second.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {course.certificate && (
          <div className={styles.cetrificate}>
            {course.certificate_url && (
              <div className={styles.cetrificate__img}>
                <img src={course.certificate_url} alt="cetrificate__img" />
              </div>
            )}
            <div className={styles.cetrificate__content}>
              <h2 className={styles.cetrificate__title}>
                {course.certificate.title}
              </h2>
              <p className={styles.cetrificate__text}>
                {course.certificate.text}
              </p>
            </div>
          </div>
        )}

        <Form />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [];
  const locales = ["en", "ru", "uz"];

  for (const locale of locales) {
    for (const course of coursesData) {
      paths.push({
        locale,
        params: { slug: course.slug },
      });
    }
  }

  return {
    paths,
    fallback: true,
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
    props: { course, messages: await getMessages(locale) },
  };
}

export default withMessages(Page);
