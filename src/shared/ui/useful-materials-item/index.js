import styles from "./useful-materials-item.module.css";

export default function UsefulMaterialsItem({
  iconUrl,
  title,
  text,
  howToUse,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.img}>
          <img src={iconUrl} alt="useful-materials-img" />
        </div>

        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <p className={styles.howToUse}>
          <strong>Как использовать: </strong> {howToUse}
        </p>
      </div>
      <button className={styles.button}>Открыть</button>
    </div>
  );
}
