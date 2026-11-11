// Página "Sobre".
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, ui } from "@/content/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: ui[lang].about.title } : {};
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang].about;
  return (
    <article className="case">
      <h1>{t.title}</h1>
      {t.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <dl className="meta">
        <div>
          <dt>{t.areasTitle}</dt>
          <dd>{t.areas.join(" · ")}</dd>
        </div>
        <div>
          <dt>{t.languagesTitle}</dt>
          <dd>{t.languages.join(" · ")}</dd>
        </div>
      </dl>
    </article>
  );
}
