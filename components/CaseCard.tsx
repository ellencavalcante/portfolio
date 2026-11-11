import Link from "next/link";
import { ui, type Locale } from "@/content/i18n";
import type { Case } from "@/content/cases";

export default function CaseCard({ item, lang }: { item: Case; lang: Locale }) {
  const t = ui[lang].cases;
  const text = item.text[lang];
  const body = (
    <>
      <p className="eyebrow">{text.sector}</p>
      <h3>{text.title}</h3>
      <p>{text.summary}</p>
      <p className="card-action">{item.published ? `${t.read} →` : t.soon}</p>
    </>
  );
  return item.published ? (
    <Link href={`/${lang}/cases/${item.slug}`} className="card">
      {body}
    </Link>
  ) : (
    <div className="card card-soon">{body}</div>
  );
}
