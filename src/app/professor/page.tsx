import { Guard, LogoutButton } from "@/components/Guard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";

export default function ProfessorHome() {
  return (
    <Guard role="PROFESSOR">
      <Navbar />
      <main className="container-max py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Painel do Professor</h1>
            <p className="mt-1 text-sm text-slate-600">
              Gerencie suas produções científicas e acompanhe seus registros.
            </p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-sm font-extrabold">Cadastrar nova produção</div>
            <p className="mt-1 text-sm text-slate-600">
              Registrar artigo, resumo, projeto, apresentação ou premiação.
            </p>
            <div className="mt-4">
              <LinkButton href="/professor/nova">Abrir formulário</LinkButton>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-extrabold">Minhas produções</div>
            <p className="mt-1 text-sm text-slate-600">
              Visualizar e gerenciar os registros já cadastrados.
            </p>
            <div className="mt-4">
              <LinkButton href="/professor/producoes" variant="ghost" className="border border-slate-200">
                Ver lista
              </LinkButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Guard>
  );
}
