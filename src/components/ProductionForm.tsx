"use client";

import { COURSES, getProduction, upsertProduction } from "@/lib/mockDb";
import type { Production, ProductionType, Course } from "@/lib/types";
import { useMemo, useState } from "react";
import { Button, LinkButton } from "./Button";
import { useRouter } from "next/navigation";

const TYPES: ProductionType[] = ["Artigo", "Projeto", "Apresentação", "Premiação"];

function uuid() {
  return Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
}

export function ProductionForm({ id }: { id?: string }) {
  const router = useRouter();
  const existing = useMemo(() => (id ? getProduction(id) : null), [id]);

  const [titulo, setTitulo] = useState(existing?.titulo ?? "");
  const [tipo, setTipo] = useState<ProductionType | "">(existing?.tipo ?? "");
  const [evento, setEvento] = useState(existing?.evento ?? "");
  const [ano, setAno] = useState(existing?.ano?.toString() ?? new Date().getFullYear().toString());
  const [autores, setAutores] = useState(existing?.autores ?? "");
  const [area, setArea] = useState(existing?.area ?? "");
  const [cursos, setCursos] = useState<Course[]>(existing?.cursos ?? ["Informática"]);
  const [link, setLink] = useState(existing?.link ?? "");
  const [descricao, setDescricao] = useState(existing?.descricao ?? "");
  const [err, setErr] = useState<string | null>(null);

  function toggleCurso(c: Course) {
    setCursos((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  function submit() {
    setErr(null);
    if (!titulo.trim()) return setErr("Informe o título.");
    if (!tipo) return setErr("Selecione o tipo.");
    if (!evento.trim()) return setErr("Informe o evento/revista/competição.");
    if (!autores.trim()) return setErr("Informe autores (professor e alunos).");
    if (!link.trim()) return setErr("Informe o link (DOI/anais/Google Drive).");
    if (!descricao.trim()) return setErr("Informe uma breve descrição.");
    if (cursos.length === 0) return setErr("Selecione ao menos um curso.");

    const payload: Production = {
      id: existing?.id ?? `p_${uuid()}`,
      titulo: titulo.trim(),
      tipo: tipo as ProductionType,
      evento: evento.trim(),
      ano: Number(ano) || new Date().getFullYear(),
      status: existing?.status ?? "Em análise",
      autores: autores.trim(),
      area: area.trim() || "Área não informada",
      cursos,
      link: link.trim(),
      descricao: descricao.trim(),
      createdAtISO: existing?.createdAtISO ?? new Date().toISOString(),
      updatedAtISO: new Date().toISOString(),
    };

    upsertProduction(payload);
    router.push("/professor/producoes");
  }

  return (
    <div className="card p-6">
      <div className="text-xl font-extrabold text-blue-900">
        {existing ? "Editar Produção Científica" : "Cadastrar Produção Científica"}
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Preencha as informações abaixo para registrar uma produção no NPOC Ciência.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="text-sm font-bold">Título da produção</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
            placeholder="Ex: Monitoramento da qualidade da água em rios urbanos"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-bold">Tipo de produção</label>
          <select
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
            value={tipo}
            onChange={(e) => setTipo(e.target.value as any)}
          >
            <option value="">Selecione</option>
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold">Evento / Revista / Competição</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              placeholder="Ex: FECULEMA 2025, CONEDU, SNCT, Revista X..."
              value={evento}
              onChange={(e) => setEvento(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-bold">Ano</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold">Autores (professor e alunos)</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
            placeholder="Ex: Prof. João, Maria Silva, Pedro Santos..."
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold">Área do projeto</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              placeholder="Ex: IA / Educação, Redes, Robótica..."
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-bold">Cursos envolvidos</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {COURSES.map((c) => {
                const active = cursos.includes(c);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCurso(c)}
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-bold transition",
                      active
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold">Link para comprovação (DOI, anais ou Google Drive)</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
            placeholder="https://"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-bold">Breve descrição</label>
          <textarea
            className="mt-2 min-h-[110px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
            placeholder="Descreva o objetivo, método e resultado esperado (resumo curto)."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <p className="mt-2 text-xs text-slate-500">
            Sugestão (CNPq): objetivo, metodologia, resultados/impacto e palavras-chave.
          </p>
        </div>

        {err && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {err}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Button onClick={submit} className="px-6">
            Salvar produção
          </Button>
          <LinkButton href="/professor/producoes" variant="ghost" className="border border-slate-200">
            Voltar
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
