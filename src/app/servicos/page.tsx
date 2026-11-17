import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Serviços de marketing digital, Google e produção de conteúdo",
  description:
    "Conheça os serviços da Tropa de Leads: tráfego pago, redes sociais, Google Meu Negócio, SEO, criação de sites, fotografia, vídeo e consultoria.",
  alternates: { canonical: "/servicos/" },
};

export default function ServicosPage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos/" }]} />
          <h1 className="mt-8 text-3xl font-bold lg:text-5xl">Serviços para empresas que querem crescer</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Estratégia, Google, anúncios, conteúdo, imagem e tecnologia integrados para gerar visibilidade e oportunidades comerciais.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="group flex flex-col rounded-2xl bg-white/5 p-6 transition hover:border-slate-600">
                <h2 className="text-base font-bold">{s.name}</h2>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400">{s.short}</p>
                <span className="mt-6 text-sm font-semibold text-blue-400 group-hover:underline">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta
        title="Não sabe por onde começar?"
        text="Conte o seu cenário e indicamos o caminho mais adequado para sua empresa."
        message="Olá! Quero ajuda para entender quais serviços fazem sentido para minha empresa."
        where="servicos-index"
      />
    </>
  );
}
