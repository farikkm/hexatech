import styles from "./community.module.css";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.title}>Наши выпускники</h2>
        <p className={styles.subtitle}>
          Здесь собраны лучшие студенты и специалисты, которые прошли наши
          курсы. Вы можете узнать их достижения и успехи, а также вдохновиться
          их примером
        </p>

        <div className={styles.table__wrapper}>
          <h4 className={styles.table__title}>НАША ГОРДОСТЬ</h4>
          <table className={styles.table}>
            <thead className={styles.table__head}>
              <tr>
                <th>Фото</th>
                <th>Фио</th>
                <th>Направление</th>
                <th>Оценка</th>
                <th>Награды</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.student}>
                <td className={styles.student__photo}>
                  <div></div>
                </td>
                <td className={styles.student__name}>Анна Валеревна</td>
                <td className={styles.student__course}>Этичный хакинг</td>
                <td className={styles.student__rating}>
                  <span>250</span>
                </td>
                <td className={styles.student__awards}>
                  Лучший в тестировании
                </td>
              </tr>
              <tr className={styles.student}>
                <td className={styles.student__photo}>
                  <div></div>
                </td>
                <td className={styles.student__name}>Мария Иванова</td>
                <td className={styles.student__course}>SOC-аналитика</td>
                <td className={styles.student__rating}>
                  <span>180</span>
                </td>
                <td className={styles.student__awards}>Активный участник</td>
              </tr>
              <tr className={styles.student}>
                <td className={styles.student__photo}>
                  <div></div>
                </td>
                <td className={styles.student__name}>Дмитрий Ким</td>
                <td className={styles.student__course}>Forensics</td>
                <td className={styles.student__rating}>
                  <span>120</span>
                </td>
                <td className={styles.student__awards}>Помощь сообществу</td>
              </tr>
              <tr className={styles.student}>
                <td className={styles.student__photo}>
                  <div></div>
                </td>
                <td className={styles.student__name}>Ольга Петрова</td>
                <td className={styles.student__course}>Корпоративные курсы</td>
                <td className={styles.student__rating}>
                  <span>90</span>
                </td>
                <td className={styles.student__awards}>-</td>
              </tr>
              <tr className={styles.student}>
                <td className={styles.student__photo}>
                  <div></div>
                </td>
                <td className={styles.student__name}>Игорь Ахмедов</td>
                <td className={styles.student__course}>PYsploit</td>
                <td className={styles.student__rating}>
                  <span>90</span>
                </td>
                <td className={styles.student__awards}>Хакатон победитель</td>
              </tr>
              <tr className={styles.student}>
                <td className={styles.student__photo}>
                  <div></div>
                </td>
                <td className={styles.student__name}>Алина Сафарова</td>
                <td className={styles.student__course}>Этичный хакинг</td>
                <td className={styles.student__rating}>
                  <span>75</span>
                </td>
                <td className={styles.student__awards}>Первый проект</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
