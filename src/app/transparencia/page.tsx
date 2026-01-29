import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Charts } from "@/components/Charts";

export default function TransparenciaPage() {
  return (
    <main>
      <Navbar />
      <section className="container-max py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-900">
          Transparência da Produção Científica — IP Coelho Neto
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Indicadores agregados que representam a produção científica por área, curso e evolução ao longo dos anos,
          sem exposição de dados individuais.
        </p>

        <div className="mt-8">
          <Charts />
        </div>
      </section>
      <Footer />
    </main>
  );
}
