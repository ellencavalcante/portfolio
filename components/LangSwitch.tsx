"use client";
// Botão que troca o idioma mantendo a pessoa na mesma página.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content/i18n";

export default function LangSwitch({ current }: { current: Locale }) {
  const pathname = usePathname();
  return (
    <div className="lang" aria-label="Language">
      {locales.map((l) => {
        const href = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, `/${l}`);
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            aria-current={l === current ? "true" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
