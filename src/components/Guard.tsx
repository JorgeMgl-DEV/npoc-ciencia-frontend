"use client";

import { getSession, clearSession } from "@/lib/session";
import type { Role } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LinkButton } from "./Button";

export function Guard({ role, children }: { role: Role; children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s) {
      router.replace("/login");
      return;
    }
    if (s.role !== role) {
      router.replace(s.role === "GESTOR" ? "/gestor" : "/professor");
      return;
    }
    setOk(true);
  }, [role, router]);

  if (!ok) {
    return (
      <main className="container-max py-10">
        <div className="card p-6">
          <div className="text-sm text-slate-600">Verificando sessão...</div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}

export function LogoutButton() {
  const router = useRouter();
  return (
    <LinkButton
      href="#"
      variant="ghost"
      className="border border-slate-200"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={(e: any) => {
        e.preventDefault();
        clearSession();
        router.push("/");
      }}
    >
      Sair
    </LinkButton>
  );
}
