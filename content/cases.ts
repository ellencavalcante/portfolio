// Os cases do portfólio (versão pública, resumida).
// Cada case tem os mesmos campos em inglês (en) e português (pt).
// Para adicionar um case, copie um bloco inteiro e troque os textos.
// "published: false" mostra o case na lista como "Em breve", sem página.

import type { Locale } from "./i18n";

type CaseText = {
  title: string;
  summary: string;
  sector: string;
  role: string;
  period: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string;
};

export type Case = {
  slug: string; // aparece no endereço: /en/cases/<slug>
  category: "financial-services" | "logistics" | "internal-tools";
  published: boolean;
  text: Record<Locale, CaseText>;
};

const soon = (title: string, summary: string, sector: string): CaseText => ({
  title, summary, sector,
  role: "", period: "", context: "", challenge: "", approach: [], outcome: "",
});

export const cases: Case[] = [
  {
    slug: "instant-payments-home",
    category: "financial-services",
    published: true,
    text: {
      en: {
        title: "Redesigning the instant payments area at Midway",
        summary:
          "How customer service data replaced direct user research and guided a new home screen for Pix, Brazil's instant payment system.",
        sector: "Financial services",
        role: "Senior Product Designer",
        period: "Nov 2021 – Jan 2023",
        context:
          "Midway, the digital bank of the Riachuelo retail group, offered accounts, cards, loans and Pix in its mobile app. I worked in the squad responsible for the Pix area, balancing mandatory Central Bank requirements with improvements to the experience.",
        challenge:
          "Reaching customers for research was close to impossible, and no flow in the app was instrumented. Priorities came mostly from intuition, and a feature built that way had been discontinued after months of work.",
        approach: [
          "Turned the monthly contact center spreadsheet into a recurring Voice of the Customer report, tracking complaint categories over time instead of isolated totals.",
          "Used those findings to argue design decisions and help the product manager prioritise the backlog.",
          "Built a discovery framework with the design and product team: customer pain points, a benchmark of six competitors, and collaborative sessions with engineers and QA from the start.",
          "Redesigned the Pix home: a carousel that hid most options became a vertical list grouped by action, and the main Pix key moved to the home screen for easy sharing.",
        ],
        outcome:
          "The new home was the first change the team based on its own research. The report became a working tool for design and product, moving backlog decisions from intuition towards evidence.",
      },
      pt: {
        title: "Redesenhando a área de pagamentos instantâneos da Midway",
        summary:
          "Como dados de atendimento substituíram a pesquisa direta com usuários e guiaram uma nova home do Pix.",
        sector: "Serviços financeiros",
        role: "Product Designer Sênior",
        period: "Nov 2021 – Jan 2023",
        context:
          "A Midway, banco digital do grupo Riachuelo, oferecia conta, cartões, empréstimos e Pix no aplicativo. Atuei na squad responsável pela área Pix, equilibrando exigências obrigatórias do Banco Central com melhorias de experiência.",
        challenge:
          "Acessar clientes para pesquisa era quase impossível, e nenhum fluxo do aplicativo era tagueado. As prioridades vinham principalmente da intuição, e uma funcionalidade criada assim foi descontinuada depois de meses de trabalho.",
        approach: [
          "Transformei a planilha mensal da central de atendimento em um relatório recorrente de Voz do Cliente, acompanhando categorias de reclamação ao longo do tempo em vez de totais isolados.",
          "Usei esses achados para defender decisões de design e apoiar a PM na priorização do backlog.",
          "Estruturei com o time de design e produto um framework de discovery: dores dos clientes, benchmark de seis concorrentes e dinâmicas colaborativas com devs e QAs desde o início.",
          "Redesenhei a home do Pix: o carrossel que escondia a maioria das opções virou uma lista vertical agrupada por ação, e a chave Pix principal passou a aparecer na home para facilitar o compartilhamento.",
        ],
        outcome:
          "A nova home foi a primeira mudança que o time baseou na própria pesquisa. O relatório virou ferramenta de trabalho de design e produto, levando as decisões de backlog da intuição para a evidência.",
      },
    },
  },
  {
    slug: "collateral-portal",
    category: "financial-services",
    published: false,
    text: {
      en: soon("Automating collateral registration at a major bank", "A leaner flow for internal agents, replacing manual calculations and multiple systems.", "Financial services"),
      pt: soon("Automatizando o cadastro de garantias em um grande banco", "Um fluxo mais enxuto para agentes internos, sem cálculos manuais nem troca entre sistemas.", "Serviços financeiros"),
    },
  },
  {
    slug: "queue-scheduling",
    category: "logistics",
    published: false,
    text: {
      en: soon("Digitising a paid queue service for truck drivers", "Payments, invoicing and back office for a logistics scheduling app.", "Logistics"),
      pt: soon("Digitalizando um serviço pago de fila para caminhoneiros", "Pagamento, nota fiscal e back office de um app de agendamento logístico.", "Logística"),
    },
  },
  {
    slug: "internal-payments-tools",
    category: "internal-tools",
    published: false,
    text: {
      en: soon("Internal tools for a payments company", "Fast validation cycles with employees as end users.", "Internal tools"),
      pt: soon("Ferramentas internas de uma empresa de pagamentos", "Ciclos rápidos de validação com colaboradores como usuários finais.", "Ferramentas internas"),
    },
  },
];

export const getCase = (slug: string) =>
  cases.find((c) => c.slug === slug && c.published);
