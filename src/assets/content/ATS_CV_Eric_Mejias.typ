// CV — Eric Mejías Gamonal

#set page(
  width: 21cm,
  height: 29.7cm,
  margin: (top: 1.3cm, bottom: 1.3cm, left: 1.6cm, right: 1.6cm),
)
#set text(font: "Fira Sans", size: 9.6pt, lang: "es")
#set par(justify: false, leading: 0.55em)

// ---- helpers ----
#let sectionTitle(t) = [
  #v(6pt)
  #text(size: 11.5pt, weight: "bold", fill: rgb("#1a3c5e"))[#upper(t)]
  #v(-6pt)
  #line(length: 100%, stroke: 0.5pt + rgb("#1a3c5e"))
  #v(2pt)
]

#let job(title, org, place, dates) = [
  #grid(
    columns: (1fr, auto),
    [#text(weight: "bold", size: 10pt)[#title] #text(fill: rgb("#444444"))[— #org #if place != none [ · #place]]],
    [#text(size: 9pt, style: "italic")[#dates]]
  )
]

#let proj(title, tech, url, label: "Ver repositorio") = [
  #grid(
    columns: (1fr, auto),
    [#text(weight: "bold", size: 10pt)[#title]],
    [#text(size: 8.5pt, fill: rgb("#1a3c5e"))[#link(url)[#label]]]
  )
  #text(size: 8.7pt, style: "italic", fill: rgb("#555555"))[#tech]
]

// HEADER
#align(center)[
  #text(size: 20pt, weight: "bold")[Eric Mejías Gamonal]
  #v(-2pt)
  #text(size: 16pt, fill: rgb("#1a3c5e"))[Desarrollador Web Full Stack Junior · IA i Big Data]
  #v(1pt)
  #text(size: 8pt, style: "italic", fill: rgb("#666666"))[Me gusta entender el "por qué" detrás de los datos, no solo el "cómo" del código]
  #v(3pt)
  #text(size: 10pt)[
    España · Disponibilidad presencial / híbrido / remoto
  ]
  #v(3pt)
  #text(size: 10pt)[
    ericmejiasgamonal\@gmail.com ·
    #link("https://github.com/Eriquito00")[GitHub] ·
    #link("https://www.linkedin.com/in/eric-mejias-gamonal")[LinkedIn]
  ]
]

#v(4pt)

#sectionTitle("Perfil profesional")
#text(size: 9.3pt)[
Desarrollador Full Stack Junior apasionado por el desarrollo web, la IA y el Big Data, con experiencia práctica en React, Node.js, TypeScript y bases de datos relacionales construyendo aplicaciones completas de principio a fin. Formación en Desarrollo de Aplicaciones Web (DAW) y especialización en curso en Inteligencia Artificial y Big Data. Aprendiz constante, con interés en producto, SEO y crecimiento digital, y proyectos personales publicados en producción.
]

// EXPERIENCIA TÉCNICA
#sectionTitle("Experiencia técnica")

#job("Analista SEO", "Imàtica", "Girona, Cataluña", "Abr 2026 – Jun 2026")
#text(size: 8.9pt)[Optimicé el posicionamiento orgánico de sitios web mediante auditorías técnicas SEO con Google Search Console, GA4 y SEMrush, mejorando la visibilidad y el rendimiento web medible en tráfico.]
#v(3pt)

#job("Desarrollador Web", "GeniusX", "Cassà de la Selva", "Oct 2025 – Nov 2025")
#text(size: 8.9pt)[Desarrollé funcionalidades para aplicaciones web del cliente, entregando features funcionales dentro de los plazos establecidos y aplicando buenas prácticas de desarrollo.]
#v(3pt)

#job("Técnico Microinformático", "Leankubatore (Erasmus+)", "Catania, Italia", "Abr 2024 – May 2024")
#text(size: 8.9pt)[Brindé soporte técnico y mantenimiento de sistemas informáticos en un entorno internacional, desarrollando adaptabilidad y trabajo en equipo multicultural.]
#v(3pt)

#job("Técnico Microinformático", "Escola Maria Cubí i Soler", "Malgrat de mar, España", "Oct 2023 – Feb 2024")
#text(size: 8.9pt)[Resolví incidencias de hardware, software y redes en equipos educativos, garantizando la continuidad operativa de los sistemas del centro.]

// PROYECTOS TÉCNICOS
#sectionTitle("Proyectos técnicos")

#proj("Rekko — Red social de recomendaciones de anime (Full Stack)", "React · Vite · TypeScript · Tailwind CSS · Node.js · Express · PostgreSQL · Prisma · Supabase · Firebase · Cloudflare · Vercel", "https://github.com/Rekko-Lists")
#text(size: 8.9pt)[Desarrollé una red social full stack para descubrir y recomendar anime, con React y Node.js/Express, modelando la base de datos con PostgreSQL y Prisma, y desplegada en producción (Vercel + Cloudflare).]
#v(3pt)

#proj("GeoQueryAI — Consultas geográficas en lenguaje natural", "TypeScript · APIs de IA · Visualización en mapa", "https://github.com/Eriquito00/GeoQueryAI")
#text(size: 8.9pt)[Construí una aplicación que interpreta consultas en lenguaje natural sobre lugares geográficos y visualiza los resultados en un mapa interactivo, aplicando conceptos de IA a un caso de uso real.]
#v(3pt)

#proj("RekkoPHP — Backend con autenticación segura", "PHP · JavaScript · AJAX · OAuth2 · JWT", "https://github.com/Eriquito00/RekkoPHP")
#text(size: 8.9pt)[Implementé un backend en PHP con autenticación OAuth2 y tokens JWT, integrando llamadas asíncronas AJAX para reforzar la seguridad y la comunicación cliente-servidor.]
#v(3pt)

#proj("Aplicación de Gestión de Escalada", "Java · MySQL · JDBC · Docker · OAuth2 · Maven", "https://github.com/Eriquito00/ProyectoAplicacionEscalada")
#text(size: 8.9pt)[Diseñé una aplicación Java con persistencia en MySQL vía JDBC, gestioné dependencias con Maven y contenericé el entorno con Docker, incorporando autenticación OAuth2.]

// EXPERIENCIA COMPLEMENTARIA
#sectionTitle("Experiencia complementaria")
#text(size: 8.7pt)[
*Auxiliar de Cajas* — Carrefour · *Ayudante de Camarero* — Evenia Hotels.
Desarrollé habilidades de atención al cliente, trabajo bajo presión y gestión del tiempo en entornos de alta exigencia.
]

// EDUCACIÓN
#sectionTitle("Educación")
#job("Especialización en Inteligencia Artificial y Big Data", "Sa Palomera", "Blanes", "2026 – 2027")
#job("Grado Superior en Desarrollo de Aplicaciones Web (DAW)", "Sa Palomera", "Blanes", "2024 – 2026")
#job("Grado Medio en Sistemas Microinformáticos y Redes (SMR)", "Sa Palomera", "Blanes", "2022 – 2024")

// HABILIDADES E IDIOMAS
#sectionTitle("Habilidades técnicas")
#text(size: 8.9pt)[
*Frontend:* HTML, CSS, JavaScript, TypeScript, React, Astro, Tailwind CSS \
*Backend:* Node.js, Express, Java, PHP, Python (conceptos IA) \
*Bases de datos:* PostgreSQL, MySQL, SQLite, MongoDB, Prisma, Supabase, Firebase \
*Herramientas:* Git/GitHub, Docker, Bash, Postman, Figma, SEO (GSC, GA4, SEMrush) \
*Idiomas:* Español (nativo) · Catalán (nativo) · Inglés (intermedio, B1-B2)
]

// INFORMACIÓN ADICIONAL
#sectionTitle("Información adicional")
#text(size: 8.9pt)[
*Permisos de conducir:* Permisos B y A2 \
*Disponibilidad:* Incorporación inmediata · Vehículo propio
]