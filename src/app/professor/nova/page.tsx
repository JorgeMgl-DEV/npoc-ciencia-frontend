import { Guard, LogoutButton } from "@/components/Guard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductionForm } from "@/components/ProductionForm";

export default function NovaProducao() {
  return (
    <Guard role="PROFESSOR">
      <Navbar />
      <main className="container-max py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Cadastrar</h1>
            <p className="mt-1 text-sm text-slate-600">Envie uma nova produção para análise do NPOC.</p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-6">
          <ProductionForm />
        </div>
      </main>
      <Footer />
    </Guard>
  );
}
