export const SITE = {
  name: "Tropa de Leads",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://tropadeleads.vercel.app").replace(/\/$/, ""),
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5519983384993",
  phoneLabel: "(19) 98338-4993",
  email: "contato.medinaft@gmail.com",
  region: "Campinas/SP e região",
  description:
    "Marketing digital, tráfego pago, Google Meu Negócio, SEO, sites, fotografia e vídeo para empresas que querem mais visibilidade e clientes.",
};

// Itens do menu principal. Páginas ainda não construídas ficam fora até existirem.
export const NAV = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Sobre", href: "/sobre/" },
  { label: "Contato", href: "/contato/" },
];

export const GOOGLE_PROFILE = "https://www.google.com/maps?cid=12924717879051113522";

export const abs = (path: string) => `${SITE.url}${path}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
