import Link from "next/link";
import newsData from "../../../../../../public/data/news.json";

export default function Page({ newsItem }) {
  return (
    <>
      <h1>
        {newsItem.date}: {newsItem.content}
      </h1>
      <Link href={`/blogs/news/${newsItem.date}/${newsItem.slug}/comments`}>
        Комменты
      </Link>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { date, slug } = params;

  console.log(date, slug);

  // имитация запроса в БД → фильтруем json
  const newsItem = newsData.find(
    (item) => item.date === date && item.slug === slug
  );

  if (!newsItem) {
    return { notFound: true }; // вернет 404
  }

  return {
    props: { newsItem },
  };
}
