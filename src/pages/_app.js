import "@/styles/fonts.css";
import "@/styles/globals.css";
import { links } from "@/widgets/header/model";
import { useRouter } from "next/router";
import Head from "next/head";
import { APP_NAME } from "@/shared/config/contants";
import AppLayout from "./_layout";
import { NextIntlClientProvider } from "next-intl";
import Loader from "@/shared/ui/loader_temp";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const locale = router.locale;
  const currentPath = router.pathname;
  const currentLink = links.find((link) => link.href === currentPath);

  useEffect(() => {
    if (pageProps.messages) setLoading(false);
  }, [pageProps.messages]);

  return (
    <>
      <Head>
        <title>{currentLink ? currentLink.label : APP_NAME}</title>
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <NextIntlClientProvider messages={pageProps.messages} locale={locale}>
          <AppLayout Component={Component} pageProps={pageProps} />
        </NextIntlClientProvider>
      )}
    </>
  );
}
