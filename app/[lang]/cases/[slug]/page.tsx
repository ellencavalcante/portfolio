// Página de um case resumido (versão pública).
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/content/cases";
import { site } from "@/content/site";
import { hasLocale, ui } from "@/content/i18n";

type Props = PageProps<"/[lang]/cases/[slug]">;

// Diz ao Next quais cases existem, para gerar as páginas com antecedência.
export function generateStaticParams() {
  return cases.filter((c) => c.published).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const item = getCase(slug);
  if (!item || !hasLocale(lang)) return {};
  return { title: item.text[lang].title, description: item.text[lang].summary };
}

export default async function CasePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const item = getCase(slug);
  if (!item) notFound();

  const t = ui[lang].cases;
  const c = item.text[lang];
  const mail = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
    `${t.mailSubject}: ${c.title}`,
  )}`;

  return (
    <article className="case">
      <Link href={`/${lang}/cases`} className="back">
        ← {t.back}
      </Link>
      <p className="eyebrow">{c.sector}</p>
      <h1>{c.title}</h1>
      <p className="lead">{c.summary}</p>

      <dl className="meta">
        <div>
          <dt>{t.role}</dt>
          <dd>{c.role}</dd>
        </div>
        <div>
          <dt>{t.period}</dt>
          <dd>{c.period}</dd>
        </div>
        <div>
          <dt>{t.sector}</dt>
          <dd>{c.sector}</dd>
        </div>
      </dl>

      <h2>{t.context}</h2>
      <p>{c.context}</p>

      <h2>{t.challenge}</h2>
      <p>{c.challenge}</p>

      <h2>{t.approach}</h2>
      <ul>
        {c.approach.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>

      <h2>{t.outcome}</h2>
      <p>{c.outcome}</p>

      <aside className="cta">
        <h2>{t.fullTitle}</h2>
        <p>{t.fullText}</p>
        <a className="button" href={mail}>
          {t.fullButton}
        </a>
      </aside>
    </article>
  );
}
