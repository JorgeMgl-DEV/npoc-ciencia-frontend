export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-max py-8 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} NPOC Ciência — IP Coelho Neto</div>
          <div className="text-xs">Frontend demonstrativo (mock) — sem backend</div>
        </div>
      </div>
    </footer>
  );
}
