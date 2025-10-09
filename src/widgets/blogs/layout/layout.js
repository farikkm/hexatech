import styles from "./layout.module.css";
import Navigation from "../navigation/navigation";
import SubscriptionForm from "../subscription-form/subscription-form";

function Layout({ children, title, subtitle, t }) {
  const links = Object.values(t.raw("events.links"));

  console.log(links);

  return (
    <div className={styles.blogs__page} id="blogs-page">
      <div className="container">
        <div className={styles.hero}>
          <h2 className={styles.hero__title}>{t("title")}</h2>
          <p className={styles.hero__text}>{t("subtitle")}</p>
          <button
            onClick={() => {
              const subscriptionForm =
                document.getElementById("subscription-form");
              subscriptionForm.scrollIntoView({ behavior: "smooth" });
            }}
            className={styles.hero__button}
          >
            {t("button")}
          </button>
        </div>
        <div className="events">
          <h3 className={styles.events__title}>{t("events.title")}</h3>
          <p className={styles.events__subtitle}>{t("events.subtitle")}</p>

          <Navigation links={links} />

          {children}
        </div>
      </div>
      <SubscriptionForm />
    </div>
  );
}

export default Layout;
