import "@/styles/fonts.css";
import "@/styles/globals.css";
import Header from "@/widgets/header/ui";
import { links } from "@/widgets/header/model";
import { useRouter } from "next/router";
import Head from "next/head";
import { APP_NAME } from "@/shared/config/contants";

export default function App({ Component, pageProps }) {
  const router = new useRouter();
  const currentPath = router.pathname;

  const currentLink = links.find((link) => link.href === currentPath);

  return (
    <>
      <Head>
        <title>{currentLink ? currentLink.label : APP_NAME}</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
