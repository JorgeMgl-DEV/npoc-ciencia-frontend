export type Role = "GESTOR" | "PROFESSOR";

export const MOCK_USERS: Array<{ email: string; password: string; role: Role; nome: string }> = [
  { email: "gestor@iema.edu.br", password: "npoc123", role: "GESTOR", nome: "Gestor NPOC" },
  { email: "professor@iema.edu.br", password: "npoc123", role: "PROFESSOR", nome: "Professor(a) IEMA" },
];

export function authenticate(email: string, password: string) {
  const user = MOCK_USERS.find((u) => u.email === email && u.password === password);
  return user ?? null;
}
