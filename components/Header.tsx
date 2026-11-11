import Link from "next/link";
import { site } from "@/content/site";
import { ui, type Locale } from "@/content/i18n";
import LangSwitch from "./LangSwitch";

export default function Header({ lang }: { lang: Locale }) {
  const t = ui[lang];
  return (
    <header className="header">
      <Link href={`/${lang}`} className="brand">
        {site.name}
      </Link>
      <nav aria-label="Main">
        <Link href={`/${lang}/cases`}>{t.nav.cases}</Link>
        <Link href={`/${lang}/about`}>{t.nav.about}</Link>
        <a href={`mailto:${site.contactEmail}`}>{t.nav.contact}</a>
      </nav>
      <LangSwitch current={lang} />
    </header>
  );
}
