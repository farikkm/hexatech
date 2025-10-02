import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const locales = ["ru", "en", "uz"];

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const newPath =
      "/" + [newLocale, ...pathname.split("/").slice(2)].join("/");
    router.push(newPath);
  };

  return (
    <select value={currentLocale} onChange={handleChange}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
      {/* <img src="/icons/header/arrow-down.svg" alt="arrow-down" /> */}
    </select>
  );
}
