import { Guard, LogoutButton } from "@/components/Guard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Charts } from "@/components/Charts";

export default function MetricasGestor() {
  return (
    <Guard role="GESTOR">
      <Navbar />
      <main className="container-max py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Métricas (Gestor)</h1>
            <p className="mt-1 text-sm text-slate-600">
              Indicadores agregados para acompanhamento interno do NPOC.
            </p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-6">
          <Charts />
        </div>
      </main>
      <Footer />
    </Guard>
  );
}
