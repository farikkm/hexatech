import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isMobile } from "@/shared/utils/isMobile";
import LanguageSwitcher from "../language-switcher";
import { links } from "./model";
import { useTranslations } from "next-intl";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";

function Header() {
  const t = useTranslations("Header");

  const router = useRouter();
  const currentPath = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("_lock");
    } else {
      document.body.classList.remove("_lock");
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link href={"/home"} className="header__logo">
            <img src="/icons/logo.svg" alt="hexatech-logo" />
          </Link>
          <nav className={`header__menu ${isMenuOpen ? "_active" : ""}`}>
            <ul className="header__list">
              {links.map((link, index) => (
                <li key={index} className="header__item">
                  <Link
                    data-glitch={t(`${link.translationLabel}.glitchLabel`)}
                    data-label={t(`${link.translationLabel}.label`)}
                    href={link.href}
                    className={`header__link ${
                      currentPath === link.href ? "_active" : ""
                    }`}
                    onClick={() => {
                      if (isMobile()) setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    {t(`${link.translationLabel}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />

            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`header__menu_button ${isMenuOpen ? "_active" : ""}`}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Header);
