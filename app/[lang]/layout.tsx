// Moldura de todas as páginas: cabeçalho, conteúdo e rodapé.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { site } from "@/content/site";
import { hasLocale, locales, ui } from "@/content/i18n";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: { default: `${site.name} · ${ui[lang].role}`, template: `%s · ${site.name}` },
    description: ui[lang].home.intro,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <footer className="footer">
          <p>{t.footer}</p>
          <p>
            <a href={site.linkedin}>LinkedIn</a>
            {" · "}
            <a href={`mailto:${site.contactEmail}`}>{t.nav.contact}</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
