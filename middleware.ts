import {
  detectLang,
  hrefFor,
  isCrawler,
  langFromCookie,
  parseAcceptLanguage,
} from "./src/locale";

export const config = {
  matcher: "/",
};

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);
  if (url.pathname !== "/") return;
  if (isCrawler(request.headers.get("user-agent") ?? "")) return;

  const lang =
    langFromCookie(request.headers.get("cookie") ?? "") ??
    detectLang(parseAcceptLanguage(request.headers.get("accept-language") ?? ""));

  if (lang === "ca") return;

  const dest = new URL(hrefFor(lang), url);
  dest.search = url.search;
  return Response.redirect(dest, 302);
}
