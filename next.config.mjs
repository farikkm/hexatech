/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["ru-RU", "en-US", "uz-Cyrl"],
    defaultLocale: "ru-RU",
  },
};

export default nextConfig;
