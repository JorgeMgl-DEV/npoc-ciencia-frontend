"use client";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { authenticate } from "@/lib/auth";
import { setSession } from "@/lib/session";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const hint = useMemo(
    () => "Dica: gestor@iema.edu.br / npoc123  |  professor@iema.edu.br / npoc123",
    []
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    const user = authenticate(email.trim(), password);
    if (!user) {
      setErr("E-mail ou senha inválidos.");
      return;
    }

    setSession({ email: user.email, role: user.role, nome: user.nome });
    router.push(user.role === "GESTOR" ? "/gestor" : "/professor");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-700 to-emerald-600">
      <div className="container-max flex min-h-screen items-center justify-center py-10">
        <div className="card w-full max-w-md p-8">
          <div className="flex justify-center">
            <Logo compact />
          </div>
          <h1 className="mt-4 text-center text-xl font-extrabold">Acesso do Professor</h1>

          <form onSubmit={onSubmit} className="mt-6 space-y-3">
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              placeholder="E-mail institucional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {err && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {err}
              </div>
            )}

            <Button className="w-full">Entrar</Button>

            <div className="text-center text-xs text-slate-500">{hint}</div>
          </form>
        </div>
      </div>
    </main>
  );
}
