import Link from 'next/link';
import styles from "./not-found.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Упс! Такой страницы не существует.</p>
      <Link href="/" className={styles.homeLink}>
        Вернуться на главную
      </Link>
    </div>
  );
}
