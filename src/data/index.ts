export const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Consórcios", href: "#consorcios" },
  { label: "Galeria", href: "#galeria" },
  { label: "Resultados", href: "#numeros" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const timeline = [
  {
    year: "2023",
    title: "Fundação",
    description:
      "A Brabo Consórcios nasceu com a missão de transformar o mercado de consórcios no Brasil. Com uma visão inovadora e foco total no cliente, iniciamos nossas operações com parcerias estratégicas.",
    image: "/images/gallery/events/placeholder.jpg",
  },
  {
    year: "2024",
    title: "Expansão e Crescimento",
    description:
      "Alcançamos a marca de R$ 60 milhões comercializados. Expandimos nossa atuação para todo o estado, consolidando-nos como referência em consórcios de alto padrão.",
    image: "/images/gallery/events/placeholder.jpg",
  },
  {
    year: "2025",
    title: "Liderança de Mercado",
    description:
      "Nos tornamos referência nacional em consórcios premium. Milhares de clientes realizados e parcerias com as melhores administradoras do país.",
    image: "/images/gallery/events/placeholder.jpg",
  },
];

export const galleryFilters = [
  { label: "Todos", value: "all" },
  { label: "Clientes", value: "clients" },
  { label: "Entregas", value: "deliveries" },
  { label: "Eventos", value: "events" },
  { label: "Conquistas", value: "achievements" },
  { label: "Vídeos", value: "videos" },
];

export const galleryItems = [
  { id: 1, src: "/images/gallery/clients/placeholder.jpg", alt: "Cliente Brabo", category: "clients", width: 600, height: 800 },
  { id: 2, src: "/images/gallery/deliveries/placeholder.jpg", alt: "Entrega Brabo", category: "deliveries", width: 800, height: 600 },
  { id: 3, src: "/images/gallery/events/placeholder.jpg", alt: "Evento Brabo", category: "events", width: 800, height: 800 },
  { id: 4, src: "/images/gallery/achievements/placeholder.jpg", alt: "Conquista Brabo", category: "achievements", width: 600, height: 600 },
  { id: 5, src: "/images/gallery/clients/placeholder.jpg", alt: "Cliente Brabo 2", category: "clients", width: 800, height: 600 },
  { id: 6, src: "/images/gallery/deliveries/placeholder.jpg", alt: "Entrega Brabo 2", category: "deliveries", width: 600, height: 800 },
  { id: 7, src: "/images/gallery/events/placeholder.jpg", alt: "Evento Brabo 2", category: "events", width: 800, height: 800 },
  { id: 8, src: "/images/gallery/achievements/placeholder.jpg", alt: "Conquista Brabo 2", category: "achievements", width: 600, height: 600 },
  { id: 9, src: "/images/gallery/videos/placeholder.jpg", alt: "Vídeo Brabo", category: "videos", width: 800, height: 600 },
  { id: 10, src: "/images/gallery/clients/placeholder.jpg", alt: "Cliente Brabo 3", category: "clients", width: 600, height: 800 },
  { id: 11, src: "/images/gallery/deliveries/placeholder.jpg", alt: "Entrega Brabo 3", category: "deliveries", width: 800, height: 600 },
  { id: 12, src: "/images/gallery/events/placeholder.jpg", alt: "Evento Brabo 3", category: "events", width: 600, height: 800 },
];

export const consortiumCards = [
  {
    title: "Automóveis",
    description: "Realize o sonho do carro zero ou seminovo com parcelas que cabem no seu bolso. Planos flexíveis para todos os perfis.",
    icon: "Car",
    image: "/images/gallery/deliveries/placeholder.jpg",
  },
  {
    title: "Motos",
    description: "Sua moto nova está mais perto do que você imagina. Consórcio de motos com as melhores taxas do mercado.",
    icon: "Bike",
    image: "/images/gallery/deliveries/placeholder.jpg",
  },
  {
    title: "Imóveis",
    description: "Conquiste a casa própria ou invista em imóveis comerciais com planejamento seguro e condições especiais.",
    icon: "Building2",
    image: "/images/gallery/achievements/placeholder.jpg",
  },
  {
    title: "Pesados",
    description: "Soluções completas para caminhões, ônibus e máquinas pesadas. O parceiro ideal para o seu negócio crescer.",
    icon: "Truck",
    image: "/images/gallery/achievements/placeholder.jpg",
  },
];

export const numbers = [
  { label: "comercializados", value: 60, prefix: "R$ ", suffix: " mi", decimals: 0 },
  { label: "de experiência", value: 6, prefix: "", suffix: " anos", decimals: 0 },
  { label: "de clientes", value: 5, prefix: "Milhares", suffix: "+", decimals: 0, isString: true },
  { label: "contemplações", value: 10, prefix: "Diversas", suffix: "+", decimals: 0, isString: true },
];

export const differentials = [
  {
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Oferecemos acompanhamento dedicado do início à contemplação.",
    icon: "HeadphonesIcon",
  },
  {
    title: "Planejamento Financeiro",
    description: "Análise completa do seu perfil para encontrar o plano ideal com parcelas que cabem no seu orçamento.",
    icon: "PiggyBank",
  },
  {
    title: "Especialistas",
    description: "Equipe altamente qualificada com profundo conhecimento do mercado de consórcios.",
    icon: "Award",
  },
  {
    title: "Melhores Administradoras",
    description: "Parceria com as administradoras mais sólidas e bem avaliadas do mercado nacional.",
    icon: "ShieldCheck",
  },
  {
    title: "Sem Juros",
    description: "Consórcio sem juros! Apenas taxa de administração reduzida e total transparência.",
    icon: "Percent",
  },
  {
    title: "Acompanhamento Completo",
    description: "Suporte em todas as etapas: da contratação à contemplação e entrega do bem.",
    icon: "CheckCircle",
  },
];

export const testimonials = [
  {
    name: "Carlos Eduardo",
    city: "São Paulo, SP",
    rating: 5,
    comment: "Realizei o sonho do meu carro zero com a Brabo. Profissionalismo e transparência do início ao fim. Recomendo de olhos fechados!",
    image: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    name: "Ana Beatriz",
    city: "Rio de Janeiro, RJ",
    rating: 5,
    comment: "Melhor decisão que tomei foi contratar a Brabo. Foram muito pacientes e me ajudaram a escolher o plano perfeito para minha realidade.",
    image: "https://i.pravatar.cc/150?u=ana",
  },
  {
    name: "Fernando Oliveira",
    city: "Belo Horizonte, MG",
    rating: 5,
    comment: "Empresa séria e comprometida. Fui contemplado antes do previsto e o processo foi super tranquilo. Nota 1000!",
    image: "https://i.pravatar.cc/150?u=fernando",
  },
  {
    name: "Juliana Costa",
    city: "Curitiba, PR",
    rating: 5,
    comment: "Atendimento exemplar! A equipe Brabo me acompanhou em cada etapa e hoje estou realizando o sonho da casa própria.",
    image: "https://i.pravatar.cc/150?u=juliana",
  },
  {
    name: "Ricardo Santos",
    city: "Brasília, DF",
    rating: 5,
    comment: "Já tive experiências com outras empresas, mas a Brabo superou todas as expectativas. Confiança e resultado!",
    image: "https://i.pravatar.cc/150?u=ricardo",
  },
  {
    name: "Patrícia Lima",
    city: "Salvador, BA",
    rating: 5,
    comment: "Realizei o consórcio da minha moto dos sonhos. Processo rápido, fácil e com total suporte. Brabo é referência!",
    image: "https://i.pravatar.cc/150?u=patricia",
  },
];
