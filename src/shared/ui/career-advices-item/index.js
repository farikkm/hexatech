import styles from "./career-advices-item.module.css";

export default function CareerAdvicesItem({ iconUrl, title, text }) {
  return (
    <div className={styles.card}>
      <div className={`glass-icon ${styles.img}`}>
        <img src={iconUrl} alt="courses-advices-img" />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <a href="#" className={styles.link}>
        Читать
      </a>
    </div>
  );
}
