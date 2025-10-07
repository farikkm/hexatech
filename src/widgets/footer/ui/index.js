import { tabs } from "../model";
import Link from "next/link";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__logo">
              <img src="/icons/logo.svg" alt="hexatech-logo" />
            </div>
            <nav className="footer__menu">
              {tabs.map((tab) => (
                <ul key={tab.title} className="footer__list">
                  <h4 className="footer__list_title">
                    {t(`${tab.key}.title`)}
                  </h4>
                  {tab.links.map((link, index) => (
                    <li key={index} className="footer__item">
                      <Link className="footer__link" href={link.href}>
                        {t(`${tab.key}.links.${link.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>
          <div className="footer__bottom">
            <span className="footer__copyright">© 2025 HEXATECH</span>
            <span className="footer__telephone">+998 77 494 11 88</span>
            <span className="footer__email">info@hexatech.uz</span>
            <div className="footer__socials">
              <img src="/icons/footer/telegram.png" alt="telegram" />
              <img src="/icons/footer/instagram.png" alt="instagram" />
              <img src="/icons/footer/youtube.png" alt="youtube" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Footer);
