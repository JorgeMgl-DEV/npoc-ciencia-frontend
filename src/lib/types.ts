export type Course =
  | "Informática"
  | "Redes"
  | "Farmácia"
  | "Meio Ambiente"
  | "Administração"
  | "Enfermagem";

export type ProductionType = "Artigo" | "Projeto" | "Apresentação" | "Premiação";

export type Status = "Rascunho" | "Em análise" | "Aprovado" | "Reprovado" | "Ajustes";

export type Production = {
  id: string;
  titulo: string;
  tipo: ProductionType;
  evento: string;
  ano: number;
  status: Status;
  autores: string;
  area: string;
  cursos: Course[];
  link: string;
  descricao: string;
  createdAtISO: string;
  updatedAtISO: string;
  feedbackGestor?: string;
};
