import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { WhatsAppButton, FinalCta } from "@/components/Cta";
import { GoogleBadge } from "@/components/GoogleBadge";
import { Reviews } from "@/components/Reviews";
import { Testimonials } from "@/components/Testimonials";

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

const fold = "flex min-h-[85vh] items-center py-24";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden py-24">
        <Image src="/hero-bg.jpg" alt="" fill priority sizes="100vw" className="-scale-x-100 object-cover object-center" />
        <div className="absolute inset-0 bg-slate-950/80 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/70 lg:to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-6xl">
              Mais visibilidade, mais oportunidades e{" "}
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">mais clientes</span> para sua empresa.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-200">
              Combinamos marketing digital, tráfego pago, Google, conteúdo profissional e tecnologia para ajudar empresas a crescer.
            </p>
            <div className="mt-10">
              <WhatsAppButton message="Olá! Quero mais clientes para minha empresa. Podemos conversar?" label="Quero conversar sobre minha empresa" where="hero" />
            </div>
          </div>
        </div>
      </section>

      <section className={fold}>
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Problemas que resolvemos</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <li key={p} className="rounded-2xl bg-white shadow-sm p-7 text-lg leading-relaxed text-slate-700">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={fold}>
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Nossas soluções</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="group flex flex-col rounded-2xl bg-white shadow-sm p-7 transition hover:shadow-md">
                <h3 className="text-lg font-bold">{s.name}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-slate-700">{s.short}</p>
                <span className="mt-6 font-semibold text-blue-700 group-hover:underline">Saiba mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={fold}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-square">
            <Image
              src="/hero-bg.jpg"
              alt="Fundador da Tropa de Leads trabalhando no notebook"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[38%_30%]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Quem somos</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>Somos especialistas em marketing digital focados em um único objetivo: trazer resultados reais para o seu negócio.</p>
              <p>Com anos de experiência no mercado, entendemos que curtidas não pagam boletos. Por isso, nossa metodologia é baseada em conversão, unindo tráfego pago, conteúdo estratégico e otimização para transformar desconhecidos em clientes.</p>
              <p>Se você busca uma parceria transparente, focada em crescimento e previsibilidade, você está no lugar certo.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <GoogleBadge />
              <Link href="/sobre/" className="font-semibold text-blue-700 hover:underline">Conheça nossa atuação →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={fold}>
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Como ajudamos sua empresa</h2>
          <ol className="mt-12 space-y-8">
            {process.map(([t, d], i) => (
              <li key={t} className="flex gap-6">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white" aria-hidden>{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{t}</h3>
                  <p className="mt-1 text-lg text-slate-700">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Por que a Tropa de Leads</h2>
          <ul className="mt-10 space-y-5">
            {differentials.map((d) => (
              <li key={d} className="flex gap-4 text-lg text-slate-700"><span className="mt-1 text-blue-700" aria-hidden>✓</span>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <Reviews />

      <FinalCta
        title="Vamos conversar sobre a presença digital da sua empresa?"
        text="Conte o que você precisa e descubra como melhorar sua visibilidade e gerar mais oportunidades."
        message="Olá! Quero descobrir como melhorar a presença digital da minha empresa."
        where="final"
      />
    </>
  );
}
