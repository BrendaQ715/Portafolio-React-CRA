import React from "react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: { from: string; to?: string };
  summary: string;
  tech: string[];
  achievements: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "1",
    company: "De Noveno de la carrera de Ingenieria en Sistemas Computacionales",
    role: "Estuduante Universitario",
    period: { from: "2021-007" },
    summary: "Proyectos Desarrollados en la Universidad",
    tech: ["React", "TypeScript", "Node.js"," Express", "Sql Server",".Net"],
    achievements: [
      "Puntos de ventas",
      "Chat Boots",
      "Mapa interativo del ITD",
    ],
  },
  {
    id: "2",
    company: "Bankaool",
    role: "Residente del áre de QA",
    period: { from: "2025-09" },
    summary: "Banca Movil de Notificaciones",
    tech: ["Jira", "Sql server", "iOS", "Android"],
    achievements: [
      "Matriz de pruebas",
      "Ejecución de pruebas",
      "Reporte de errores",
    ],
  },
];

const formatPeriod = (p: ExperienceItem["period"]) => {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  const from = new Date(p.from + "-01").toLocaleDateString(undefined, opts);
  const to = p.to
    ? new Date(p.to + "-01").toLocaleDateString(undefined, opts)
    : "Actual";
  return `${from} - ${to}`;
};

export default function Experience() {
  return (
    <section>
      <h2>Experiencia Profesional</h2>
      {EXPERIENCES.map((e) => (
        <article
          key={e.id}
          style={{
            border: "1px solid #020202ff",
            borderRadius: "8px",
            padding: "12px",
            margin: "12px 0",
          }}
        >
          <h3>
            {e.role} · {e.company}
          </h3>
          <p style={{ color: "#666" }}>{formatPeriod(e.period)}</p>
          <p>{e.summary}</p>
          <ul>
            {e.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          <p>
            <strong>Tecnologías:</strong> {e.tech.join(", ")}
          </p>
        </article>
      ))}
    </section>
  );
}