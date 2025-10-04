import Footer from "@/widgets/footer/ui";
import Header from "@/widgets/header";
import ScrollTopButton from "@/widgets/scroll-top-button";

export default function AppLayout({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
        <ScrollTopButton />
      </main>
      <Footer />
    </>
  );
}
