// Idiomas do site e os textos fixos da interface (menu, botões, títulos).
// Para mudar um texto, edite aqui nos dois idiomas.

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const ui = {
  en: {
    role: "Senior Product Designer",
    nav: { home: "Home", cases: "Cases", about: "About", contact: "Contact" },
    home: {
      headline:
        "I design financial and operational products that turn complex processes into simple flows.",
      intro:
        "Senior Product Designer with 15+ years of experience across financial services, logistics and internal tools.",
      results: [
        { value: "Evidence over intuition", label: "Customer service data turned into a recurring input for product decisions" },
        { value: "Less rework", label: "Handover documentation that cuts back-and-forth between design and engineering" },
        { value: "Continuous discovery", label: "Research and validation as part of the squad routine, not a separate phase" },
      ],
      casesTitle: "Selected cases",
      allCases: "See all cases",
    },
    cases: {
      title: "Cases",
      intro:
        "Short versions of each project. Details are adapted for confidentiality; full versions are shared on request.",
      soon: "Coming soon",
      read: "Read case",
      back: "All cases",
      role: "Role",
      period: "Period",
      sector: "Sector",
      context: "Context",
      challenge: "Challenge",
      approach: "What I did",
      outcome: "Outcome",
      fullTitle: "Want the full process?",
      fullText:
        "The complete case covers research, decisions and prototypes. Because of confidentiality, I share it individually.",
      fullButton: "Request the full case",
      mailSubject: "Full case request",
    },
    about: {
      title: "About",
      paragraphs: [
        "I am a Senior Product Designer with more than 15 years of experience, the last six in consulting, working with banks, payment companies and logistics operations.",
        "My work combines research, information architecture and interface design. I am most useful where access to users is hard and decisions still need evidence.",
        "I also mentor designers in UX and product design.",
      ],
      areasTitle: "Areas",
      areas: ["Financial services", "Logistics", "Internal tools"],
      languagesTitle: "Languages",
      languages: ["Portuguese (native)", "English"],
    },
    footer: "Based in Brazil. Open to remote roles worldwide.",
    notFound: { title: "Page not found", back: "Back to home" },
  },
  pt: {
    role: "Product Designer Sênior",
    nav: { home: "Início", cases: "Cases", about: "Sobre", contact: "Contato" },
    home: {
      headline:
        "Desenho produtos financeiros e operacionais que transformam processos complexos em fluxos simples.",
      intro:
        "Product Designer Sênior com mais de 15 anos de experiência em serviços financeiros, logística e ferramentas internas.",
      results: [
        { value: "Evidência no lugar da intuição", label: "Dados de atendimento transformados em insumo recorrente para decisões de produto" },
        { value: "Menos retrabalho", label: "Documentação de handover que reduz idas e vindas entre design e engenharia" },
        { value: "Discovery contínuo", label: "Pesquisa e validação como rotina da squad, não como fase separada" },
      ],
      casesTitle: "Cases em destaque",
      allCases: "Ver todos os cases",
    },
    cases: {
      title: "Cases",
      intro:
        "Versões resumidas de cada projeto. Os detalhes foram adaptados por confidencialidade; as versões completas são compartilhadas sob solicitação.",
      soon: "Em breve",
      read: "Ler case",
      back: "Todos os cases",
      role: "Papel",
      period: "Período",
      sector: "Setor",
      context: "Contexto",
      challenge: "Desafio",
      approach: "O que eu fiz",
      outcome: "Resultado",
      fullTitle: "Quer ver o processo completo?",
      fullText:
        "O case completo traz pesquisa, decisões e protótipos. Por confidencialidade, compartilho individualmente.",
      fullButton: "Solicitar o case completo",
      mailSubject: "Solicitação de case completo",
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Sou Product Designer Sênior com mais de 15 anos de experiência, os últimos seis em consultoria, atuando com bancos, empresas de pagamentos e operações logísticas.",
        "Meu trabalho combina pesquisa, arquitetura da informação e design de interface. Contribuo mais onde o acesso aos usuários é difícil e as decisões ainda precisam de evidência.",
        "Também faço mentoria de designers em UX e design de produto.",
      ],
      areasTitle: "Áreas",
      areas: ["Serviços financeiros", "Logística", "Ferramentas internas"],
      languagesTitle: "Idiomas",
      languages: ["Português (nativo)", "Inglês"],
    },
    footer: "Baseada no Brasil. Aberta a vagas remotas no mundo todo.",
    notFound: { title: "Página não encontrada", back: "Voltar ao início" },
  },
} satisfies Record<Locale, unknown>;
