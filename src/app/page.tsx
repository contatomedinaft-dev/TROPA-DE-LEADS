import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { WhatsAppButton, FinalCta } from "@/components/Cta";

const problems = [
  "Sua empresa não aparece bem no Google.",
  "Você depende exclusivamente de indicações.",
  "Seus anúncios não geram resultados.",
  "Seu Instagram não transmite profissionalismo.",
  "Seu site não gera contatos.",
  "Você produz conteúdo, mas ele não vira oportunidade comercial.",
];

const process = [
  ["Diagnóstico da presença digital", "Analisamos Google, site, redes sociais, anúncios e concorrência."],
  ["Planejamento estratégico", "Definimos prioridades, canais e objetivos comerciais."],
  ["Implementação das soluções", "Executamos as ações com padrão profissional."],
  ["Acompanhamento e otimização", "Medimos, ajustamos e melhoramos continuamente."],
  ["Análise de oportunidades", "Identificamos novas frentes de crescimento para a empresa."],
];

const differentials = [
  "Estratégia, fotografia, vídeo, conteúdo, Google, anúncios e tecnologia trabalhando juntos.",
  "Foco em contato e oportunidade comercial, não em métricas de vaidade.",
  "Comunicação direta e transparente, com explicação do que está sendo feito.",
  "Sem promessas de posição ou resultado garantido: trabalhamos com método e mensuração.",
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden py-20">
        <Image src="/hero-bg.jpg" alt="" fill priority sizes="100vw" className="-scale-x-100 object-cover object-center" />
        <div className="absolute inset-0 bg-slate-950/75 lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/60 lg:to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Mais visibilidade, mais oportunidades e{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">mais clientes</span> para sua empresa.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              Combinamos marketing digital, tráfego pago, Google, conteúdo profissional e tecnologia para ajudar empresas a crescer.
            </p>
            <div className="mt-10">
              <WhatsAppButton message="Olá! Quero mais clientes para minha empresa. Podemos conversar?" label="Quero conversar sobre minha empresa" where="hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold lg:text-3xl">Problemas que resolvemos</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <li key={p} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 leading-relaxed text-slate-200">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold lg:text-3xl">Nossas soluções</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-base font-bold">{s.name}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">{s.short}</p>
                <span className="mt-6 text-sm font-semibold text-blue-700 group-hover:underline">Saiba mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold lg:text-3xl">Como ajudamos sua empresa</h2>
          <ol className="mt-10 space-y-6">
            {process.map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-600 font-bold" aria-hidden>{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-white">{t}</h3>
                  <p className="mt-1 text-slate-400">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold lg:text-3xl">Por que a Tropa de Leads</h2>
          <ul className="mt-10 space-y-4">
            {differentials.map((d) => (
              <li key={d} className="flex gap-3 text-slate-700"><span className="mt-1 text-blue-600" aria-hidden>✓</span>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        title="Vamos conversar sobre a presença digital da sua empresa?"
        text="Conte o que você precisa e descubra como melhorar sua visibilidade e gerar mais oportunidades."
        message="Olá! Quero descobrir como melhorar a presença digital da minha empresa."
        where="final"
      />
    </>
  );
}
