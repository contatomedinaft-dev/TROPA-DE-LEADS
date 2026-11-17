import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SITE, abs } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Marketing digital, tráfego pago e Google`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    title: `${SITE.name} | Marketing digital, tráfego pago e Google`,
    description: SITE.description,
    url: "/",
    images: [{ url: "/hero-bg.jpg", alt: SITE.name }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#020617" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-slate-950 font-sans text-slate-50 antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": abs("/#organization"),
                name: SITE.name,
                url: SITE.url,
                logo: abs("/logo.png"),
                email: SITE.email,
                telephone: "+" + SITE.whatsapp,
                areaServed: ["Campinas, SP", "Brasil"],
              },
              { "@type": "WebSite", "@id": abs("/#website"), url: SITE.url, name: SITE.name, inLanguage: "pt-BR" },
            ],
          }}
        />
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
