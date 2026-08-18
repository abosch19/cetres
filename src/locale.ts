export type Lang = "ca" | "es" | "en";

export const langs = ["ca", "es", "en"] as const;
export const fallbackLang: Lang = "en";
export const langCookie = "lang";

export const localeMeta: Record<
  Lang,
  { path: string; hreflang: string; og: string }
> = {
  ca: { path: "", hreflang: "ca", og: "ca_ES" },
  es: { path: "/es", hreflang: "es", og: "es_ES" },
  en: { path: "/en", hreflang: "en", og: "en_GB" },
};

export function isLang(value: string | null | undefined): value is Lang {
  return value === "ca" || value === "es" || value === "en";
}

export function prefixFor(lang: Lang): string {
  return localeMeta[lang].path;
}

export function hrefFor(lang: Lang): string {
  return localeMeta[lang].path ? `${localeMeta[lang].path}/` : "/";
}

export function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((param) => param.trim().startsWith("q="));
      const quality = q ? Number(q.trim().slice(2)) : 1;
      return {
        tag: tag?.trim() ?? "",
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.quality - a.quality)
    .map((entry) => entry.tag);
}

export function detectLang(tags: readonly string[]): Lang {
  for (const raw of tags) {
    const code = raw.trim().toLowerCase().split(/[-_]/)[0];
    if (code === "cat") return "ca";
    if (isLang(code)) return code;
  }
  return fallbackLang;
}

export function langFromCookie(cookieHeader: string): Lang | undefined {
  const match = cookieHeader.match(/(?:^|; )lang=(ca|es|en)\b/);
  return match?.[1] as Lang | undefined;
}

export function resolveLang(
  stored: string | null | undefined,
  tags: readonly string[],
): Lang {
  if (isLang(stored)) return stored;
  return detectLang(tags);
}
