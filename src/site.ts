import { localeMeta, type Lang } from "./locale";
import { messages } from "./i18n";

export const SITE_ORIGIN = "https://www.cetres.cat";

export const business = {
  legalName: "CETRES Enginyers, SLP",
  name: "CETRES Enginyers",
  streetAddress: "Carrer Berruguete, 98",
  postalCode: "08035",
  addressLocality: "Barcelona",
  addressRegion: "Catalunya",
  addressCountry: "ES",
  telephone: "+34934286118",
  telephoneDisplay: "93 428 61 18",
  email: "central@cetresbcn.com",
  foundingDate: "1988-06",
  latitude: 41.433023,
  longitude: 2.149626,
  logoPath: "/brand/logo.png",
  imagePath: "/images/photos/8.jpg",
  ogImagePath: "/og.jpg",
} as const;

export function pageUrl(lang: Lang): string {
  const path = localeMeta[lang].path;
  return path ? `${SITE_ORIGIN}${path}/` : `${SITE_ORIGIN}/`;
}

export function assetUrl(path: string): string {
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function hreflangUrls(): { lang: Lang | "x-default"; href: string }[] {
  return [
    { lang: "ca", href: pageUrl("ca") },
    { lang: "es", href: pageUrl("es") },
    { lang: "en", href: pageUrl("en") },
    { lang: "x-default", href: pageUrl("en") },
  ];
}

export function jsonLd(lang: Lang, title: string, description: string) {
  const url = pageUrl(lang);
  const t = messages[lang];
  const businessId = `${SITE_ORIGIN}/#business`;
  const websiteId = `${SITE_ORIGIN}/#website`;
  const pageId = `${url}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: business.legalName,
        alternateName: business.name,
        url: SITE_ORIGIN + "/",
        logo: assetUrl(business.logoPath),
        image: assetUrl(business.imagePath),
        telephone: business.telephone,
        email: business.email,
        foundingDate: business.foundingDate,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.streetAddress,
          addressLocality: business.addressLocality,
          addressRegion: business.addressRegion,
          postalCode: business.postalCode,
          addressCountry: business.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.latitude,
          longitude: business.longitude,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Catalunya" },
          { "@type": "Country", name: "Spain" },
        ],
        knowsAbout: [...t.services.fields],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.nav.serveis,
          itemListElement: t.services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.text,
            },
          })),
        },
        employee: t.team.partners.map((partner) => ({
          "@type": "Person",
          name: partner.name,
          jobTitle: partner.role,
          worksFor: { "@id": businessId },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_ORIGIN + "/",
        name: business.name,
        inLanguage: ["ca", "es", "en"],
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        primaryImageOfPage: assetUrl(business.imagePath),
      },
    ],
  };
}
