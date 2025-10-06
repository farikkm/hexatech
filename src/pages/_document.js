import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link sizes="12x12" rel="icon" href="/icons/favicon.svg" />
        <meta
          name="description"
          content="Онлайн-курсы по кибербезопасности для начинающих и профессионалов. Научитесь защищать данные, предотвращать атаки и строить карьеру в сфере ИБ."
        />
        <meta
          name="keywords"
          content="курсы кибербезопасности, обучение информационной безопасности, cybersecurity, защита данных, этичный хакинг, безопасность в интернете, pentesting"
        />
        <meta name="author" content="Hexatech" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1e1e1e" />
      </Head>
      <body>
        <div className="wrapper">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
