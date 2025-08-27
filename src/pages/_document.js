import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link sizes="12x12" rel="icon" href="/icons/favicon.svg" />
      </Head>
      <body>
        <div className="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
