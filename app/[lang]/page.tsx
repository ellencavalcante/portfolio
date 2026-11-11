// Página inicial.
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/content/cases";
import { hasLocale, ui } from "@/content/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  return (
    <>
      <section className="hero">
        <p className="eyebrow">{t.role}</p>
        <h1>{t.home.headline}</h1>
        <p className="lead">{t.home.intro}</p>
      </section>

      <ul className="results">
        {t.home.results.map((r) => (
          <li key={r.label}>
            <strong>{r.value}</strong>
            <span>{r.label}</span>
          </li>
        ))}
      </ul>

      <section>
        <div className="section-head">
          <h2>{t.home.casesTitle}</h2>
          <Link href={`/${lang}/cases`}>{t.home.allCases} →</Link>
        </div>
        <div className="grid">
          {cases.slice(0, 2).map((c) => (
            <CaseCard key={c.slug} item={c} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}
