import Image from "next/image";
import { ArrowRight, ShieldCheck, ChartSpline, ClipboardList } from "lucide-react";
import { LinkButton } from "./Button";

export function Hero() {
  return (
    <section className="container-max py-10 md:py-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-blue-800">NPOC</span>{" "}
            <span className="text-emerald-600">Ciência</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            O NPOC Ciência é a plataforma institucional do <b>IP Coelho Neto</b> para registrar,
            acompanhar e dar visibilidade à produção científica desenvolvida por professores e
            estudantes. Aqui, a ciência é organizada por áreas, transformada em indicadores e
            apresentada com transparência e responsabilidade institucional.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <LinkButton href="/login" className="gap-2">
              Entrar <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="/transparencia" variant="ghost" className="gap-2">
              Ver transparência <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="card p-4">
              <ClipboardList className="h-5 w-5 text-blue-700" />
              <div className="mt-2 text-sm font-bold">Organização</div>
              <div className="text-xs text-slate-500">Centralização e registro.</div>
            </div>
            <div className="card p-4">
              <ChartSpline className="h-5 w-5 text-blue-700" />
              <div className="mt-2 text-sm font-bold">Acompanhamento</div>
              <div className="text-xs text-slate-500">Métricas e evolução.</div>
            </div>
            <div className="card p-4">
              <ShieldCheck className="h-5 w-5 text-blue-700" />
              <div className="mt-2 text-sm font-bold">Credibilidade</div>
              <div className="text-xs text-slate-500">Transparência institucional.</div>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="relative aspect-[16/10] w-full">
            {/* Placeholder: troque por imagem real quando quiser */}
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Equipe e projetos"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
