import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { abs } from "@/lib/site";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Início", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: abs(c.href),
          })),
        }}
      />
      <ol className="flex flex-wrap items-center gap-2">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === all.length - 1 ? (
              <span aria-current="page" className="text-slate-700">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-slate-950">{c.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
