import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NPOC Ciência",
  description:
    "Plataforma institucional para registro, acompanhamento e transparência da produção científica do IP Coelho Neto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
