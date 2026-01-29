"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

const nav = [
  { href: "/#sobre", label: "Sobre o NPOC Ciência" },
  { href: "/transparencia", label: "Transparência" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const active = pathname === n.href || (n.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={clsx(
                  "text-sm font-semibold text-slate-600 hover:text-slate-900",
                  active && "text-slate-900"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="/login" className="px-5">
            Área do professor
          </LinkButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl hover:bg-slate-100 md:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="container-max flex flex-col gap-2 py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <LinkButton href="/login" className="mt-2 w-full" >
              Área do professor
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
