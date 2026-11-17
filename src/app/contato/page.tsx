import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/Cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato e solicitação de orçamento",
  description: "Fale com a Tropa de Leads pelo WhatsApp ou pelo formulário e conte o que sua empresa precisa.",
  alternates: { canonical: "/contato/" },
};

export default function ContatoPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contato", href: "/contato/" }]} />
        <h1 className="mt-8 text-3xl font-bold lg:text-5xl">Vamos conversar sobre sua empresa</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-700">
          Conte o que você precisa. Respondemos pelo WhatsApp com os próximos passos e uma orientação para o seu caso.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <WhatsAppButton message="Olá! Quero falar sobre a presença digital da minha empresa." where="contato" />
            <ul className="space-y-2 text-slate-700">
              <li>WhatsApp e telefone: {SITE.phoneLabel}</li>
              <li>E-mail: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>Atendimento em {SITE.region} e em todo o Brasil.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 text-slate-900 lg:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
