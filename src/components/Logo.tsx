import { GraduationCap } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-soft">
        <GraduationCap className="h-6 w-6" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="text-lg font-extrabold tracking-tight">NPOC Ciência</div>
          <div className="text-xs text-slate-500">IP Coelho Neto</div>
        </div>
      )}
    </div>
  );
}
