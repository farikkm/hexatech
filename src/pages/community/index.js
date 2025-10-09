import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import styles from "./community.module.css";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("Community");

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        <div className={styles.table__wrapper}>
          <h4 className={styles.table__title}>{t("table.title")}</h4>
          <table className={styles.table}>
            <thead className={styles.table__head}>
              <tr>
                <th>{t("table.photo")}</th>
                <th>{t("table.fio")}</th>
                <th>{t("table.direction")}</th>
                <th>{t("table.mark")}</th>
                <th>{t("table.awards")}</th>
              </tr>
            </thead>

            {/* Столбец с именами всех выпускников из списка пусть остается пустым */}

            {/* <tbody>
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
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Page);
