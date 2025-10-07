import "@/styles/fonts.css";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import AppLayout from "./_layout";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import NotFound from "@/pages/404";
import Head from "next/head";
import { APP_NAME } from "@/shared/config/contants";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale;

  if (!pageProps?.messages) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <NextIntlClientProvider messages={pageProps.messages} locale={locale}>
        <AppLayout Component={Component} pageProps={pageProps} />
      </NextIntlClientProvider>
    </>
  );
}
