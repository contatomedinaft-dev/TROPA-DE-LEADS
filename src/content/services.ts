export type Service = {
  slug: string;
  name: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  problems: string[];
  benefits: string[];
  scope: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  differentials: string[];
  faq: { q: string; a: string }[];
  related: string[];
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    slug: "gestao-de-trafego-pago",
    name: "Gestão de tráfego pago",
    short: "Google Ads e Meta Ads para gerar contatos e orçamentos de quem já procura o que você vende.",
    seoTitle: "Gestão de Tráfego Pago para Empresas | Google Ads e Meta Ads",
    seoDescription:
      "Gestão de tráfego pago com Google Ads e Meta Ads: campanhas de geração de leads, remarketing e mensuração para empresas de Campinas e todo o Brasil.",
    h1: "Gestão de tráfego pago para empresas que querem contatos qualificados",
    intro:
      "Anúncio bem feito coloca sua empresa na frente de quem está procurando o que você vende. Planejamos, criamos e otimizamos campanhas no Google Ads e no Meta Ads com um objetivo comercial claro: gerar contatos e oportunidades, não apenas cliques.",
    problems: [
      "Você investe em anúncios, mas não sabe quais campanhas trazem contatos de verdade.",
      "Os cliques chegam, porém as mensagens e os orçamentos não.",
      "O dinheiro é gasto com públicos e palavras-chave que não têm intenção de compra.",
      "As campanhas foram criadas uma vez e nunca mais foram revisadas.",
    ],
    benefits: [
      "Campanhas alinhadas ao que a empresa realmente quer vender.",
      "Mensuração de contatos, formulários e cliques no WhatsApp.",
      "Decisões baseadas em dados, não em achismo.",
      "Orçamento direcionado para o que funciona e cortado do que não funciona.",
    ],
    scope: [
      { title: "Google Ads", text: "Campanhas de pesquisa para capturar quem busca o seu serviço no momento da decisão, além de outros formatos quando fazem sentido." },
      { title: "Meta Ads", text: "Anúncios no Instagram e no Facebook para gerar mensagens, leads e reconhecimento de marca." },
      { title: "Geração de leads", text: "Anúncios, páginas e formulários pensados para transformar atenção em contato comercial." },
      { title: "Remarketing", text: "Reabordagem de quem já visitou o site ou interagiu com a marca." },
      { title: "Mensuração", text: "Configuração de conversões e acompanhamento dos resultados por campanha." },
      { title: "Otimização contínua", text: "Revisão periódica de públicos, criativos, palavras-chave e orçamento." },
    ],
    steps: [
      { title: "Diagnóstico", text: "Entendemos o negócio, o público, a concorrência e o histórico de anúncios." },
      { title: "Estratégia", text: "Definimos canais, objetivos, estrutura de campanhas e métricas de acompanhamento." },
      { title: "Implementação", text: "Criamos as campanhas, os anúncios e a mensuração de conversões." },
      { title: "Otimização", text: "Analisamos os dados, ajustamos e testamos novas versões continuamente." },
    ],
    differentials: [
      "Integração com site, Google Meu Negócio, fotografia e vídeo para os anúncios.",
      "Foco em contatos e oportunidades comerciais, não em métricas de vaidade.",
      "Comunicação direta, com explicação clara do que está sendo feito.",
    ],
    faq: [
      { q: "Google Ads ou Meta Ads: qual é melhor?", a: "Depende do negócio. O Google Ads atinge quem já está buscando a solução; o Meta Ads gera demanda e reconhecimento. Muitas vezes os dois se complementam, e o diagnóstico mostra a melhor combinação para o seu caso." },
      { q: "Quanto preciso investir em anúncios?", a: "O investimento depende do mercado, da região e do objetivo. Após o diagnóstico, indicamos uma faixa realista. Entre em contato para conversarmos sobre o seu cenário." },
      { q: "Vocês garantem resultados?", a: "Não prometemos números. Trabalhamos com método, mensuração e otimização para aumentar as chances de gerar oportunidades, mas o resultado depende de mercado, oferta e concorrência." },
      { q: "Preciso ter um site?", a: "Ajuda muito, porque o site recebe e converte o tráfego. Também é possível começar com uma página de captura ou direcionando para o WhatsApp." },
    ],
    related: ["criacao-de-sites", "google-meu-negocio", "consultoria-de-marketing-digital"],
    whatsappMessage: "Olá! Quero saber mais sobre gestão de tráfego pago para minha empresa.",
  },
  {
    slug: "gestao-de-redes-sociais",
    name: "Gestão de redes sociais",
    short: "Planejamento, conteúdo e posicionamento no Instagram e no Facebook para transmitir profissionalismo.",
    seoTitle: "Gestão de Redes Sociais para Empresas | Instagram e Facebook",
    seoDescription:
      "Gestão de redes sociais com planejamento estratégico, calendário editorial, roteiros e Reels para empresas que querem transformar seguidores em oportunidades.",
    h1: "Gestão de redes sociais com estratégia e foco comercial",
    intro:
      "Rede social sem estratégia vira apenas um mural de posts. Planejamos o posicionamento, o conteúdo e a rotina de publicação para que o perfil da sua empresa transmita profissionalismo e conduza o público até o contato.",
    problems: [
      "O Instagram da empresa não transmite o nível do trabalho que ela entrega.",
      "Os posts são irregulares e sem objetivo definido.",
      "Há seguidores e curtidas, mas poucas mensagens e orçamentos.",
      "Falta tempo ou direção para criar conteúdo com consistência.",
    ],
    benefits: [
      "Perfil com identidade visual coerente e comunicação clara.",
      "Rotina editorial organizada, sem improviso.",
      "Conteúdo que educa, demonstra o trabalho e leva ao contato.",
      "Mais autoridade diante de clientes e concorrentes.",
    ],
    scope: [
      { title: "Planejamento estratégico", text: "Definição de posicionamento, público, linhas de conteúdo e objetivos do perfil." },
      { title: "Calendário editorial", text: "Organização das publicações por tema, formato e objetivo." },
      { title: "Criação de conteúdo", text: "Artes, legendas e carrosséis alinhados à identidade da marca." },
      { title: "Roteiros e Reels", text: "Roteiros de vídeo curto e apoio na produção de Reels." },
      { title: "Identidade visual", text: "Padronização visual do perfil: destaques, capas e linguagem." },
      { title: "Gestão de Instagram e Facebook", text: "Publicação e acompanhamento dos canais da empresa." },
    ],
    steps: [
      { title: "Análise do perfil", text: "Avaliamos o perfil atual, o público e os concorrentes." },
      { title: "Estratégia de conteúdo", text: "Definimos pilares de conteúdo e a linha editorial." },
      { title: "Produção", text: "Criamos o conteúdo e, quando necessário, planejamos a captação de fotos e vídeos." },
      { title: "Publicação e análise", text: "Publicamos, medimos o desempenho e ajustamos o plano." },
    ],
    differentials: [
      "Fotografia e vídeo profissionais dentro do mesmo planejamento.",
      "Conteúdo pensado para gerar contato comercial, não só engajamento.",
      "Integração com anúncios e com o Google para fortalecer a marca.",
    ],
    faq: [
      { q: "Vocês produzem as fotos e os vídeos?", a: "Sim. Fotografia profissional e produção de vídeos fazem parte das nossas soluções e podem ser integradas ao planejamento de conteúdo." },
      { q: "Com que frequência os posts são publicados?", a: "A frequência é definida no planejamento, de acordo com o objetivo, o segmento e a capacidade de produção de conteúdo." },
      { q: "Rede social substitui o site e o Google?", a: "Não. Os canais se complementam: a rede social constrói relacionamento, enquanto o Google captura quem já está procurando o serviço." },
    ],
    related: ["producao-de-videos", "fotografia-profissional", "gestao-de-trafego-pago"],
    whatsappMessage: "Olá! Quero saber mais sobre gestão de redes sociais para minha empresa.",
  },
  {
    slug: "google-meu-negocio",
    name: "Google Meu Negócio",
    short: "Otimização do Perfil da Empresa no Google para aparecer melhor nas buscas locais e no Maps.",
    seoTitle: "Google Meu Negócio: Otimização do Perfil da Empresa no Google",
    seoDescription:
      "Otimização do Google Meu Negócio (Perfil da Empresa no Google) e SEO local para aparecer melhor no Google Maps e atrair clientes da sua região.",
    h1: "Otimização do Google Meu Negócio para atrair clientes da sua região",
    intro:
      "Quando alguém procura um serviço perto de casa, a primeira coisa que vê é o Perfil da Empresa no Google. Uma ficha bem estruturada, com informações corretas, fotos profissionais e avaliações bem gerenciadas, aumenta a chance de a sua empresa ser encontrada e escolhida.",
    problems: [
      "A empresa não aparece no Google Maps quando clientes buscam o serviço.",
      "A ficha tem informações incompletas, desatualizadas ou sem fotos de qualidade.",
      "As avaliações ficam sem resposta ou são mal aproveitadas.",
      "A concorrência da região aparece antes nas buscas locais.",
    ],
    benefits: [
      "Perfil completo, coerente e atrativo.",
      "Mais chances de ser encontrado em buscas locais.",
      "Reputação mais forte com gestão profissional das avaliações.",
      "Mais ligações, rotas e mensagens vindas direto do Google.",
    ],
    scope: [
      { title: "Otimização do perfil", text: "Revisão de categorias, descrição, serviços, horários e demais informações comerciais." },
      { title: "SEO local", text: "Estratégias para fortalecer a presença da empresa em buscas da região." },
      { title: "Posicionamento no Maps", text: "Ações para melhorar a visibilidade nas pesquisas feitas no Google Maps." },
      { title: "Gestão de avaliações", text: "Orientação para solicitar, responder e usar as avaliações a favor da marca." },
      { title: "Publicações", text: "Postagens no perfil para manter a ficha ativa e informativa." },
      { title: "Fotografias profissionais", text: "Imagens que mostram o negócio com qualidade e transmitem confiança." },
    ],
    steps: [
      { title: "Auditoria da ficha", text: "Analisamos o perfil atual e comparamos com concorrentes da região." },
      { title: "Otimização", text: "Ajustamos informações, categorias, serviços, fotos e descrição." },
      { title: "Rotina de atualização", text: "Mantemos publicações e respostas de avaliações em dia." },
      { title: "Acompanhamento", text: "Observamos as interações e ajustamos a estratégia." },
    ],
    differentials: [
      "Fotografia profissional integrada à otimização do perfil.",
      "Conhecimento de SEO local e de como o Google avalia relevância, distância e destaque.",
      "Conexão com site e anúncios para ampliar o alcance.",
    ],
    faq: [
      { q: "Google Meu Negócio funciona para pequenas empresas?", a: "Sim, e é especialmente importante para quem depende de clientes da própria região, como oficinas, clínicas, marcenarias e lojas." },
      { q: "Vocês garantem o primeiro lugar no Maps?", a: "Não. O Google define a classificação com base em relevância, distância e destaque. Trabalhamos para fortalecer cada um desses fatores, mas não prometemos posição." },
      { q: "Preciso de um endereço físico?", a: "Depende do tipo de negócio e das regras do Google para perfis de empresas. Avaliamos o seu caso no diagnóstico." },
    ],
    related: ["seo-e-posicionamento-organico", "fotografia-profissional", "criacao-de-sites"],
    whatsappMessage: "Olá! Quero melhorar a presença da minha empresa no Google (Google Meu Negócio).",
  },
  {
    slug: "seo-e-posicionamento-organico",
    name: "SEO e posicionamento orgânico",
    short: "Estrutura, conteúdo e autoridade para a sua empresa ser encontrada no Google sem depender só de anúncios.",
    seoTitle: "SEO e Posicionamento Orgânico no Google para Empresas",
    seoDescription:
      "SEO técnico, SEO local, pesquisa de palavras-chave e conteúdo estratégico para a sua empresa aparecer no Google e atrair clientes de forma contínua.",
    h1: "SEO para sua empresa ser encontrada no Google",
    intro:
      "SEO é construir, ao longo do tempo, um site e um conteúdo que o Google entenda e recomende para quem procura o que você oferece. Diferente do anúncio, o trabalho de SEO acumula valor, mas exige estratégia, consistência e paciência.",
    problems: [
      "O site existe, mas quase ninguém chega a ele pelo Google.",
      "Você não sabe quais termos os clientes realmente pesquisam.",
      "As páginas não têm estrutura, títulos ou conteúdo pensados para busca.",
      "A empresa depende totalmente de anúncios para ter visitas.",
    ],
    benefits: [
      "Tráfego qualificado vindo de buscas com intenção real.",
      "Base sólida para o site crescer de forma orgânica.",
      "Conteúdo que gera autoridade e conduz ao contato.",
      "Menor dependência de anúncios no longo prazo.",
    ],
    scope: [
      { title: "SEO técnico", text: "Estrutura, velocidade, indexação, dados estruturados e boas práticas para o Google rastrear o site." },
      { title: "SEO local", text: "Otimização para buscas da região, integrada ao Perfil da Empresa no Google." },
      { title: "Pesquisa de palavras-chave", text: "Mapeamento do que o público pesquisa e da intenção de cada busca." },
      { title: "Otimização de páginas", text: "Títulos, descrições, headings e conteúdo alinhados ao que cada página deve resolver." },
      { title: "Conteúdo estratégico", text: "Artigos organizados em temas, sem canibalização entre páginas." },
      { title: "Links internos e autoridade", text: "Estrutura que conecta serviços, segmentos e artigos para reforçar a autoridade no assunto." },
    ],
    steps: [
      { title: "Auditoria", text: "Verificamos indexação, estrutura técnica, conteúdo atual e concorrência." },
      { title: "Planejamento de palavras-chave", text: "Organizamos os temas por intenção de busca e por página." },
      { title: "Execução", text: "Otimizamos páginas e produzimos conteúdo original." },
      { title: "Monitoramento", text: "Acompanhamos impressões, cliques e indexação no Google Search Console." },
    ],
    differentials: [
      "SEO integrado a site, Google Meu Negócio e conteúdo.",
      "Planejamento por clusters temáticos, evitando páginas concorrendo entre si.",
      "Transparência: o Google decide o que indexa e como classifica, e não há garantia de posição.",
    ],
    faq: [
      { q: "Quanto tempo leva para ver resultados em SEO?", a: "SEO é um trabalho de médio e longo prazo. O tempo varia conforme concorrência, histórico do site e consistência das ações." },
      { q: "Vocês garantem estar na primeira página?", a: "Não. Nenhum profissional sério pode garantir isso. Trabalhamos com método e acompanhamento para aumentar a visibilidade." },
      { q: "SEO substitui anúncios?", a: "Não necessariamente. Anúncios trazem resultado rápido; SEO constrói um canal que se fortalece com o tempo. Os dois podem andar juntos." },
    ],
    related: ["google-meu-negocio", "criacao-de-sites", "gestao-de-trafego-pago"],
    whatsappMessage: "Olá! Quero saber mais sobre SEO para o site da minha empresa.",
  },
  {
    slug: "criacao-de-sites",
    name: "Criação de sites profissionais",
    short: "Sites e landing pages rápidos, otimizados para o Google e preparados para gerar contatos.",
    seoTitle: "Criação de Sites Profissionais e Landing Pages | Tropa de Leads",
    seoDescription:
      "Criação de sites institucionais e landing pages responsivos, rápidos e otimizados para SEO, com WhatsApp, formulários e analytics integrados.",
    h1: "Criação de sites profissionais que geram contatos",
    intro:
      "O site é o ponto de encontro entre o que a empresa faz e o cliente que precisa dela. Criamos sites e landing pages rápidos, responsivos e estruturados para o Google, com caminhos claros até o WhatsApp e o formulário de contato.",
    problems: [
      "O site é lento, desatualizado ou não funciona bem no celular.",
      "As páginas não explicam bem o serviço e não conduzem ao contato.",
      "O site não é encontrado no Google.",
      "Não é possível medir quantos contatos o site realmente gera.",
    ],
    benefits: [
      "Presença profissional que transmite confiança.",
      "Estrutura pensada para SEO desde o início.",
      "Experiência rápida e confortável no celular.",
      "Mensuração de cliques no WhatsApp e envios de formulário.",
    ],
    scope: [
      { title: "Sites institucionais", text: "Apresentação completa da empresa, dos serviços e dos diferenciais." },
      { title: "Landing pages", text: "Páginas focadas em uma oferta ou campanha específica." },
      { title: "Sites comerciais", text: "Estruturas com várias páginas de serviço e conteúdo para atrair buscas." },
      { title: "Integração com WhatsApp", text: "Botões e mensagens contextualizadas por página ou serviço." },
      { title: "Formulários", text: "Captação de contatos com poucos campos e foco em conversão." },
      { title: "Analytics e conversões", text: "Configuração de Google Analytics, Search Console e eventos de conversão." },
    ],
    steps: [
      { title: "Briefing e estrutura", text: "Definimos objetivos, páginas, conteúdo e caminhos de conversão." },
      { title: "Design", text: "Criamos um visual profissional alinhado à identidade da marca." },
      { title: "Desenvolvimento", text: "Construímos o site com foco em performance, segurança e SEO técnico." },
      { title: "Publicação e acompanhamento", text: "Colocamos no ar, configuramos a mensuração e acompanhamos os dados." },
    ],
    differentials: [
      "Site, SEO, anúncios, fotografia e vídeo conversando entre si.",
      "Tecnologia moderna, com foco em velocidade e Core Web Vitals.",
      "Estrutura pronta para crescer com blog e novas páginas.",
    ],
    faq: [
      { q: "O site será otimizado para o Google?", a: "Sim. A estrutura, os metadados, a velocidade e os dados estruturados são pensados desde o início. A posição no Google, porém, não pode ser garantida." },
      { q: "Consigo atualizar o conteúdo depois?", a: "Conversamos sobre a melhor forma de manutenção no planejamento, de acordo com o tipo de site." },
      { q: "Vocês criam só landing pages?", a: "Também. A solução depende do objetivo: uma landing page para uma campanha ou um site completo para a presença da empresa." },
    ],
    related: ["seo-e-posicionamento-organico", "gestao-de-trafego-pago", "fotografia-profissional"],
    whatsappMessage: "Olá! Quero criar ou melhorar o site da minha empresa.",
  },
  {
    slug: "fotografia-profissional",
    name: "Fotografia profissional",
    short: "Imagens corporativas, comerciais e de produtos para site, redes sociais e Google.",
    seoTitle: "Fotografia Profissional para Empresas | Corporativa e Comercial",
    seoDescription:
      "Fotografia corporativa, comercial, de produtos e retratos profissionais para empresas, site, redes sociais e Perfil da Empresa no Google.",
    h1: "Fotografia profissional para empresas que querem se destacar",
    intro:
      "Boas imagens mudam a percepção de uma marca. Produzimos fotografias profissionais para empresas, que valorizam o trabalho, os produtos e as pessoas, e que podem ser usadas no site, nas redes sociais, em anúncios e no Google.",
    problems: [
      "As fotos usadas pela empresa são amadoras ou de banco de imagens.",
      "O trabalho é bom, mas as imagens não mostram isso.",
      "Falta um acervo próprio para site, redes e anúncios.",
      "A concorrência transmite mais profissionalismo visual.",
    ],
    benefits: [
      "Identidade visual própria, sem depender de imagens genéricas.",
      "Mais confiança do cliente antes mesmo do primeiro contato.",
      "Material reaproveitável em vários canais.",
      "Perfil do Google e redes sociais mais atrativos.",
    ],
    scope: [
      { title: "Fotografia corporativa", text: "Registro da empresa, da equipe e do ambiente de trabalho." },
      { title: "Retratos profissionais", text: "Retratos para sites, perfis e materiais de apresentação." },
      { title: "Fotografia de produtos", text: "Imagens que destacam detalhes, acabamento e qualidade." },
      { title: "Fotografia comercial", text: "Imagens para campanhas, anúncios e materiais de divulgação." },
      { title: "Fotos para site e redes", text: "Conteúdo pensado para os formatos e as necessidades de cada canal." },
      { title: "Acervo próprio de imagens", text: "Banco de imagens exclusivo da marca para uso contínuo." },
    ],
    steps: [
      { title: "Planejamento", text: "Definimos objetivo, uso das imagens e roteiro de fotos." },
      { title: "Captação", text: "Realizamos a sessão no local ou em ambiente combinado." },
      { title: "Tratamento", text: "Selecionamos e tratamos as imagens com padrão profissional." },
      { title: "Entrega", text: "Entregamos os arquivos organizados e otimizados para cada uso." },
    ],
    differentials: [
      "Fotografia pensada para vender, não só para decorar.",
      "Integração direta com site, Google Meu Negócio, redes e anúncios.",
      "Experiência em registrar projetos e produtos reais.",
    ],
    faq: [
      { q: "A sessão é feita na minha empresa?", a: "Normalmente sim, para mostrar o ambiente e o trabalho real. O formato é combinado no planejamento." },
      { q: "As fotos podem ser usadas no Google e nas redes?", a: "Sim. As imagens são planejadas e entregues para site, redes sociais, anúncios e Perfil da Empresa no Google." },
      { q: "Vocês fotografam produtos?", a: "Sim, incluindo imagens de produtos e projetos que valorizam acabamento e detalhes." },
    ],
    related: ["producao-de-videos", "google-meu-negocio", "gestao-de-redes-sociais"],
    whatsappMessage: "Olá! Quero saber mais sobre fotografia profissional para minha empresa.",
  },
  {
    slug: "producao-de-videos",
    name: "Produção de vídeos",
    short: "Vídeos institucionais, comerciais e Reels para mostrar sua empresa em movimento.",
    seoTitle: "Produção de Vídeos para Empresas | Institucionais, Reels e Anúncios",
    seoDescription:
      "Produção de vídeos institucionais, comerciais, Reels e vídeos para anúncios, com roteiro, captação profissional e planejamento para empresas.",
    h1: "Produção de vídeos para empresas que querem chamar atenção",
    intro:
      "O vídeo é um dos formatos que mais prende a atenção. Planejamos, roteirizamos e produzimos vídeos para apresentar a empresa, demonstrar o trabalho e apoiar campanhas nas redes sociais e nos anúncios.",
    problems: [
      "A empresa não tem vídeos de qualidade para mostrar o que faz.",
      "O conteúdo em vídeo é irregular e sem direção.",
      "Os anúncios usam imagens fracas e não prendem a atenção.",
      "Falta roteiro e planejamento antes de gravar.",
    ],
    benefits: [
      "Comunicação mais clara e envolvente.",
      "Conteúdo reaproveitável em redes, site e anúncios.",
      "Mais profissionalismo e confiança na marca.",
      "Maior potencial de alcance nas redes sociais.",
    ],
    scope: [
      { title: "Vídeos institucionais", text: "Apresentação da empresa, da história e do jeito de trabalhar." },
      { title: "Vídeos comerciais", text: "Vídeos focados em serviços, produtos e ofertas." },
      { title: "Reels e conteúdo social", text: "Vídeos curtos pensados para Instagram e outras redes." },
      { title: "Vídeos para anúncios", text: "Criativos em vídeo para campanhas de Meta Ads e Google Ads." },
      { title: "Captação profissional", text: "Gravação com equipamento e cuidado de imagem e som." },
      { title: "Roteiro e planejamento", text: "Definição de mensagem, estrutura e cenas antes da gravação." },
    ],
    steps: [
      { title: "Planejamento", text: "Definimos objetivo, público, formato e canais de uso." },
      { title: "Roteiro", text: "Criamos a estrutura da mensagem e o plano de gravação." },
      { title: "Captação", text: "Gravamos as imagens e o áudio no local combinado." },
      { title: "Edição e entrega", text: "Editamos e entregamos nos formatos adequados a cada canal." },
    ],
    differentials: [
      "Vídeo conectado à estratégia de redes sociais e de anúncios.",
      "Planejamento antes da câmera ligada, para evitar retrabalho.",
      "Fotografia e vídeo captados de forma integrada, quando faz sentido.",
    ],
    faq: [
      { q: "Vocês fazem o roteiro?", a: "Sim. O roteiro e o planejamento fazem parte do processo para que o vídeo tenha um objetivo claro." },
      { q: "O vídeo pode ser usado em anúncios?", a: "Sim. Podemos produzir versões pensadas para campanhas no Meta Ads e no Google Ads." },
      { q: "Quanto tempo dura um vídeo?", a: "Depende do objetivo e do canal. Reels costumam ser curtos; vídeos institucionais podem ser mais longos." },
    ],
    related: ["gestao-de-redes-sociais", "fotografia-profissional", "gestao-de-trafego-pago"],
    whatsappMessage: "Olá! Quero saber mais sobre produção de vídeos para minha empresa.",
  },
  {
    slug: "consultoria-de-marketing-digital",
    name: "Consultoria de marketing digital",
    short: "Diagnóstico, planejamento e orientação estratégica para organizar a presença digital da empresa.",
    seoTitle: "Consultoria de Marketing Digital para Empresas | Tropa de Leads",
    seoDescription:
      "Consultoria de marketing digital com diagnóstico da presença online, planejamento estratégico, análise de oportunidades e acompanhamento para empresas.",
    h1: "Consultoria de marketing digital para decidir com clareza",
    intro:
      "Nem toda empresa precisa fazer tudo ao mesmo tempo. A consultoria ajuda a entender onde a sua presença digital está, o que está faltando e quais ações priorizar, com um plano realista para o momento do negócio.",
    problems: [
      "Você não sabe por onde começar no marketing digital.",
      "Investe em várias frentes sem saber o que dá retorno.",
      "Contratou serviços sem uma estratégia que conecte tudo.",
      "Precisa de uma visão externa para tomar decisões melhores.",
    ],
    benefits: [
      "Visão clara da presença digital atual.",
      "Prioridades definidas, em vez de ações soltas.",
      "Plano de ação alinhado ao momento e aos objetivos do negócio.",
      "Orientação para equipe própria ou para outros fornecedores.",
    ],
    scope: [
      { title: "Diagnóstico", text: "Análise de site, Google, redes sociais, anúncios e concorrência." },
      { title: "Planejamento estratégico", text: "Definição de objetivos, canais e prioridades." },
      { title: "Análise de oportunidades", text: "Identificação de brechas e frentes com potencial de crescimento." },
      { title: "Orientação estratégica", text: "Direcionamento para execução, interna ou com parceiros." },
      { title: "Acompanhamento", text: "Revisão periódica do plano e dos resultados." },
    ],
    steps: [
      { title: "Conversa inicial", text: "Entendemos o negócio, o mercado e os objetivos." },
      { title: "Diagnóstico", text: "Analisamos a presença digital e a concorrência." },
      { title: "Plano de ação", text: "Apresentamos prioridades e próximos passos." },
      { title: "Acompanhamento", text: "Revisamos o plano e ajustamos o rumo." },
    ],
    differentials: [
      "Visão integrada de Google, anúncios, conteúdo, site e imagem.",
      "Recomendações realistas, sem empurrar serviços desnecessários.",
      "Experiência prática em marketing, fotografia, conteúdo e tráfego pago.",
    ],
    faq: [
      { q: "A consultoria inclui a execução?", a: "Pode incluir ou não. Podemos orientar a sua equipe ou assumir a execução das frentes que fizerem sentido." },
      { q: "Para quem a consultoria é indicada?", a: "Para empresas que querem organizar a estratégia digital antes de investir, ou que já investem e não enxergam retorno." },
      { q: "Como funciona o primeiro passo?", a: "Você entra em contato, conversamos sobre o seu cenário e definimos o formato mais adequado de diagnóstico." },
    ],
    related: ["gestao-de-trafego-pago", "seo-e-posicionamento-organico", "criacao-de-sites"],
    whatsappMessage: "Olá! Quero uma consultoria de marketing digital para minha empresa.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
