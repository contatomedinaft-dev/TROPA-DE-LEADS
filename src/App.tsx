import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Share2, 
  MapPin, 
  Camera, 
  Video, 
  Star, 
  MessageCircle, 
  Phone, 
  Mail, 
  TrendingDown, 
  EyeOff, 
  Users,
  ArrowRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <img 
            src="/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover object-center -scale-x-100"
            onError={(e) => {
              // Fallback caso a imagem ainda não tenha sido enviada
              e.currentTarget.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1920&auto=format&fit=crop";
            }}
          />
          {/* Overlay escuro na esquerda para o texto, mais transparente na direita para a foto */}
          <div className="absolute inset-0 bg-slate-950/70 lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/50 lg:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side: Logo + Content */}
            <div className="max-w-2xl">
              {/* Logo */}
              <div className="mb-10">
                <img 
                  src="/logo.png" 
                  alt="Tropa de Leads" 
                  className="h-14 lg:h-24 w-auto object-contain mix-blend-screen"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x200/000000/FFFFFF?text=TROPA+DE+LEADS";
                  }}
                />
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                Pare de perder <br />
                clientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">todos os dias</span>
              </h1>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                Se sua empresa não aparece no Google, Instagram ou anúncios, você está deixando dinheiro na mesa.
              </p>
              
              <div className="flex items-center gap-3 text-sm lg:text-base font-semibold text-white mb-10 flex-wrap">
                <span>Google ads</span>
                <span className="text-slate-400">|</span>
                <span>Google meu Negócio</span>
                <span className="text-slate-400">|</span>
                <span>Meta Ads</span>
              </div>

              <a href="#contato" className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-green-400 transition-all duration-200 hover:scale-105">
                Quero mais clientes agora
              </a>
            </div>

            {/* Right side: Empty to let the background image show through */}
            <div className="hidden lg:block"></div>

          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold">
              A verdade que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ninguém te conta</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingDown className="w-6 h-6 text-blue-400" />,
                title: "Seus concorrentes estão roubando seus clientes",
                desc: "Enquanto você hesita, eles estão investindo em tráfego pago e dominando o Google. Cada dia sem ação é dinheiro que vai para o bolso deles."
              },
              {
                icon: <EyeOff className="w-6 h-6 text-purple-400" />,
                title: "Sua empresa é invisível na internet",
                desc: "Se ninguém encontra você no Google ou redes sociais, você simplesmente não existe para milhares de potenciais clientes que buscam seu serviço agora."
              },
              {
                icon: <Users className="w-6 h-6 text-blue-400" />,
                title: "Você depende apenas de indicação",
                desc: "Indicação é ótima, mas é imprevisível. Sem uma estratégia digital, você nunca sabe se o próximo mês vai ter clientes suficientes."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-12 leading-tight">
            Eu transformo sua presença digital em uma <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">máquina de gerar clientes</span>
          </h2>
          
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            {[
              "Apareça no topo do Google quando clientes buscam seu serviço",
              "Receba mensagens diárias de pessoas interessadas no que você vende",
              "Construa autoridade e confiança nas redes sociais",
              "Tenha previsibilidade de faturamento mês após mês",
              "Pare de depender apenas de indicação e boca a boca"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-base font-medium text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Soluções que geram <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">resultado real</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6 text-blue-500" />,
                title: "Gestão de Tráfego Pago",
                desc: "Google Ads e Meta Ads otimizados para gerar leads qualificados e vendas."
              },
              {
                icon: <Share2 className="w-6 h-6 text-purple-500" />,
                title: "Social Media",
                desc: "Conteúdo estratégico que constrói autoridade, engaja sua audiência e transforma seguidores em clientes."
              },
              {
                icon: <MapPin className="w-6 h-6 text-blue-500" />,
                title: "Google Meu Negócio",
                desc: "Otimização completa para você aparecer no topo das buscas locais e no Google Maps da sua região."
              },
              {
                icon: <Camera className="w-6 h-6 text-purple-500" />,
                title: "Fotografia Profissional",
                desc: "Fotos de alta qualidade que transmitem profissionalismo e fazem seu negócio se destacar da concorrência."
              },
              {
                icon: <Video className="w-6 h-6 text-blue-500" />,
                title: "Vídeos para Empresas",
                desc: "Produção de vídeos estratégicos que capturam atenção, contam sua história e convertem visualizações em vendas."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <a href="#contato" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:text-blue-700 mt-auto">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-24 bg-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">somos</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Somos especialistas em marketing digital focados em um único objetivo: trazer resultados reais para o seu negócio.
                </p>
                <p>
                  Com anos de experiência no mercado, entendemos que curtidas não pagam boletos. Por isso, nossa metodologia é baseada em conversão, unindo tráfego pago, conteúdo estratégico e otimização para transformar desconhecidos em clientes fiéis.
                </p>
                <p>
                  Se você busca uma parceria transparente, focada em crescimento e previsibilidade, você está no lugar certo.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-2xl rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Nossa Equipe" 
                className="relative rounded-3xl shadow-2xl object-cover w-full aspect-video lg:aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Quem contrata, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">recomenda</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "\"Thiago é sensacional, com visão sobre o mercado fotográfico (no meu caso), estuda cada caso individualizado, direciona, encontra soluções, incentiva e cuida do nosso negócio como se fosse dele. Foi a melhor escolha para alavancar meu negócio, super indico!\"",
                author: "Silvia Mello",
                role: "Fotógrafa"
              },
              {
                text: "\"Trabalhamos com a Tropa de Leads em dois canais nosso no Instagram e um no YouTube e temos tido excelente resultados.\"",
                author: "Diego Medina",
                role: "Marceneiro"
              },
              {
                text: "\"Equipe extremamente profissional, atenciosa e sempre pronta para oferecer o melhor!!\"",
                author: "Samuel Ramos",
                role: "Empresário"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Se você quer mais clientes, a hora é agora
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Não espere seus concorrentes tomarem ainda mais mercado. Clique abaixo e fale comigo agora.
          </p>
          <a 
            href="https://wa.me/5519983384993" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-400 transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">contato</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="https://wa.me/5519983384993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 bg-green-50 hover:border-green-300 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">WhatsApp</p>
                <p className="text-sm text-slate-500">(19) 98338-4993</p>
              </div>
            </a>

            <a href="https://wa.me/5519983384993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Telefone</p>
                <p className="text-sm text-slate-500">(19) 98338-4993</p>
              </div>
            </a>

            <a href="mailto:contato.medinaft@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">E-mail</p>
                <p className="text-sm text-slate-500">contato.medinaft@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Agência de Marketing Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
