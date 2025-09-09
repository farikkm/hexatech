import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "./model";
import { useState, useEffect } from "react";
import { isMobile } from "@/shared/utils/isMobile";
import { APP_NAME } from "@/shared/config/contants";

export default function Header() {
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
            <img src="/icons/favicon.svg" alt="hexatech-logo" />
            <span>{APP_NAME}</span>
          </Link>
          <nav className={`header__menu ${isMenuOpen ? "_active" : ""}`}>
            <ul className="header__list">
              {links.map((link, index) => (
                <li key={index} className="header__item">
                  <Link
                    data-glitch={link.glitch}
                    data-label={link.label}
                    href={link.href}
                    className={`header__link ${
                      currentPath === link.href ? "_active" : ""
                    }`}
                    onClick={() => {
                      if (isMobile()) setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__lang">
            <span id="language">Ru</span>
            {/* <img src="/icons/header/arrow-down.svg" alt="arrow-down" /> */}
          </div>

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
    </header>
  );
}
