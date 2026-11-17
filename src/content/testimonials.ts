export type Testimonial = { author: string; role: string; text: string };

// Depoimentos reais de clientes, autorizados pelo proprietário. Textos mantidos como foram escritos.
export const testimonials: Testimonial[] = [
  {
    author: "Silvia Mello",
    role: "Fotógrafa",
    text: "Thiago é sensacional, com visão sobre o mercado fotográfico (no meu caso), estuda cada caso individualizado, direciona, encontra soluções, incentiva e cuida do nosso negócio como se fosse dele. Foi a melhor escolha para alavancar meu negócio, super indico!",
  },
  {
    author: "Diego Medina",
    role: "Marceneiro",
    text: "Trabalhamos com a Tropa de Leads em dois canais nosso no Instagram e um no YouTube e temos tido excelente resultados.",
  },
  {
    author: "Samuel Ramos",
    role: "Empresário",
    text: "Equipe extremamente profissional, atenciosa e sempre pronta para oferecer o melhor!!",
  },
];
