import { Production, Course } from "./types";

const now = () => new Date().toISOString();

let productions: Production[] = [
  {
    id: "p1",
    titulo: "Monitoramento da qualidade da água em rios urbanos",
    tipo: "Projeto",
    evento: "FECULEMA 2025",
    ano: 2025,
    status: "Aprovado",
    autores: "Prof. Erick Macgregor; Murilo; Jorge",
    area: "IoT / Meio Ambiente",
    cursos: ["Informática", "Meio Ambiente"],
    link: "https://drive.google.com/",
    descricao:
      "Projeto de pesquisa aplicada com coleta de dados, análise e visualização de indicadores para apoio à tomada de decisão.",
    createdAtISO: now(),
    updatedAtISO: now(),
  },
  {
    id: "p2",
    titulo: "Uso de IA na previsão de evasão escolar",
    tipo: "Artigo",
    evento: "CONEDU",
    ano: 2024,
    status: "Em análise",
    autores: "Prof. João; Maria Silva; Pedro Santos",
    area: "IA / Educação",
    cursos: ["Administração", "Informática"],
    link: "https://doi.org/",
    descricao:
      "Aplicação de modelos preditivos com variáveis acadêmicas para identificar risco de evasão e apoiar intervenções.",
    createdAtISO: now(),
    updatedAtISO: now(),
  },
  {
    id: "p3",
    titulo: "Robótica educacional aplicada ao ensino médio",
    tipo: "Apresentação",
    evento: "SNCT",
    ano: 2024,
    status: "Rascunho",
    autores: "Prof. Beatriz; Equipe Robótica",
    area: "Robótica",
    cursos: ["Redes"],
    link: "https://drive.google.com/",
    descricao:
      "Relato de experiência de oficinas, desafios e resultados de aprendizagem em robótica educacional.",
    createdAtISO: now(),
    updatedAtISO: now(),
  },
];

export function listProductions() {
  return productions;
}

export function getProduction(id: string) {
  return productions.find((p) => p.id === id) ?? null;
}

export function upsertProduction(p: Production) {
  const idx = productions.findIndex((x) => x.id === p.id);
  if (idx >= 0) productions[idx] = { ...p, updatedAtISO: now() };
  else productions.unshift({ ...p, createdAtISO: now(), updatedAtISO: now() });
}

export function removeProduction(id: string) {
  productions = productions.filter((p) => p.id !== id);
}

export function setStatus(id: string, status: Production["status"], feedbackGestor?: string) {
  const p = getProduction(id);
  if (!p) return;
  upsertProduction({ ...p, status, feedbackGestor: feedbackGestor ?? p.feedbackGestor });
}

export const COURSES: Course[] = [
  "Informática",
  "Redes",
  "Farmácia",
  "Meio Ambiente",
  "Administração",
  "Enfermagem",
];
