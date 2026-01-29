import { Guard, LogoutButton } from "@/components/Guard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GestorTable } from "@/components/GestorTable";
import { LinkButton } from "@/components/Button";

export default function GestorHome() {
  return (
    <Guard role="GESTOR">
      <Navbar />
      <main className="container-max py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Painel do Gestor (NPOC)</h1>
            <p className="mt-1 text-sm text-slate-600">
              Valide produções, sugira ajustes e acompanhe métricas por curso.
            </p>
          </div>
          <div className="flex gap-2">
            <LinkButton href="/gestor/metricas" variant="ghost" className="border border-slate-200">
              Ver métricas
            </LinkButton>
            <LogoutButton />
          </div>
        </div>

        <div className="mt-6">
          <GestorTable />
        </div>
      </main>
      <Footer />
    </Guard>
  );
}
