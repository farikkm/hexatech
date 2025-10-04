import Loader from "@/shared/ui/loader_temp";
import Footer from "@/widgets/footer/ui";
import Header from "@/widgets/header";
import ScrollTopButton from "@/widgets/scroll-top-button";
import { useEffect, useState } from "react";

export default function AppLayout({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Component {...pageProps} />
            <ScrollTopButton />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
