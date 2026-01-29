import { Guard, LogoutButton } from "@/components/Guard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductionForm } from "@/components/ProductionForm";

export default function EditarProducao({ params }: { params: { id: string } }) {
  return (
    <Guard role="PROFESSOR">
      <Navbar />
      <main className="container-max py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Editar</h1>
            <p className="mt-1 text-sm text-slate-600">Atualize as informações antes da validação.</p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-6">
          <ProductionForm id={params.id} />
        </div>
      </main>
      <Footer />
    </Guard>
  );
}
