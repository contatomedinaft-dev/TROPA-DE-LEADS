import Link from "next/link";
import { services } from "@/content/services";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-bold text-white">{SITE.name}</p>
          <p className="mt-3 max-w-xs leading-relaxed">{SITE.description}</p>
          <p className="mt-3">Atendimento em {SITE.region} e em todo o Brasil.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Serviços</p>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/servicos/${s.slug}/`} className="hover:text-white">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Navegação</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
          <p className="mt-6">{SITE.phoneLabel}</p>
          <p>{SITE.email}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-6 text-slate-500 lg:px-8">© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
    </footer>
  );
}
