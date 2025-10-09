import CareerAdvicesItem from "@/shared/ui/career-advices-item";
import Layout from "@/widgets/blogs/layout/layout";
import styles from "./career-advices.module.css";
import {
  getStaticPropsWithMessages,
  withMessages,
} from "@/shared/libs/withMessages";
import { useTranslations } from "next-intl";

const careerAdvices = [
  {
    title: "Роудмапы к сертификатам",
    text: "Пошаговые планы подготовки к востребованным экзаменам по кибербезопасности. Следуйте дорожной карте и сдайте сертификацию без лишнего стресса.",
    iconUrl: "/icons/career-advices/01.svg",
  },
  {
    title: "Инструкции по CV",
    text: "Готовые шаблоны и рекомендации для составления профессионального резюме. Узнайте, как подстроить CV под конкретную компанию и привлечь внимание рекрутера",
    iconUrl: "/icons/career-advices/02.svg",
  },
  {
    title: "Роудмапы к профессиям",
    text: "Планы развития для ключевых направлений: SOC-аналитик, пентестер, DevSecOps и другие. Понимайте, какие навыки прокачивать на каждом этапе карьеры",
    iconUrl: "/icons/career-advices/03.svg",
  },
  {
    title: "Лайфхаки от экспертов",
    text: "Практические советы от специалистов, которые уже прошли этот путь. Ошибки, которых можно избежать, и стратегии, которые реально работают",
    iconUrl: "/icons/career-advices/04.svg",
  },
];

function Page() {
  const t = useTranslations("Blog");

  return (
    <Layout
      t={t}
      title="Карьерные соВЕТЫ из мира HEXATECH и кибербезопасности"
      subtitle="Пошаговые рекомендации для тех, кто строит карьеру в сфере кибербезопасности"
    >
      <div className={styles.wrapper}>
        {careerAdvices.map((advice, index) => (
          <CareerAdvicesItem
            key={index}
            title={advice.title}
            text={advice.text}
            iconUrl={advice.iconUrl}
          />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = getStaticPropsWithMessages;

export default withMessages(Page);
