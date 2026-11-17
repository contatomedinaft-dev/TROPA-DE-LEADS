import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" aria-label="Tropa de Leads — página inicial">
          <Image src="/logo.png" alt="Tropa de Leads" width={140} height={48} className="h-10 w-auto mix-blend-screen" priority />
        </Link>
        <nav aria-label="Principal" className="hidden gap-8 text-sm font-medium text-slate-200 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200">Menu</summary>
          <nav aria-label="Principal (mobile)" className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800">{n.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
