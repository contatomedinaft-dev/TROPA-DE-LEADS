import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/Cta";
import { GoogleBadge } from "@/components/GoogleBadge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Tropa de Leads",
  description:
    "Conheça a Tropa de Leads: marketing digital com foco em conversão, unindo tráfego pago, Google, conteúdo, fotografia, vídeo e tecnologia. Atendimento em Campinas/SP e região.",
  alternates: { canonical: "/sobre/" },
};

const pillars = [
  ["Conversão em primeiro lugar", "Curtidas não pagam boletos. Cada ação é pensada para gerar contato e oportunidade comercial."],
  ["Estratégia integrada", "Google, anúncios, conteúdo, site, fotografia e vídeo trabalham juntos, e não como serviços soltos."],
  ["Transparência", "Explicamos o que está sendo feito e por quê, sem promessas de posição ou resultado garantido."],
  ["Foco em negócios locais", "Entendemos a rotina de empresas que dependem de clientes da própria região."],
];

export default function SobrePage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Sobre", href: "/sobre/" }]} />
          <div className="mt-10 grid items-center gap-14 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl">Marketing digital pensado para negócios locais</h1>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
                <p>A {SITE.name} nasceu com um objetivo: trazer resultados reais para o negócio dos nossos clientes.</p>
                <p>Unimos tráfego pago, Google Meu Negócio, SEO, conteúdo estratégico, fotografia, vídeo e tecnologia para transformar desconhecidos em clientes.</p>
                <p>Atendemos empresas de {SITE.region} e de todo o Brasil, com comunicação direta e foco em crescimento e previsibilidade.</p>
              </div>
              <div className="mt-8"><GoogleBadge /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/hero-bg.jpg" alt="Fundador da Tropa de Leads" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[38%_30%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Como trabalhamos</h2>
          <dl className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white/5 p-7">
                <dt className="text-xl font-semibold text-white">{t}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-slate-300">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCta
        title="Vamos conversar?"
        text="Conte o que sua empresa precisa e veja como podemos ajudar."
        message="Olá! Vi o site da Tropa de Leads e quero conversar sobre minha empresa."
        where="sobre"
      />
    </>
  );
}
