// Lista de cases.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/content/cases";
import { hasLocale, ui } from "@/content/i18n";

export const metadata: Metadata = { title: "Cases" };

export default async function Cases({ params }: PageProps<"/[lang]/cases">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang].cases;
  return (
    <>
      <section className="page-head">
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
      </section>
      <div className="grid">
        {cases.map((c) => (
          <CaseCard key={c.slug} item={c} lang={lang} />
        ))}
      </div>
    </>
  );
}
