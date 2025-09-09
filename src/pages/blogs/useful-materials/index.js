import Layout from "@/widgets/blogs/layout/layout";
import styles from "./useful-materials.module.css";
import UsefulMaterialsItem from "@/shared/ui/useful-materials-item";

const usefulMaterials = [
  {
    iconUrl: "/icons/useful-materials/01.png",
    title: "Kali Linux",
    text: "Дистрибутив с десятками встроенных инструментов для пентеста",
    howToUse:
      "установить на виртуальную машину (VirtualBox, VMware) и тренироваться в этичном хакинге",
  },
  {
    iconUrl: "/icons/useful-materials/02.png",
    title: "Metasploit Framework",
    text: "Фреймворк для тестирования на проникновение и автоматизации атак",
    howToUse:
      "запускать эксплойты против тестовых систем, отрабатывать навыки пентеста",
  },
  {
    iconUrl: "/icons/useful-materials/03.png",
    title: "Wireshark",
    text: "Анализатор сетевого трафика для мониторинга и поиска уязвимостей",
    howToUse:
      "перехватывать пакеты в сети, изучать протоколы и выявлять подозрительную активность",
  },
  {
    iconUrl: "/icons/useful-materials/04.png",
    title: "Burp Suite (Community Edition)",
    text: "Инструмент для анализа и тестирования безопасности веб-приложений.",
    howToUse:
      "запускать прокси, перехватывать запросы и искать уязвимости в сайтах",
  },
];

export default function Page() {
  return (
    <Layout
      title="ПОЛЕЗНЫЕ МАТЕРИАЛЫ из мира HEXATECH и кибербезопасности"
      subtitle="Анонсы курсов, мероприятий, акций"
    >
      <div className={styles.cards}>
        {usefulMaterials.map((item, index) => (
          <UsefulMaterialsItem
            key={index}
            iconUrl={item.iconUrl}
            title={item.title}
            text={item.text}
            howToUse={item.howToUse}
          />
        ))}
      </div>
    </Layout>
  );
}
