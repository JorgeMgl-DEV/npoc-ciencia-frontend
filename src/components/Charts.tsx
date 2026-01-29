"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const byArea = [
  { name: "TI", value: 18 },
  { name: "Redes", value: 12 },
  { name: "Administração", value: 9 },
  { name: "Meio Ambiente", value: 7 },
  { name: "Farmácia", value: 10 },
  { name: "Enfermagem", value: 14 },
];

const annual = [
  { year: "2021", total: 12 },
  { year: "2022", total: 18 },
  { year: "2023", total: 26 },
  { year: "2024", total: 31 },
  { year: "2025", total: 45 },
];

const pie = [
  { name: "TI", value: 30 },
  { name: "Redes", value: 20 },
  { name: "ADM", value: 16 },
  { name: "MeioAmbiente", value: 10 },
  { name: "Farmácia", value: 12 },
  { name: "Enfermagem", value: 12 },
];

// Recharts exige colors pra células do pie; mantendo neutro/sem custom? 
// Aqui usamos um set mínimo, mas sem "tema" específico.
const PIE_COLORS = ["#2563eb", "#16a34a", "#d97706", "#b91c1c", "#6d28d9", "#0f766e"];

export function Charts() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-sm font-extrabold text-slate-900">Produções por Área</div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byArea}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-sm font-extrabold text-slate-900">Evolução Anual da Produção</div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={annual}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="text-sm font-extrabold text-slate-900">Distribuição por Curso</div>
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Legend />
              <Tooltip />
              <Pie data={pie} dataKey="value" nameKey="name" outerRadius={120}>
                {pie.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
