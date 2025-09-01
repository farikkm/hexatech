import styles from "./recent-news-item.module.css";

export default function RecentNewsItem({ imageUrl, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={imageUrl} alt="recent-news-img" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.date}>1 день назад </span>
      </div>
    </div>
  );
}
