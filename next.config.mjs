/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["ru", "en", "uz"],
    defaultLocale: "ru",
  },
};

export default nextConfig;
