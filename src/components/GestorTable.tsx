"use client";

import { listProductions, setStatus, upsertProduction } from "@/lib/mockDb";
import { useMemo, useState } from "react";
import { Button, LinkButton } from "./Button";
import { clsx } from "clsx";

function Badge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Aprovado": "bg-emerald-100 text-emerald-700",
    "Em análise": "bg-amber-100 text-amber-700",
    "Rascunho": "bg-blue-100 text-blue-700",
    "Reprovado": "bg-rose-100 text-rose-700",
    "Ajustes": "bg-violet-100 text-violet-700",
  };
  return (
    <span className={clsx("rounded-full px-3 py-1 text-xs font-bold", map[status] ?? "bg-slate-100 text-slate-700")}>
      {status}
    </span>
  );
}

export function GestorTable() {
  const [tick, setTick] = useState(0);
  const rows = useMemo(() => listProductions(), [tick]);
  const [feedback, setFeedback] = useState<Record<string, string>>({});

  return (
    <div className="card overflow-x-auto">
      <table className="min-w-[1100px] w-full text-sm">
        <thead className="bg-slate-50 text-left">
          <tr className="border-b border-slate-100">
            <th className="p-4 font-extrabold">Título</th>
            <th className="p-4 font-extrabold">Cursos</th>
            <th className="p-4 font-extrabold">Tipo</th>
            <th className="p-4 font-extrabold">Evento</th>
            <th className="p-4 font-extrabold">Ano</th>
            <th className="p-4 font-extrabold">Status</th>
            <th className="p-4 font-extrabold">Ações</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.id} className="border-b border-slate-100 align-top">
              <td className="p-4">
                <div className="font-semibold">{p.titulo}</div>
                <div className="mt-1 text-xs text-slate-500">{p.area}</div>
                <div className="mt-2 text-xs text-slate-500">
                  <span className="font-bold">Link:</span>{" "}
                  <a className="underline" href={p.link} target="_blank" rel="noreferrer">
                    {p.link}
                  </a>
                </div>
              </td>
              <td className="p-4">{p.cursos.join(", ")}</td>
              <td className="p-4">{p.tipo}</td>
              <td className="p-4">{p.evento}</td>
              <td className="p-4">{p.ano}</td>
              <td className="p-4">
                <Badge status={p.status} />
                {p.feedbackGestor && (
                  <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                    <span className="font-bold">Feedback:</span> {p.feedbackGestor}
                  </div>
                )}
              </td>
              <td className="p-4">
                <div className="grid gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={() => {
                        setStatus(p.id, "Aprovado");
                        setTick((x) => x + 1);
                      }}
                    >
                      Aprovar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setStatus(p.id, "Reprovado", feedback[p.id] || "Produção recusada. Ajuste e reenviar.");
                        setTick((x) => x + 1);
                      }}
                    >
                      Recusar
                    </Button>
                    <Button
                      variant="ghost"
                      className="border border-slate-200"
                      onClick={() => {
                        setStatus(p.id, "Ajustes", feedback[p.id] || "Sugestões de ajustes: revisar autores/descrição e anexar comprovação.");
                        setTick((x) => x + 1);
                      }}
                    >
                      Sugerir ajustes
                    </Button>
                  </div>

                  <input
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-blue-400"
                    placeholder="Feedback rápido (opcional) — usado ao recusar/sugerir ajustes"
                    value={feedback[p.id] ?? ""}
                    onChange={(e) => setFeedback((prev) => ({ ...prev, [p.id]: e.target.value }))}
                  />

                  <LinkButton
                    href={`/gestor/editar/${p.id}`}
                    variant="ghost"
                    className="border border-slate-200 justify-center"
                  >
                    Editar livremente
                  </LinkButton>
                </div>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td className="p-6 text-slate-500" colSpan={7}>
                Nenhuma submissão encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
