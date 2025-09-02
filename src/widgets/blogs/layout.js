import styles from "./layout.module.css";
import Navigation from "./navigation";
import SubscriptionForm from "./subscription-form";

export default function Layout({ children, title, subtitle }) {
  return (
    <div className={styles.blogs__page} id="blogs-page">
      <div className="container">
        <div className={styles.hero}>
          <h2 className={styles.hero__title}>
            Блог HEXATECH — новости, аналитика и советы из мира
            кибербезопасности
          </h2>
          <p className={styles.hero__text}>
            Читайте актуальные статьи, исследования и рекомендации, которые
            помогут вам развиваться в профессии и быть в курсе всех событий
          </p>
          <button className={styles.hero__button}>Подписаться на блог</button>
        </div>
        <div className="events">
          <h3 className={styles.events__title}>{title}</h3>
          <p className={styles.events__subtitle}>{subtitle}</p>

          <Navigation />

          {children}
        </div>
      </div>
      <SubscriptionForm />
    </div>
  );
}
