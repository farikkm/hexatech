import "@/styles/fonts.css";
import "@/styles/globals.css";
import { links } from "@/widgets/header/model";
import { useRouter } from "next/router";
import Head from "next/head";
import { APP_NAME } from "@/shared/config/contants";
import AppLayout from "./_layout";
import { NextIntlClientProvider } from "next-intl";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const locale = router.locale;

  const currentLink = links.find((link) => link.href === currentPath);

  return (
    <>
      <Head>
        <title>{currentLink ? currentLink.label : APP_NAME}</title>
      </Head>

      <NextIntlClientProvider
        messages={pageProps.messages}
        locale={router.locale}
      >
        <AppLayout Component={Component} pageProps={pageProps} />
      </NextIntlClientProvider>
    </>
  );
}
