"use client";

import { Guard, LogoutButton } from "@/components/Guard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LinkButton, Button } from "@/components/Button";
import { listProductions, removeProduction } from "@/lib/mockDb";
import { useMemo, useState } from "react";
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

export default function ProfessorProducoes() {
  const [tick, setTick] = useState(0);
  const rows = useMemo(() => listProductions(), [tick]);

  return (
    <Guard role="PROFESSOR">
      <Navbar />
      <main className="container-max py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Minhas Produções</h1>
            <p className="mt-1 text-sm text-slate-600">Gerencie e acompanhe o status das suas produções científicas.</p>
          </div>
          <div className="flex gap-2">
            <LinkButton href="/professor/nova">+ Nova produção</LinkButton>
            <LogoutButton />
          </div>
        </div>

        <div className="mt-6 card overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr className="border-b border-slate-100">
                <th className="p-4 font-extrabold">Título</th>
                <th className="p-4 font-extrabold">Tipo</th>
                <th className="p-4 font-extrabold">Evento</th>
                <th className="p-4 font-extrabold">Ano</th>
                <th className="p-4 font-extrabold">Status</th>
                <th className="p-4 font-extrabold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id} className="border-b border-slate-100">
                  <td className="p-4 font-semibold">{p.titulo}</td>
                  <td className="p-4">{p.tipo}</td>
                  <td className="p-4">{p.evento}</td>
                  <td className="p-4">{p.ano}</td>
                  <td className="p-4"><Badge status={p.status} /></td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <LinkButton href={`/professor/editar/${p.id}`} variant="ghost" className="border border-slate-200">
                        Editar
                      </LinkButton>
                      <Button
                        variant="danger"
                        onClick={() => {
                          removeProduction(p.id);
                          setTick((x) => x + 1);
                        }}
                      >
                        Excluir
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td className="p-6 text-slate-500" colSpan={6}>
                    Nenhuma produção cadastrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </Guard>
  );
}
