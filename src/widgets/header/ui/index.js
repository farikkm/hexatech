import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../model";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link href={"/home"} className="header__logo">
            <img src="/icons/logo.png" alt="hexatech-logo" />
          </Link>
          <nav className="header__menu">
            <ul className="header__list">
              {links.map((link, index) => (
                <li key={index} className="header__item">
                  <Link
                    href={link.href}
                    className={`header__link ${
                      currentPath === link.href ? "_active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__lang">
            <span id="language">Ru</span>
            <img src="/icons/header/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>
    </header>
  );
}
