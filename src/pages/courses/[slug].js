import Form from "@/widgets/form/ui";
import styles from "./course.module.css";
import coursesData from "@/shared/data/courses.json";
import { scrollIntoApplicationForm } from "@/widgets/form/lib";
import SocCourseBg from "@/shared/ui/course-backgrounds/soc-course-bg";
import PysploitCourseBg from "@/shared/ui/course-backgrounds/pysploit-course-bg";
import { useRouter } from "next/router";

const backgrounds = {
  "pysploit": <PysploitCourseBg />,
  "soc-analytics": <SocCourseBg />,
  "cybersecurity": <PysploitCourseBg />,
  "cooperative-courses": <PysploitCourseBg />,
  "forensics": <PysploitCourseBg />,
}

export default function Page({ course }) {
  const router = useRouter();
  const pathname = router.asPath;

  const courseName = pathname.split("/").pop()

  return (
    <div className={styles.course__page} id="course-page">
      {backgrounds[courseName]}
      <div className="container">
        <div className={styles.course__hero}>
          <h2 className={styles.course__title}>{course.name}</h2>
          <span className={styles.course__subtitle}>{course.subtitle}</span>

          <p className={styles.course__description}>{course.full_desc}</p>
          <p className={styles.course__aim}>{course.course_aim}</p>

          <div className={styles.course__info}>
            <div>
              <div className={`glass-icon ${styles.course__info_img}`}>
                <img
                  src="/images/course/education-format.svg"
                  alt="course-info-img"
                />
              </div>

              <div className={styles.course__info_text}>
                <h5>Формат обучения</h5>
                <span>{course.education_format}</span>
              </div>
            </div>
            <div>
              <div className={`glass-icon ${styles.course__info_img}`}>
                <img
                  src="/images/course/education-duration.svg"
                  alt="course-info-img"
                />
              </div>
              <div className={styles.course__info_text}>
                <h5>Длительность</h5>
                <span>{course.full_duration}</span>
              </div>
            </div>
            <div>
              <div className={`glass-icon ${styles.course__info_img}`}>
                <img
                  src="/images/course/education-number.svg"
                  alt="course-info-img"
                />
              </div>
              <div className={styles.course__info_text}>
                <h5>Количество занятий</h5>
                <span>{course.courses_number}</span>
              </div>
            </div>
            <div>
              <div className={`glass-icon ${styles.course__info_img}`}>
                <img
                  src="/images/course/portfolio-info.svg"
                  alt="course-info-img"
                />
              </div>
              <div className={styles.course__info_text}>
                <h5>Портфолио</h5>
                <span>{course.portfolio_info}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.teachers}>
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
        </div>

        <div className={styles.prices}>
          <h2 className={styles.prices__title}>Стоимость и условия</h2>

          <div className={styles.prices__cards}>
            <div className={styles.prices__card}>
              <div className={styles.prices__card_top}>
                <h3 className={styles.prices__card_title}>Онлайн</h3>
                <span className={styles.prices__card_duration}>8 недель</span>
              </div>
              <ul className={styles.prices__card_conditions}>
                <h5>Условия: </h5>
                <li>Доступ к платформе 24/7</li>
                <li>Записи занятий и материалы в личном кабинете</li>
                <li>Возможность учиться из любой точки мира</li>
                <li>Поддержка в чате и регулярные консультации</li>
                <li>Гибкий график — занимайся в удобное время</li>
              </ul>
              <button
                onClick={scrollIntoApplicationForm}
                className={styles.prices__card_button}
              >
                ЗАПИСАТЬСЯ
              </button>
            </div>
            <div className={styles.prices__card}>
              <div className={styles.prices__card_top}>
                <h3 className={styles.prices__card_title}>Оффлайн</h3>
                <span className={styles.prices__card_duration}>8 недель</span>
              </div>
              <ul className={styles.prices__card_conditions}>
                <h5>Условия: </h5>
                <li>Доступ к платформе 24/7</li>
                <li>Записи занятий и материалы в личном кабинете</li>
                <li>Возможность учиться из любой точки мира</li>
                <li>Поддержка в чате и регулярные консультации</li>
                <li>Гибкий график — занимайся в удобное время</li>
              </ul>
              <button
                onClick={scrollIntoApplicationForm}
                className={styles.prices__card_button}
              >
                ЗАПИСАТЬСЯ
              </button>
            </div>
          </div>
        </div>

        <div className={styles.resume}>
          <h2 className={styles.resume__title}>Ваше резюме после курса</h2>
          <div className={styles.resume__cards}>
            <div className={styles.resume__preview}>
              <img
                className={styles.resume__preview_img}
                src="/images/resume/student.png"
                alt="student-image"
              />
              <span>Должность</span>
              <h3 className={styles.resume__preview_job}>
                Специалист по кибербезопастности
              </h3>
            </div>
            <div className={styles.resume__skills}>
              <ul>
                <h4>Навыки</h4>
                <li>Оценка защищённости взлом веб-приложений</li>
                <li>Оценка защищённости и взлом беспроводных сетей</li>
                <li>Оценка защищённости и взлом сетевых устройств</li>
                <li>Анализ вредоносного ПО</li>
                <li>Анализ сетевого трафика</li>
                <li>Поиск уязвимостей ОС</li>
                <li>Администрирование операционных систем</li>
                <li>Red Teaming - проведение атак нулевого дня</li>
                <li>
                  Написание отчётов соответствующим стандартам международных
                  компаний
                </li>
              </ul>
              <ul>
                <h4>Владение Python и скриптовыми языками</h4>
                <li>Написание собственных инструментов</li>
                <li>Корректировка существующих инструментов под себя</li>
              </ul>
              <ul>
                <h4>Гибкие навыки</h4>
                <li>Многозадачность</li>
                <li>Внимательность к деталям</li>
                <li>Аналитические способности</li>
              </ul>
            </div>
            <div className={styles.resume__tools}>
              <h4 className={styles.resume__tools_title}>Инструменты</h4>
              <div className={styles.resume__tools_items}>
                <div className={styles.resume__tools_item}>
                  <img
                    src="/icons/course/languages/powershell.png"
                    alt="powershell"
                  />
                  <span>PowerShell</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/bash.png" alt="bash" />
                  <span>Bash</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/python.png" alt="python" />
                  <span>Python</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/sql.png" alt="sql" />
                  <span>SQL</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img
                    src="/icons/course/languages/powershell.png"
                    alt="powershell"
                  />
                  <span>PowerShell</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/bash.png" alt="bash" />
                  <span>Bash</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/python.png" alt="python" />
                  <span>Python</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/sql.png" alt="sql" />
                  <span>SQL</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img
                    src="/icons/course/languages/powershell.png"
                    alt="powershell"
                  />
                  <span>PowerShell</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/bash.png" alt="bash" />
                  <span>Bash</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/python.png" alt="python" />
                  <span>Python</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/sql.png" alt="sql" />
                  <span>SQL</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img
                    src="/icons/course/languages/powershell.png"
                    alt="powershell"
                  />
                  <span>PowerShell</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/bash.png" alt="bash" />
                  <span>Bash</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/python.png" alt="python" />
                  <span>Python</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/sql.png" alt="sql" />
                  <span>SQL</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/bash.png" alt="bash" />
                  <span>Bash</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/python.png" alt="python" />
                  <span>Python</span>
                </div>
                <div className={styles.resume__tools_item}>
                  <img src="/icons/course/languages/sql.png" alt="sql" />
                  <span>SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.portfolio}>
          <h2 className={styles.portfolio__title}>Проекты для портфолио</h2>

          <div className={styles.portfolio__cards}>
            <div className={styles.portfolio__card}>
              <div className={styles.portfolio__card_top}>
                <h3 className={styles.portfolio__card_title}>Pentest</h3>
                <span className={styles.portfolio__card_index}>01</span>
              </div>
              <p className={styles.portfolio__card_text}>
                Проведение комплексного тестирования веб-приложения с целью
                выявления уязвимостей. В рамках проекта использовались
                OWASP-методологии и специализированные инструменты (Burp Suite,
                Nmap, Metasploit). Составлен отчёт с найденными уязвимостями и
                рекомендациями по их устранению.Результат: заказчик получил
                список рисков и план действий по повышению уровня защиты
              </p>
            </div>
            <div className={styles.portfolio__card}>
              <div className={styles.portfolio__card_top}>
                <h3 className={styles.portfolio__card_title}>Red Teaming</h3>
                <span className={styles.portfolio__card_index}>02</span>
              </div>
              <p className={styles.portfolio__card_text}>
                Реализован комплексный сценарий атаки, включающий социальную
                инженерию, тестирование сетевой инфраструктуры и попытку обхода
                систем мониторинга.Использованные инструменты: Cobalt Strike,
                BloodHound, Mimikatz.Результат: выявлены слабые места в защите,
                заказчик смог усилить систему мониторинга и политику доступа
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cetrificate}>
          <div className={styles.cetrificate__img}>
            <img src="/images/course/certificate.png" alt="cetrificate__img" />
          </div>
          <div className={styles.cetrificate__content}>
            <h2 className={styles.cetrificate__title}>
              Сертефикат после окончания курса
            </h2>
            <p className={styles.cetrificate__text}>
              После завершения курса каждый участник получает именной
              сертификат, подтверждающий его знания и практические навыки в
              области кибербезопасности. Документ можно использовать при
              устройстве на работу, добавлять в портфолио и резюме, а также
              прикладывать к профессиональным профилям в LinkedIn и других
              платформах. Сертификат служит доказательством того, что вы не
              только освоили теоретический материал, но и выполнили реальные
              практические задания и кейсы.
            </p>
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
