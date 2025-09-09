import "@/styles/fonts.css";
import "@/styles/globals.css";
import Header from "@/widgets/header";
import { links } from "@/widgets/header/model";
import { useRouter } from "next/router";
import Head from "next/head";
import { APP_NAME } from "@/shared/config/contants";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "@/shared/ui/loader_temp";
import Footer from "@/widgets/footer/ui";
import ScrollTopButton from "@/widgets/scroll-top-button";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const router = new useRouter();
  const currentPath = router.pathname;

  const currentLink = links.find((link) => link.href === currentPath);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>{currentLink ? currentLink.label : APP_NAME}</title>
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader />
        ) : (
          <main>
            <motion.div>
              <Component {...pageProps} />
              <Footer />
              <ScrollTopButton />
            </motion.div>
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
