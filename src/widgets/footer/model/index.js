const tabs = [
  {
    key: "home",
    title: "Главная",
    links: [
      { key: "advantages", name: "Преимущества", href: "/" },
      { key: "popular-courses", name: "Популярные курсы", href: "/" },
      { key: "video-reviews", name: "Видео отзывы", href: "/" },
    ],
  },
  {
    key: "courses",
    title: "Курсы",
    links: [
      {
        key: "cybersecurity",
        name: "Этичный хакинг",
        href: "/courses/cybersecurity",
      },
      {
        key: "cooperative-courses",
        name: "Корпоративные курсы",
        href: "/courses/cooperative-courses",
      },
      { key: "pysploit", name: "PYsploit", href: "/courses/pysploit" },
      {
        key: "soc-analytics",
        name: "SOC-аналитика",
        href: "/courses/soc-analytics",
      },
      { key: "forensics", name: "Forensics", href: "/courses/forensics" },
    ],
  },
  {
    key: "community",
    title: "Сообщество",
    links: [{ key: "graduates", name: "Выпускники", href: "/community" }],
  },
  {
    key: "blog",
    title: "Блог",
    links: [
      { key: "news", name: "Новости", href: "/blogs/news" },
      {
        key: "career-advices",
        name: "Карьерные советы",
        href: "/blogs/career-advices",
      },
      {
        key: "useful-materials",
        name: "Полезные материалы",
        href: "/blogs/useful-materials",
      },
    ],
  },
  {
    key: "contacts",
    title: "Контакты",
    links: [
      { key: "map", name: "Карта", href: "/contacts" },
      { key: "address", name: "Адрес", href: "/contacts" },
      { key: "phone", name: "Телефон", href: "/contacts" },
    ],
  },
];

export { tabs };
