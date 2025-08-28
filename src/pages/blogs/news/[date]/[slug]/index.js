import Link from "next/link";
import newsData from "@/shared/data/news.json";

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

export async function getStaticPaths() {
  const paths = newsData.map((item) => ({
    params: {
      date: item.date,
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { date, slug } = params;

  const newsItem = newsData.find(
    (item) => item.date === date && item.slug === slug
  );

  if (!newsItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: { newsItem },
  };
}
