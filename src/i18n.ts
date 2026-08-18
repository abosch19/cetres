export type Lang = "ca" | "es";

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
    hero: {
      eyebrow: "Consultoria d’enginyeria civil · Barcelona · 1988",
      title: "Estudis, projectes i direcció d’obra.",
      lead: "Des de 1988 treballem amb les principals administracions i concessionàries de Catalunya i Espanya, i amb empresa privada. Especialistes en carreteres, autopistes i càlcul d’estructures.",
      ctaProjects: "Veure projectes",
      ctaContact: "Contactar",
      caption: "Obra lineal i estructures. Catalunya.",
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
    tools: {
      kicker: "04 — Eines",
      title: "Programari desenvolupat a l’oficina.",
      intro:
        "Amb els anys hem escrit eines pròpies per accelerar el projecte, el seguiment d’obra i l’explotació. No són un catàleg comercial: són el mètode de treball.",
      items: [
        {
          name: "WH",
          text: "Traçat de carreteres i ferrocarrils sobre CAD.",
        },
        {
          name: "ROADGIS",
          text: "Gestió integral de manteniment i explotació de carreteres amb GIS.",
        },
        {
          name: "GISSENY",
          text: "Inventari i explotació de la senyalització vertical d’orientació.",
        },
        {
          name: "VIDEOTRACK",
          text: "Filmació georeferenciada per comparar l’estat d’obres lineals.",
        },
        {
          name: "ABDABB",
          text: "Seguiment de projectes i obres de senyalització per flux de treball.",
        },
      ],
    },
    team: {
      kicker: "05 — Equip",
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
    },
    quality: {
      kicker: "06 — Gestió",
      title: "Qualitat, medi ambient i prevenció.",
      text: "El sistema integrat de gestió compleix UNE-EN-ISO 9001:2015, UNE-EN-ISO 14001:2015 i ISO 45001:2018. La política la signen els socis-directors i es revisa periòdicament.",
      badges: ["ISO 9001", "ISO 14001", "ISO 45001"],
      moves:
        "Estem adherits al programa MOVES III (ICAEN / Next Generation EU), destinat a una mobilitat més neta: vehicles elèctrics i punts de recàrrega.",
    },
    contact: {
      kicker: "07 — Contacte",
      title: "Escriviu-nos o visiteu l’oficina.",
      lead: "Carrer Berruguete, 98 · 08035 Barcelona",
      phoneLabel: "Telèfon",
      emailLabel: "Correu",
      map: "Obrir al mapa",
      formName: "Nom",
      formLast: "Cognoms",
      formEmail: "Correu electrònic",
      formMessage: "Comentari",
      formSubmit: "Enviar missatge",
      formNote: "El formulari obre el vostre client de correu. També ens podeu escriure directament a",
      clients: "Administracions i concessionàries amb qui hem treballat",
    },
    footer: {
      legal: "CETRES Enginyers, SLP",
      cookies: "Aquesta pàgina no emmagatzema galetes.",
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
    hero: {
      eyebrow: "Consultoría de ingeniería civil · Barcelona · 1988",
      title: "Estudios, proyectos y dirección de obra.",
      lead: "Desde 1988 trabajamos con las principales administraciones y concesionarias de Cataluña y España, y con empresa privada. Especialistas en carreteras, autopistas y cálculo de estructuras.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      caption: "Obra lineal y estructuras. Cataluña.",
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
    tools: {
      kicker: "04 — Herramientas",
      title: "Software desarrollado en la oficina.",
      intro:
        "Con los años hemos escrito herramientas propias para acelerar el proyecto, el seguimiento de obra y la explotación. No son un catálogo comercial: son el método de trabajo.",
      items: [
        {
          name: "WH",
          text: "Trazado de carreteras y ferrocarriles sobre CAD.",
        },
        {
          name: "ROADGIS",
          text: "Gestión integral de mantenimiento y explotación de carreteras con GIS.",
        },
        {
          name: "GISSENY",
          text: "Inventario y explotación de la señalización vertical de orientación.",
        },
        {
          name: "VIDEOTRACK",
          text: "Filmación georreferenciada para comparar el estado de obras lineales.",
        },
        {
          name: "ABDABB",
          text: "Seguimiento de proyectos y obras de señalización por flujo de trabajo.",
        },
      ],
    },
    team: {
      kicker: "05 — Equipo",
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
    },
    quality: {
      kicker: "06 — Gestión",
      title: "Calidad, medio ambiente y prevención.",
      text: "El sistema integrado de gestión cumple UNE-EN-ISO 9001:2015, UNE-EN-ISO 14001:2015 e ISO 45001:2018. La política la firman los socios-directores y se revisa periódicamente.",
      badges: ["ISO 9001", "ISO 14001", "ISO 45001"],
      moves:
        "Estamos adheridos al programa MOVES III (ICAEN / Next Generation EU), destinado a una movilidad más limpia: vehículos eléctricos y puntos de recarga.",
    },
    contact: {
      kicker: "07 — Contacto",
      title: "Escríbanos o visiten la oficina.",
      lead: "Carrer Berruguete, 98 · 08035 Barcelona",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      map: "Abrir en el mapa",
      formName: "Nombre",
      formLast: "Apellidos",
      formEmail: "Correo electrónico",
      formMessage: "Comentario",
      formSubmit: "Enviar mensaje",
      formNote: "El formulario abre su cliente de correo. También pueden escribirnos directamente a",
      clients: "Administraciones y concesionarias con las que hemos trabajado",
    },
    footer: {
      legal: "CETRES Enginyers, SLP",
      cookies: "Esta página no almacena cookies.",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Messages = (typeof messages)[Lang];
