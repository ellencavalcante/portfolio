// Roda antes de cada página. Se o endereço não tiver idioma (/en ou /pt),
// redireciona para o idioma do navegador da pessoa (inglês como padrão).
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./content/i18n";
import { getCase } from "./content/cases";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLang = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLang) {
    // Case que não existe (ou ainda não publicado): responde "não encontrado".
    const match = pathname.match(/^\/([a-z]{2})\/cases\/([^/]+)\/?$/);
    if (match && !getCase(match[2])) {
      request.nextUrl.pathname = `/${match[1]}/404`;
      return NextResponse.rewrite(request.nextUrl);
    }
    return;
  }

  const accepted = request.headers.get("accept-language") ?? "";
  const first = accepted.split(",")[0]?.trim().toLowerCase() ?? "";
  const lang = first.startsWith("pt") ? "pt" : defaultLocale;

  request.nextUrl.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Não mexe em arquivos internos nem em arquivos com extensão (imagens etc.)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
