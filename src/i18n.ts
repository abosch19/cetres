export type Lang = "ca" | "es" | "en";

export const localeMeta: Record<
  Lang,
  { path: string; hreflang: string; og: string }
> = {
  ca: { path: "", hreflang: "ca", og: "ca_ES" },
  es: { path: "/es", hreflang: "es", og: "es_ES" },
  en: { path: "/en", hreflang: "en", og: "en_GB" },
};

export function prefixFor(lang: Lang): string {
  return localeMeta[lang].path;
}

export const messages = {
  ca: {
    meta: {
      title: "CETRES Enginyers — Consultoria d’enginyeria civil a Barcelona",
      description:
        "Consultora d’enginyeria civil fundada el 1988. Estudis, projectes, assistència tècnica i direcció d’obra per a administracions, concessionàries i empresa privada.",
    },
    nav: {
      empresa: "Empresa",
      serveis: "Serveis",
      projectes: "Projectes",
      equip: "Equip",
      contacte: "Contacte",
    },
    ui: {
      skip: "Salta al contingut",
      lang: "Idioma",
      menu: "Obre el menú",
      stats: "Dades",
    },
    hero: {
      eyebrow: "Consultoria d’enginyeria civil · Barcelona · 1988",
      title: "Estudis, projectes i direcció d’obra.",
      lead: "Des de 1988 treballem amb les principals administracions i concessionàries de Catalunya i Espanya, i amb empresa privada. Especialistes en carreteres, autopistes i càlcul d’estructures.",
      ctaProjects: "Veure projectes",
      ctaContact: "Contactar",
      caption: "Obra lineal i estructures. Catalunya.",
      photoAlt: "Boques de túnel i vial de connexió en una obra lineal a Catalunya",
    },
    stats: {
      year: "Fundació",
      years: "Anys d’activitat",
      fields: "Àmbits d’obra",
      iso: "Normes de gestió",
    },
    about: {
      kicker: "01 — Empresa",
      title: "Una oficina tècnica consolidada, amb criteri propi.",
      p1: "CETRES Enginyers, SLP es va constituir el juny de 1988 a Barcelona. Des d’aleshores ens dediquem a l’enginyeria civil: redacció d’estudis i projectes, assistències tècniques i direccions d’obra, en obra civil i urbanització.",
      p2: "Hem intervingut en infraestructures de primer ordre —autopistes, carreteres, ponts, ferrocarril i obres subterrànies— i mantenim relacions estables amb administracions, concessionàries i contractistes.",
      p3: "El valor que aportem és tècnic i concret: una solució adequada, un termini creïble i un control de cost i qualitat que es pot seguir.",
      photoAlt: "Intradós d’un pont de formigó sobre un llit fluvial",
    },
    services: {
      kicker: "02 — Serveis",
      title: "El que fem, i com ho fem.",
      intro:
        "Oferim coneixement d’obra i eines pròpies de càlcul i gestió. En cada encàrrec busquem la solució tècnica correcta i assegurem cost, termini i qualitat.",
      items: [
        {
          n: "01",
          title: "Estudis i projectes",
          text: "Redacció de projectes constructius, informatius i complementaris. Traçat, estructures, urbanització i senyalització, amb desenvolupament informàtic propi.",
        },
        {
          n: "02",
          title: "Assistència tècnica",
          text: "Suport a l’administració, a la concessionària i a la contrata: càlcul d’estructures, modificacions i encaixos de traçat durant l’execució.",
        },
        {
          n: "03",
          title: "Direcció d’obra",
          text: "Direcció facultativa i seguiment d’obra civil. Control de l’execució, de la seguretat i dels terminis, amb documentació clara.",
        },
        {
          n: "04",
          title: "Càlcul d’estructures",
          text: "Disseny i càlcul d’estructures d’obra lineal: formigó armat i pretensat, i estructures mixtes. És l’especialitat de l’oficina des dels inicis.",
        },
      ],
      fieldsTitle: "Àmbits",
      fields: [
        "Autopistes",
        "Carreteres",
        "Estructures",
        "Ferrocarril",
        "Obres subterrànies",
        "Urbanització",
        "Senyalització",
      ],
    },
    projects: {
      kicker: "03 — Projectes",
      title: "Una selecció d’encàrrecs.",
      intro:
        "Autopistes, carreteres i estructures per a ACESA, Abertis, Invicat, Infraestructures.cat i altres administracions. Aquests són alguns treballs representatius.",
      items: [
        {
          tag: "Autopista · Projecte constructiu",
          title: "Millora de connectivitat. Enllaç de Mataró Oest, C-32",
          meta: "Invicat / Abertis · Argentona–Mataró · 2015",
          note: "PK 99+000 a 101+000. Tretze mesos. PEC 12 M€.",
          image: "/images/plans/PR-2015-22.jpg",
          alt: "Plànol de l’enllaç de Mataró Oest a l’autopista C-32",
        },
        {
          tag: "Autopista · As-built",
          title: "Tercer carril per calçada. AP-7, Vilademuls–Figueres Sud",
          meta: "ACESA – Abertis · 2009–2015",
          note: "La Jonquera–Salou. PK 47+000 a 29+660.",
          image: "/images/plans/PR-2015-09.jpg",
          alt: "Plànol as-built del tercer carril de l’AP-7",
        },
        {
          tag: "Estructura · Projecte constructiu",
          title: "Nou pont. Sortida 100 de la C-32, Mataró",
          meta: "Invicat / Abertis · 2016",
          note: "Ramal Girona–Mataró. Sis mesos.",
          image: "/images/plans/PR-2016-08.jpg",
          alt: "Plànol del nou pont a la sortida 100 de la C-32",
        },
        {
          tag: "Autopista · Projecte complementari",
          title: "Ampliació de l’estació de peatge. AP-7, Girona Sud",
          meta: "Abertis · Salt / Vilablareix · 2015",
          note: "Onze mesos. PEC 3,2 M€.",
          image: "/images/plans/PR-2015-02.jpg",
          alt: "Plànol de l’ampliació del peatge de Girona Sud",
        },
        {
          tag: "Carretera · Projecte constructiu",
          title: "Rotonda a la GI-682. Bellcaire d’Empordà",
          meta: "Infraestructures.cat · 2016",
          note: "Millora local de nus. PK 2+500.",
          image: "/images/plans/PR-2016-14.jpg",
          alt: "Plànol de la rotonda a Bellcaire d’Empordà",
        },
        {
          tag: "Urbanització · Projecte",
          title: "Millora urbana. Sector II Filvisa, Viladecavalls",
          meta: "GESDIP, SAU · 2016",
          note: "Quatre mesos.",
          image: "/images/plans/PR-2017-03.jpg",
          alt: "Plànol d’urbanització del sector Filvisa a Viladecavalls",
        },
      ],
      more: [
        {
          title: "Pont sobre la Muga",
          meta: "GI-504, Boadella d’Empordà · Direcció d’obra · 2004",
        },
        {
          title: "Pont sobre el Llobregat",
          meta: "C-1414, Esparreguera–Olesa · Direcció d’obra · 2001",
        },
        {
          title: "Tercer carril per mitjana. AP-7",
          meta: "Enllaç del Mediterrani–Vila-seca/Salou · Projecte · ACESA · 2007",
        },
        {
          title: "Desdoblament de la C-31",
          meta: "Castell–Platja d’Aro–Palamós · Direcció d’obra · 2010",
        },
        {
          title: "Apantallament acústic. C-32",
          meta: "Mataró · Projecte constructiu · Invicat / Abertis · 2016",
        },
        {
          title: "Estructures de l’estació de Bellaterra",
          meta: "Ferrocarrils de la Generalitat · Projecte · 1992",
        },
      ],
    },
    team: {
      kicker: "04 — Equip",
      title: "Criteri tècnic, tracte directe.",
      p1: "L’oficina la formen professionals amb experiència reconeguda en cada disciplina. El compromís i el rigor en el tracte —intern i amb el client— són part del mètode, no un afegit.",
      p2: "Els socis i representants són Xavier Bosch i Solé i Carles Giner i Garriga, enginyers de Camins, Canals i Ports, especialitat d’estructures, amb més de trenta anys de pràctica.",
      partnersLabel: "Socis-directors",
      partners: [
        {
          name: "Xavier Bosch i Solé",
          role: "Enginyer de Camins, Canals i Ports · Estructures",
        },
        {
          name: "Carles Giner i Garriga",
          role: "Enginyer de Camins, Canals i Ports · Estructures",
        },
      ],
      photoAlt: "Muntatge d’un tauler mixt d’acer i formigó",
    },
    contact: {
      kicker: "05 — Contacte",
      title: "Escriviu-nos o visiteu l’oficina.",
      lead: "Carrer Berruguete, 98 · 08035 Barcelona",
      phoneLabel: "Telèfon",
      emailLabel: "Correu",
      map: "Obrir al mapa",
      clients: "Administracions i concessionàries amb qui hem treballat",
    },
    footer: {
      legal: "CETRES Enginyers, SLP",
      rights: "Tots els drets reservats.",
    },
  },
  es: {
    meta: {
      title: "CETRES Enginyers — Consultoría de ingeniería civil en Barcelona",
      description:
        "Consultora de ingeniería civil fundada en 1988. Estudios, proyectos, asistencia técnica y dirección de obra para administraciones, concesionarias y empresa privada.",
    },
    nav: {
      empresa: "Empresa",
      serveis: "Servicios",
      projectes: "Proyectos",
      equip: "Equipo",
      contacte: "Contacto",
    },
    ui: {
      skip: "Saltar al contenido",
      lang: "Idioma",
      menu: "Abrir menú",
      stats: "Datos",
    },
    hero: {
      eyebrow: "Consultoría de ingeniería civil · Barcelona · 1988",
      title: "Estudios, proyectos y dirección de obra.",
      lead: "Desde 1988 trabajamos con las principales administraciones y concesionarias de Cataluña y España, y con empresa privada. Especialistas en carreteras, autopistas y cálculo de estructuras.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      caption: "Obra lineal y estructuras. Cataluña.",
      photoAlt: "Bocas de túnel y vial de conexión en una obra lineal en Cataluña",
    },
    stats: {
      year: "Fundación",
      years: "Años de actividad",
      fields: "Ámbitos de obra",
      iso: "Normas de gestión",
    },
    about: {
      kicker: "01 — Empresa",
      title: "Una oficina técnica consolidada, con criterio propio.",
      p1: "CETRES Enginyers, SLP se constituyó en junio de 1988 en Barcelona. Desde entonces nos dedicamos a la ingeniería civil: redacción de estudios y proyectos, asistencias técnicas y direcciones de obra, en obra civil y urbanización.",
      p2: "Hemos intervenido en infraestructuras de primer orden —autopistas, carreteras, puentes, ferrocarril y obras subterráneas— y mantenemos relaciones estables con administraciones, concesionarias y contratistas.",
      p3: "El valor que aportamos es técnico y concreto: una solución adecuada, un plazo creíble y un control de coste y calidad que se puede seguir.",
      photoAlt: "Intradós de un puente de hormigón sobre un cauce",
    },
    services: {
      kicker: "02 — Servicios",
      title: "Lo que hacemos, y cómo lo hacemos.",
      intro:
        "Ofrecemos conocimiento de obra y herramientas propias de cálculo y gestión. En cada encargo buscamos la solución técnica correcta y aseguramos coste, plazo y calidad.",
      items: [
        {
          n: "01",
          title: "Estudios y proyectos",
          text: "Redacción de proyectos constructivos, informativos y complementarios. Trazado, estructuras, urbanización y señalización, con desarrollo informático propio.",
        },
        {
          n: "02",
          title: "Asistencia técnica",
          text: "Apoyo a la administración, a la concesionaria y a la contrata: cálculo de estructuras, modificaciones y encajes de trazado durante la ejecución.",
        },
        {
          n: "03",
          title: "Dirección de obra",
          text: "Dirección facultativa y seguimiento de obra civil. Control de la ejecución, de la seguridad y de los plazos, con documentación clara.",
        },
        {
          n: "04",
          title: "Cálculo de estructuras",
          text: "Diseño y cálculo de estructuras de obra lineal: hormigón armado y pretensado, y estructuras mixtas. Es la especialidad de la oficina desde el inicio.",
        },
      ],
      fieldsTitle: "Ámbitos",
      fields: [
        "Autopistas",
        "Carreteras",
        "Estructuras",
        "Ferrocarril",
        "Obras subterráneas",
        "Urbanización",
        "Señalización",
      ],
    },
    projects: {
      kicker: "03 — Proyectos",
      title: "Una selección de encargos.",
      intro:
        "Autopistas, carreteras y estructuras para ACESA, Abertis, Invicat, Infraestructures.cat y otras administraciones. Estos son algunos trabajos representativos.",
      items: [
        {
          tag: "Autopista · Proyecto constructivo",
          title: "Mejora de conectividad. Enlace de Mataró Oeste, C-32",
          meta: "Invicat / Abertis · Argentona–Mataró · 2015",
          note: "PK 99+000 a 101+000. Trece meses. PEC 12 M€.",
          image: "/images/plans/PR-2015-22.jpg",
          alt: "Plano del enlace de Mataró Oeste en la autopista C-32",
        },
        {
          tag: "Autopista · As-built",
          title: "Tercer carril por calzada. AP-7, Vilademuls–Figueres Sur",
          meta: "ACESA – Abertis · 2009–2015",
          note: "La Jonquera–Salou. PK 47+000 a 29+660.",
          image: "/images/plans/PR-2015-09.jpg",
          alt: "Plano as-built del tercer carril de la AP-7",
        },
        {
          tag: "Estructura · Proyecto constructivo",
          title: "Nuevo puente. Salida 100 de la C-32, Mataró",
          meta: "Invicat / Abertis · 2016",
          note: "Ramal Girona–Mataró. Seis meses.",
          image: "/images/plans/PR-2016-08.jpg",
          alt: "Plano del nuevo puente en la salida 100 de la C-32",
        },
        {
          tag: "Autopista · Proyecto complementario",
          title: "Ampliación de la estación de peaje. AP-7, Girona Sur",
          meta: "Abertis · Salt / Vilablareix · 2015",
          note: "Once meses. PEC 3,2 M€.",
          image: "/images/plans/PR-2015-02.jpg",
          alt: "Plano de la ampliación del peaje de Girona Sur",
        },
        {
          tag: "Carretera · Proyecto constructivo",
          title: "Rotonda en la GI-682. Bellcaire d’Empordà",
          meta: "Infraestructures.cat · 2016",
          note: "Mejora local de nudo. PK 2+500.",
          image: "/images/plans/PR-2016-14.jpg",
          alt: "Plano de la rotonda en Bellcaire d’Empordà",
        },
        {
          tag: "Urbanización · Proyecto",
          title: "Mejora urbana. Sector II Filvisa, Viladecavalls",
          meta: "GESDIP, SAU · 2016",
          note: "Cuatro meses.",
          image: "/images/plans/PR-2017-03.jpg",
          alt: "Plano de urbanización del sector Filvisa en Viladecavalls",
        },
      ],
      more: [
        {
          title: "Puente sobre la Muga",
          meta: "GI-504, Boadella d’Empordà · Dirección de obra · 2004",
        },
        {
          title: "Puente sobre el Llobregat",
          meta: "C-1414, Esparreguera–Olesa · Dirección de obra · 2001",
        },
        {
          title: "Tercer carril por mediana. AP-7",
          meta: "Enlace del Mediterráneo–Vila-seca/Salou · Proyecto · ACESA · 2007",
        },
        {
          title: "Desdoblamiento de la C-31",
          meta: "Castell–Platja d’Aro–Palamós · Dirección de obra · 2010",
        },
        {
          title: "Pantalla acústica. C-32",
          meta: "Mataró · Proyecto constructivo · Invicat / Abertis · 2016",
        },
        {
          title: "Estructuras de la estación de Bellaterra",
          meta: "Ferrocarrils de la Generalitat · Proyecto · 1992",
        },
      ],
    },
    team: {
      kicker: "04 — Equipo",
      title: "Criterio técnico, trato directo.",
      p1: "La oficina la forman profesionales con experiencia reconocida en cada disciplina. El compromiso y el rigor en el trato —interno y con el cliente— son parte del método, no un añadido.",
      p2: "Los socios y representantes son Xavier Bosch i Solé y Carles Giner i Garriga, ingenieros de Caminos, Canales y Puertos, especialidad de estructuras, con más de treinta años de práctica.",
      partnersLabel: "Socios-directores",
      partners: [
        {
          name: "Xavier Bosch i Solé",
          role: "Ingeniero de Caminos, Canales y Puertos · Estructuras",
        },
        {
          name: "Carles Giner i Garriga",
          role: "Ingeniero de Caminos, Canales y Puertos · Estructuras",
        },
      ],
      photoAlt: "Montaje de un tablero mixto de acero y hormigón",
    },
    contact: {
      kicker: "05 — Contacto",
      title: "Escríbanos o visiten la oficina.",
      lead: "Carrer Berruguete, 98 · 08035 Barcelona",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      map: "Abrir en el mapa",
      clients: "Administraciones y concesionarias con las que hemos trabajado",
    },
    footer: {
      legal: "CETRES Enginyers, SLP",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    meta: {
      title: "CETRES Enginyers — Civil engineering consultancy in Barcelona",
      description:
        "Civil engineering consultancy founded in 1988. Studies, designs, technical assistance and site supervision for public authorities, concessionaires and private clients.",
    },
    nav: {
      empresa: "Company",
      serveis: "Services",
      projectes: "Projects",
      equip: "Team",
      contacte: "Contact",
    },
    ui: {
      skip: "Skip to content",
      lang: "Language",
      menu: "Open menu",
      stats: "Figures",
    },
    hero: {
      eyebrow: "Civil engineering consultancy · Barcelona · 1988",
      title: "Studies, designs and site supervision.",
      lead: "Since 1988 we have worked with the main public authorities and concessionaires in Catalonia and Spain, and with private clients. We specialise in roads, motorways and structural design.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
      caption: "Linear works and structures. Catalonia.",
      photoAlt: "Tunnel portals and a connecting road on a linear works site in Catalonia",
    },
    stats: {
      year: "Founded",
      years: "Years in practice",
      fields: "Fields of work",
      iso: "Management standards",
    },
    about: {
      kicker: "01 — Company",
      title: "A settled technical office, with its own judgement.",
      p1: "CETRES Enginyers, SLP was founded in June 1988 in Barcelona. Since then we have worked in civil engineering: studies and designs, technical assistance and site supervision, on civil works and urban development.",
      p2: "We have taken part in major infrastructure — motorways, roads, bridges, rail and underground works — and we keep lasting working relationships with public authorities, concessionaires and contractors.",
      p3: "What we bring is technical and specific: a sound solution, a credible programme, and cost and quality control that can be followed.",
      photoAlt: "Soffit of a concrete bridge over a watercourse",
    },
    services: {
      kicker: "02 — Services",
      title: "What we do, and how we do it.",
      intro:
        "We bring site knowledge and our own calculation and management tools. On every commission we look for the right technical solution and hold cost, programme and quality.",
      items: [
        {
          n: "01",
          title: "Studies and designs",
          text: "Construction, preliminary and complementary designs. Alignment, structures, urban development and signing, with software developed in-house.",
        },
        {
          n: "02",
          title: "Technical assistance",
          text: "Support to the client, the concessionaire and the contractor: structural analysis, design changes and alignment adjustments during construction.",
        },
        {
          n: "03",
          title: "Site supervision",
          text: "Site direction and follow-up of civil works. Control of the works, safety and programme, with clear records.",
        },
        {
          n: "04",
          title: "Structural design",
          text: "Design and analysis of structures on linear works: reinforced and prestressed concrete, and composite structures. It has been the office’s specialism from the start.",
        },
      ],
      fieldsTitle: "Fields",
      fields: [
        "Motorways",
        "Roads",
        "Structures",
        "Rail",
        "Underground works",
        "Urban development",
        "Signing",
      ],
    },
    projects: {
      kicker: "03 — Projects",
      title: "A selection of commissions.",
      intro:
        "Motorways, roads and structures for ACESA, Abertis, Invicat, Infraestructures.cat and other authorities. These are some representative works.",
      items: [
        {
          tag: "Motorway · Construction design",
          title: "Improved connectivity. Mataró West interchange, C-32",
          meta: "Invicat / Abertis · Argentona–Mataró · 2015",
          note: "KP 99+000 to 101+000. Thirteen months. Estimated cost 12 M€.",
          image: "/images/plans/PR-2015-22.jpg",
          alt: "Plan of the Mataró West interchange on the C-32 motorway",
        },
        {
          tag: "Motorway · As-built",
          title: "Third lane. AP-7, Vilademuls–Figueres South",
          meta: "ACESA – Abertis · 2009–2015",
          note: "La Jonquera–Salou. KP 47+000 to 29+660.",
          image: "/images/plans/PR-2015-09.jpg",
          alt: "As-built plan of the third lane on the AP-7",
        },
        {
          tag: "Structure · Construction design",
          title: "New bridge. Junction 100 on the C-32, Mataró",
          meta: "Invicat / Abertis · 2016",
          note: "Girona–Mataró slip road. Six months.",
          image: "/images/plans/PR-2016-08.jpg",
          alt: "Plan of the new bridge at junction 100 on the C-32",
        },
        {
          tag: "Motorway · Complementary design",
          title: "Toll plaza enlargement. AP-7, Girona South",
          meta: "Abertis · Salt / Vilablareix · 2015",
          note: "Eleven months. Estimated cost 3.2 M€.",
          image: "/images/plans/PR-2015-02.jpg",
          alt: "Plan of the Girona South toll plaza enlargement",
        },
        {
          tag: "Road · Construction design",
          title: "Roundabout on the GI-682. Bellcaire d’Empordà",
          meta: "Infraestructures.cat · 2016",
          note: "Local junction improvement. KP 2+500.",
          image: "/images/plans/PR-2016-14.jpg",
          alt: "Plan of the roundabout in Bellcaire d’Empordà",
        },
        {
          tag: "Urban development · Design",
          title: "Urban improvement. Filvisa Sector II, Viladecavalls",
          meta: "GESDIP, SAU · 2016",
          note: "Four months.",
          image: "/images/plans/PR-2017-03.jpg",
          alt: "Urban development plan for the Filvisa sector in Viladecavalls",
        },
      ],
      more: [
        {
          title: "Bridge over the Muga",
          meta: "GI-504, Boadella d’Empordà · Site supervision · 2004",
        },
        {
          title: "Bridge over the Llobregat",
          meta: "C-1414, Esparreguera–Olesa · Site supervision · 2001",
        },
        {
          title: "Third lane in the median. AP-7",
          meta: "Mediterranean interchange–Vila-seca/Salou · Design · ACESA · 2007",
        },
        {
          title: "Dualling of the C-31",
          meta: "Castell–Platja d’Aro–Palamós · Site supervision · 2010",
        },
        {
          title: "Noise barrier. C-32",
          meta: "Mataró · Construction design · Invicat / Abertis · 2016",
        },
        {
          title: "Bellaterra station structures",
          meta: "Ferrocarrils de la Generalitat · Design · 1992",
        },
      ],
    },
    team: {
      kicker: "04 — Team",
      title: "Technical judgement, direct dealing.",
      p1: "The office is made up of professionals with recognised experience in each field. Commitment and care in how we work — inside the office and with the client — are part of the method, not an extra.",
      p2: "The partners are Xavier Bosch i Solé and Carles Giner i Garriga, civil engineers (Ingenieros de Caminos, Canales y Puertos), structures specialism, with more than thirty years of practice.",
      partnersLabel: "Managing partners",
      partners: [
        {
          name: "Xavier Bosch i Solé",
          role: "Civil engineer (Caminos, Canales y Puertos) · Structures",
        },
        {
          name: "Carles Giner i Garriga",
          role: "Civil engineer (Caminos, Canales y Puertos) · Structures",
        },
      ],
      photoAlt: "Erection of a steel-and-concrete composite deck",
    },
    contact: {
      kicker: "05 — Contact",
      title: "Write to us or visit the office.",
      lead: "Carrer Berruguete, 98 · 08035 Barcelona",
      phoneLabel: "Telephone",
      emailLabel: "Email",
      map: "Open in maps",
      clients: "Public authorities and concessionaires we have worked with",
    },
    footer: {
      legal: "CETRES Enginyers, SLP",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Messages = (typeof messages)[Lang];
