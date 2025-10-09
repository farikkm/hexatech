import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navigation.module.css";

export default function Navigation({ links }) {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
            <Link
              scroll={false}
              href={link.href}
              className={`${styles.link} ${
                currentPath === link.href ? styles._active : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
