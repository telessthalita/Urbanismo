import React from 'react';
import { Leaf, Map, Sun, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import alfamaLogo from "figma:asset/bfd741d9166504d5621837cb581513e05f08eb9c.png";

export const CONTENT = {
  // GLOBAL
  companyName: "URBANISMO",
  companyNameHighlight: ".", // The dot or part to color differently

  // HERO SECTION
  hero: {
    title: "INOVAÇÃO E",
    titleHighlight: "ELEGÂNCIA URBANA", // Italic & Colored
    subtitle: "Transformamos espaços em experiências de vida excepcionais com planejamento sustentável e design contemporâneo.",
    ctaPrimaryLabel: "Conheça Nossos Projetos",
    ctaPrimaryLink: "#projects",
    ctaSecondaryLabel: "Fale Com a Gente",
    ctaSecondaryLink: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1751698186759-5bac83376c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGxhbmRzY2FwZSUyMHN1bnNldHxlbnwxfHx8fDE3NjQ1OTg5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Vista panorâmica de arquitetura urbana moderna ao pôr do sol"
  },

  // FEATURES SECTION
  features: {
    title: "Nossos Diferenciais",
    items: [
      {
        icon: <Leaf className="w-10 h-10 text-[#B38B59]" />,
        title: "Sustentabilidade",
        description: "Projetos que respeitam o meio ambiente, integrando natureza e arquitetura de forma harmônica e responsável."
      },
      {
        icon: <Map className="w-10 h-10 text-[#B38B59]" />,
        title: "Planejamento Urbano",
        description: "Desenvolvimento inteligente das cidades, focando em mobilidade, acessibilidade e otimização dos espaços."
      },
      {
        icon: <Sun className="w-10 h-10 text-[#B38B59]" />,
        title: "Qualidade de Vida",
        description: "Espaços pensados para o bem-estar, segurança e convívio social, elevando o padrão de moradia."
      }
    ]
  },

  // PROJECTS SECTION
  projects: {
    title: "Projetos",
    subtitle: "Conheça nossos empreendimentos que estão redefinindo o conceito de morar bem.",
    items: [
      {
        id: 1,
        title: "Eco Viver",
        description: "Condomínio sustentável com ampla área verde.",
        image: "https://images.unsplash.com/photo-1746047226421-f7ecb2591bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBhcmslMjBzdXN0YWluYWJsZSUyMGNpdHklMjBncmVlbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQ1OTg5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        location: "Vila Madalena, São Paulo",
        size: "120m² - 240m²",
        status: "Em Construção",
        features: ["Energia Solar", "Reuso de Água", "Horta Comunitária", "Coworking"],
        longDescription: "O Eco Viver redefine o conceito de moradia urbana integrando sustentabilidade de ponta com design sofisticado. Cada unidade foi projetada para maximizar a iluminação natural e ventilação cruzada."
      },
      {
        id: 2,
        title: "Reserva Imperial",
        description: "Luxo e privacidade em localização privilegiada.",
        image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc2NDU5ODk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        location: "Jardins, São Paulo",
        size: "280m² - 450m²",
        status: "Lançamento",
        features: ["Segurança 24h", "Spa Privativo", "Automação Residencial", "Heliponto"],
        longDescription: "Situado em um dos endereços mais cobiçados da cidade, o Reserva Imperial oferece exclusividade absoluta. Com apenas 12 unidades, garante privacidade e um serviço de concierge personalizado."
      },
      {
        id: 3,
        title: "Urban Heights",
        description: "Design contemporâneo no coração da cidade.",
        image: "https://images.unsplash.com/photo-1587771518560-d4e96de71240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjQ1OTg5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        location: "Itaim Bibi, São Paulo",
        size: "80m² - 150m²",
        status: "Pronto para Morar",
        features: ["Rooftop Lounge", "Academia High-Tech", "Piscina Infinita", "Smart Lockers"],
        longDescription: "Urban Heights é a escolha perfeita para quem vive o ritmo da cidade. Arquitetura arrojada, localização estratégica próximo aos centros financeiros e uma infraestrutura de lazer completa no rooftop."
      },
      {
        id: 4,
        title: "Skyline Penthouse",
        description: "Vistas deslumbrantes e acabamentos de altíssimo padrão.",
        image: "https://images.unsplash.com/photo-1616611213095-58abb651f70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMG5pZ2h0fGVufDF8fHx8MTc2NDY5NzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        location: "Brooklyn, Nova York (Inspirado)",
        size: "300m² - 600m²",
        status: "Últimas Unidades",
        features: ["Vista 360º", "Pé Direito Duplo", "Adega Climatizada", "Cinema Privativo"],
        longDescription: "Uma obra-prima suspensa no céu. O Skyline Penthouse oferece vistas panorâmicas inigualáveis e interiores assinados por designers renomados, criando uma atmosfera de sofisticação pura."
      },
      {
        id: 5,
        title: "Horizon Tower",
        description: "Tecnologia e sustentabilidade em cada detalhe.",
        image: "https://images.unsplash.com/photo-1760406852438-9c0de6437dd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGZhY2FkZSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDY5NzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        location: "Berrini, São Paulo",
        size: "100m² - 200m²",
        status: "Pré-Lançamento",
        features: ["Certificação LEED", "Carregador EV", "Vidros Termoacústicos", "Gestão via App"],
        longDescription: "O futuro da moradia corporativa e residencial. Horizon Tower integra tecnologias smart building para reduzir custos operacionais e impacto ambiental, sem abrir mão do conforto premium."
      },
      {
        id: 6,
        title: "Garden Lofts",
        description: "O equilíbrio perfeito entre natureza e vida urbana.",
        image: "https://images.unsplash.com/photo-1758193431353-87812fbff5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdhcmRlbiUyMHJvb2Z0b3AlMjBoaWdoJTIwZW5kfGVufDF8fHx8MTc2NDY5NzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        location: "Pinheiros, São Paulo",
        size: "70m² - 110m²",
        status: "Em Obras",
        features: ["Varanda Gourmet", "Paisagismo Nativo", "Pet Place", "Bike Share"],
        longDescription: "Inspirado nos lofts industriais, mas com o frescor de um jardim vertical. Garden Lofts traz plantas flexíveis e áreas comuns repletas de verde para quem busca refúgio na metrópole."
      }
    ]
  },

  // ABOUT SECTION
  about: {
    tagline: "Nossa História",
    titlePrefix: "Construindo o futuro com ",
    titleHighlight: "excelência",
    titleSuffix: " e propósito.",
    description1: "Desde nossa fundação, buscamos não apenas construir edifícios, mas criar ecossistemas onde a vida possa prosperar. Acreditamos que o urbanismo deve servir às pessoas, integrando funcionalidade, estética e respeito ao meio ambiente.",
    description2: "Cada projeto é tratado como uma obra de arte única, desenhada meticulosamente para atender aos desejos mais exigentes e superar as expectativas de qualidade de vida.",
    highlights: [
      "Mais de 15 anos de experiência no mercado",
      "Projetos premiados nacionalmente",
      "Compromisso com sustentabilidade ambiental",
      "Equipe de arquitetos renomados"
    ],
    image: "https://images.unsplash.com/photo-1760450913032-8462c3e7b3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJhbCUyMGJ1aWxkaW5nJTIwd2hpdGUlMjBjb25jcmV0ZXxlbnwxfHx8fDE3NjQ1OTg5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Sobre a Urbanismo"
  },

  // CONTACT SECTION
  contact: {
    tagline: "Entre em Contato",
    title: "Fale Conosco",
    description: "Estamos prontos para atender você. Preencha o formulário abaixo e nossa equipe entrará em contato em breve.",
    info: {
      address: {
        label: "Endereço",
        value: ["Av. Paulista, 1000 - Bela Vista", "São Paulo - SP, 01310-100"]
      },
      email: {
        label: "E-mail",
        value: "contato@urbanismo.com.br"
      },
      phone: {
        label: "Telefone",
        value: "+55 (11) 99999-9999"
      }
    }
  },

  // FOOTER SECTION
  footer: {
    description: "Desenvolvendo projetos que unem sofisticação, sustentabilidade e qualidade de vida para você e sua família.",
    menuTitle: "Menu",
    contactTitle: "Contato",
    socials: [
      { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
      { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
      { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" }
    ],
    menuItems: [
      { label: "Início", href: "#hero" },
      { label: "Projetos", href: "#projects" },
      { label: "Sobre Nós", href: "#about" },
      { label: "Contato", href: "#contact" }
    ],
    copyright: "Urbanismo Empreendimentos. Todos os direitos reservados.",
    developer: {
      name: "AlfamaWeb",
      url: "https://alfamaweb.com.br",
      logo: alfamaLogo
    }
  }
};
