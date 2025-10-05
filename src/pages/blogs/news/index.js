import NewsItem from "@/shared/ui/news-item";
import Layout from "@/widgets/blogs/layout/layout";
import styles from "./news.module.css";
import RecentNewsItem from "@/shared/ui/recent-news-item";
import { getStaticPropsWithMessages, withMessages } from "@/shared/libs/withMessages";

const news = [
  {
    title: "Запуск платформы HEXATECH",
    subtitle:
      "HEXATECH официально открыла доступ к своим курсам по кибербезопасности. Теперь обучение доступно в онлайн- и офлайн-форматах, с интерактивными заданиями и реальными кейсами от экспертов.",
    imageUrl: "/images/news/01.png",
  },
  {
    title: "Акция: -20% на курс «Этичный хакинг»",
    subtitle:
      "До конца месяца вы можете записаться на курс по сниженной цене и получить доступ ко всем материалам. Отличная возможность начать путь в кибербезопасность!",
    imageUrl: "/images/news/02.png",
  },
  {
    title: "Бонус для первых студентов",
    subtitle:
      "Первые 30 участников любого нового курса получают персональную консультацию с наставником.",
    imageUrl: "/images/news/03.png",
  },
];

const recentNews = [
  {
    title: "Открыта регистрация на осенний интенсив",
    imageUrl: "/images/recent-news/01.png",
  },
  {
    title: "Запуск платформы HEXATECH",
    imageUrl: "/images/recent-news/02.png",
  },
];

function Page() {
  return (
    <Layout
      title="Свежие события из мира HEXATECH и кибербезопасности"
      subtitle="Анонсы курсов, мероприятий, акций"
    >
      <div className={styles.news__wrapper}>
        <div className={styles.news}>
          {news.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imgUrl={item.imageUrl}
            />
          ))}
        </div>

        <div className={styles.recent__news}>
          <h3 className={styles.recent__news_title}>Недавние новости</h3>
          {recentNews.map((item, index) => (
            <RecentNewsItem
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Page);
