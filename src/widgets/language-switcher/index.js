import { useState } from "react";
import styles from "./language-switcher.module.css";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale: currentLocale, asPath } = router;

  const [openMenu, setOpenMenu] = useState(false);
  const [currentLocaleDisplay, setCurrentLocaleDisplay] =
    useState(currentLocale);

  const handleLocaleChange = (newLocale) => {
    setCurrentLocaleDisplay(newLocale);
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div
      className={styles.wrapper}
      onClick={() => setOpenMenu((prev) => !prev)}
    >
      <span className={styles.active__option}>
        {currentLocaleDisplay.toUpperCase()}
      </span>
      <div className={`${styles.menu} ${openMenu ? styles.menu__active : ""}`}>
        <div className={styles.options}>
          {locales
            .filter((l) => l !== currentLocale)
            .map((locale, index) => (
              <span onClick={() => handleLocaleChange(locale)} key={index}>
                {locale.toUpperCase()}
              </span>
            ))}
        </div>
      </div>
      <img
        className={styles.icon}
        src="/icons/header/arrow-down.svg"
        alt="arrow-down"
      />
    </div>
  );
};

export default LanguageSwitcher;
