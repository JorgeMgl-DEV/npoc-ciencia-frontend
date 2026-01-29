import { COURSES } from "@/lib/mockDb";
import { BarChart4, ShieldCheck, ClipboardList, ChartSpline } from "lucide-react";

const cards = [
  {
    title: "Organização",
    icon: ClipboardList,
    text: "Centralizamos toda a produção científica da escola em um único sistema estruturado.",
  },
  {
    title: "Acompanhamento",
    icon: ChartSpline,
    text: "Indicadores e métricas para monitorar a evolução da produção científica ao longo do tempo.",
  },
  {
    title: "Transparência",
    icon: BarChart4,
    text: "Dados públicos e acessíveis para toda a comunidade acadêmica e sociedade.",
  },
  {
    title: "Credibilidade",
    icon: ShieldCheck,
    text: "Registro institucional que valida e reconhece o trabalho científico desenvolvido.",
  },
];

export function SectionAbout() {
  return (
    <section id="sobre" className="container-max pb-14">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Sobre o NPOC Ciência</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Uma plataforma desenvolvida para fortalecer a cultura científica no Ensino Médio e cursos
          técnicos do IP Coelho Neto, oferecendo visibilidade, organização e transparência para toda
          a produção acadêmica.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-bold">{c.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 card p-6">
        <div className="text-lg font-extrabold">Ensino Médio e Cursos Técnicos</div>
        <p className="mt-1 text-sm text-slate-600">
          O IP Coelho Neto oferece Ensino Médio integrado aos seguintes cursos técnicos, todos
          envolvidos ativamente na produção científica da instituição:
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {COURSES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 card p-6 md:flex md:items-start md:justify-between md:gap-10">
        <div className="md:w-1/2">
          <div className="text-lg font-extrabold">Missão</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Promover e fortalecer a cultura científica no Ensino Médio e cursos técnicos do IP
            Coelho Neto através de uma plataforma institucional que organize, acompanhe e divulgue a
            produção científica com transparência e credibilidade.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <div className="text-lg font-extrabold">Visão</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Ser referência em gestão e transparência da produção científica no ensino médio técnico,
            contribuindo para o desenvolvimento acadêmico e fortalecendo a imagem institucional do
            IP Coelho Neto.
          </p>
        </div>
      </div>
    </section>
  );
}
