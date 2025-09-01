import styles from "./news-item.module.css";

export default function NewsItem({ imgUrl, title, subtitle }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={imgUrl} alt="news-img" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.info}>
          <span className={styles.date}>14 августа 2025</span>
          <span className={styles.comments}>5</span>
          <span className={styles.replies}>2</span>
        </div>
      </div>
    </div>
  );
}
