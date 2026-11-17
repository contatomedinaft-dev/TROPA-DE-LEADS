import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta, WhatsAppButton } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { SITE, abs } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/servicos/${s.slug}/` },
    openGraph: { title: s.seoTitle, description: s.seoDescription, url: `/servicos/${s.slug}/`, type: "website" },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = s.related.map(getService).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.seoDescription,
          url: abs(`/servicos/${s.slug}/`),
          provider: { "@id": abs("/#organization") },
          areaServed: ["Campinas, SP", "Brasil"],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos/" }, { label: s.name, href: `/servicos/${s.slug}/` }]} />
          <h1 className="mt-8 text-3xl font-bold leading-tight lg:text-5xl">{s.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{s.intro}</p>
          <div className="mt-8">
            <WhatsAppButton message={s.whatsappMessage} label="Solicitar orçamento" where={`servico-${s.slug}-topo`} />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-xl font-bold">Problemas que esse serviço resolve</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {s.problems.map((p) => (<li key={p} className="flex gap-3"><span className="text-purple-400" aria-hidden>•</span>{p}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Benefícios para a empresa</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {s.benefits.map((b) => (<li key={b} className="flex gap-3"><span className="text-green-400" aria-hidden>✓</span>{b}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold">O que está incluído</h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {s.scope.map((x) => (
              <div key={x.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <dt className="font-semibold text-white">{x.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-400">{x.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Como funciona o trabalho</h2>
          <ol className="mt-8 space-y-6">
            {s.steps.map((st, i) => (
              <li key={st.title} className="flex gap-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-bold" aria-hidden>{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{st.title}</h3>
                  <p className="mt-1 text-slate-400">{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <h2 className="mt-14 text-2xl font-bold">Diferenciais da {SITE.name}</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            {s.differentials.map((d) => (<li key={d} className="flex gap-3"><span className="text-blue-400" aria-hidden>✓</span>{d}</li>))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
          <div className="mt-8 divide-y divide-slate-800 border-y border-slate-800">
            {s.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-white">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold">Serviços relacionados</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/servicos/${r.slug}/`} className="block rounded-xl border border-slate-700 p-4 hover:border-slate-500">
                  <span className="font-semibold">{r.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        title="Vamos conversar sobre o seu projeto?"
        text="Conte o que você precisa e receba uma orientação para o seu caso."
        message={s.whatsappMessage}
        where={`servico-${s.slug}-final`}
      />
    </>
  );
}
