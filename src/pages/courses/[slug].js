import Head from "next/head";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.slug}</title>
      </Head>
      <p>Courses: {router.query.slug}</p>
    </>
  );
}
