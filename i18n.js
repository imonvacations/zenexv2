// =====================================================================
// ZENEX · i18n
// EN / PT dictionary + translation runtime.
// data-i18n="key.path" replaces innerHTML (strings may contain HTML entities
// or simple inline tags like line breaks and spans). Choice persists to localStorage.
// =====================================================================

(function () {
  'use strict';

  const I18N = {
    en: {
      nav: {
        services: 'Services',
        web: 'Practices',
        process: 'How it works',
        principles: 'Principles',
        contact: 'Contact',
        cta: 'Start a project',
      },
      hero: {
        eyebrow: 'A small studio for intelligent web & systems',
        h1: 'We design<br>systems<span class="stop">.</span>',
        lede: 'ZENEX is a studio crafting websites, web apps, and AI automation for teams who want their digital surface to feel as considered as everything else they make. We write, design, code, and ship — all under one roof.',
        cta_primary: 'Start a project',
        cta_secondary: 'See what we craft',
        meta: 'Currently booking · spring 2026',
      },
      services: {
        num: '01 / What we do',
        title: 'Four practices.<br>One studio.',
        desc: 'Most projects use two or three of these in combination. Click any card to see how we approach that practice in detail.',
        flag: 'Our craft',
        cue: 'View details',
        web: {
          title: 'Website design & development',
          body: "We design and build your website end to end — the pages that introduce you, tell your story, and sell what you do. Beautiful on phones and laptops, fast everywhere, and easy for your team to update.",
        },
        ai: {
          title: 'AI automation',
          body: 'Custom agents, classifiers, evals, observability. Built for production — not for demos.',
        },
        int: {
          title: 'System integration',
          body: 'APIs, queues, ETL, webhooks. The dull, critical plumbing that lets your stack actually talk to itself.',
        },
        flow: {
          title: 'Workflow optimization',
          body: 'Operations audit, opportunity sizing, the calm version of how the work should actually run.',
        },
      },
      details: {
        num: '02 / Practices in detail',
        title: 'A closer look<br>at the craft.',
        desc: 'Pick a practice above — or any tab below — to see what we actually build inside it.',
        tabs: {
          web: 'Website',
          ai: 'AI automation',
          int: 'Integration',
          flow: 'Workflow',
        },
        panels: {
          web: {
            eyebrow: 'Website design & development',
            title: 'Websites,<br>built to be loved.',
            desc: "Your website is often the first thing people see — and where they decide whether to stay or leave. We design it to read clearly, load quickly, look right on every device, and stay easy for your team to update for years.",
            cards: {
              1: {
                title: 'Marketing & brand websites',
                body: "The storytelling site — the one that introduces your company, sells your product, and shows up in Google. We pair beautiful design with quick loads and a simple editor your team can use without calling a developer for every typo.",
                cap2: 'Easy content editing for your team',
                cap3: 'Drag-and-drop visual editing',
                cap4: 'Top-tier Google scores',
                cap5: 'Calm animation, no flash',
              },
              2: {
                title: 'Web applications',
                body: "Tools your customers log into — a member portal, a booking system, a custom platform built around the way your business actually works. With logins, payments, and the boring-but-essential plumbing underneath that keeps it running smoothly.",
                cap1: 'Modern, fast tech stack',
                cap2: 'Logins, billing, permissions',
                cap3: 'Live updates & notifications',
                cap4: 'Reliable, boring infrastructure',
                cap5: 'Monitoring so we spot issues first',
              },
              3: {
                title: 'Dashboards & internal tools',
                body: "The interfaces your own team lives in — to manage orders, see what's happening, or run day-to-day operations. Designed so the next step is obvious and the right action takes one click, not five.",
                cap1: 'Lots of information, kept readable',
                cap2: 'Keyboard shortcuts & quick search',
                cap3: 'Tables, filters & exports done right',
                cap4: 'Reusable building blocks',
                cap5: 'Built so your team can run it',
              },
            },
            rail_label: 'Under every web engagement',
            rail: {
              1: 'Accessibility (WCAG AA)',
              2: 'Core Web Vitals budget',
              3: 'Analytics & instrumentation',
              4: 'Design tokens & system',
              5: 'SEO & structured data',
              6: 'Documentation & hand-off',
            },
          },
          ai: {
            eyebrow: 'AI automation',
            title: 'Intelligence that<br>takes action.',
            desc: 'From custom agents to evals — production-grade AI that earns its cost. We build the patient, observable systems that turn models into reliable software.',
            cards: {
              1: {
                title: 'Agentic workflows',
                body: 'Autonomous agents that take action — not just notify. Tool-calling, retries, human-in-the-loop where it matters, and observability around every step.',
                cap1: 'OpenAI · Anthropic · open models',
                cap2: 'Tool calling & function execution',
                cap3: 'Memory & context handling',
                cap4: 'Human-approval steps where they matter',
                cap5: 'Cost & latency budgets, enforced',
              },
              2: {
                title: 'Classification & extraction',
                body: 'Turn unstructured input — emails, PDFs, tickets, calls — into the structured data your stack expects. Confidence-aware, with humans on the edges.',
                cap1: 'Email · PDF · audio · web extraction',
                cap2: 'Custom schemas & taxonomies',
                cap3: 'Active learning & feedback loops',
                cap4: 'Confidence + uncertainty handling',
                cap5: 'Graceful fallback to humans',
              },
              3: {
                title: 'Evals & observability',
                body: 'What ships to production gets measured. Every step, every cost, every regression — visible from day one, alerted before your users notice.',
                cap1: 'Golden-set evals',
                cap2: 'Trace-level observability',
                cap3: 'Drift & regression alerts',
                cap4: 'Cost & latency dashboards',
                cap5: 'Versioned prompts & models',
              },
            },
            rail_label: 'Under every AI engagement',
            rail: {
              1: 'Eval coverage',
              2: 'Cost & latency budgets',
              3: 'Versioned prompts & models',
              4: 'Human-in-the-loop hooks',
              5: 'Audit trail',
              6: 'Documentation & hand-off',
            },
            craft: {
              label: 'AI discipline · inside every AI engagement',
              title: 'What makes AI feel reliable.',
              items: {
                1: { title: 'Prompts, like an interface', body: 'How we talk to the AI. We design the instructions like a UI — clear, tested with real examples, strict about the format that comes back. Answers stay consistent on the thousandth request, not just the demo.' },
                2: { title: 'Evals everywhere', body: "How we know it's still good. Every change runs against a library of known cases before shipping — we compare answers against an approved set and flag anything that drifted. Quality is measured, not hoped for." },
                3: { title: 'Cost & speed budgets', body: 'How we keep it cheap and fast. Each task gets a price and a time limit; easy work uses small, quick models, harder questions get smarter (slower) ones. We always pick the cheapest model that still does the job well.' },
                4: { title: 'Safety, contained', body: 'How we keep mistakes small. Rules block bad outputs, every decision is logged with the reasoning behind it, and humans approve anything sensitive before it ships.' },
              },
            },
          },
          int: {
            eyebrow: 'System integration',
            title: 'A stack<br>that talks to itself.',
            desc: "APIs, pipelines, consolidation — the patient, reliable plumbing that lets all the tools you already pay for actually work as one system.",
            cards: {
              1: {
                title: 'APIs & webhooks',
                body: 'REST, GraphQL, RPC, webhooks — whatever your partners speak. Built with idempotency, retries, and signatures done right.',
                cap1: 'REST · GraphQL · gRPC',
                cap2: 'Idempotency & retry safety',
                cap3: 'Webhook signing & replay',
                cap4: 'Versioning & deprecation paths',
                cap5: 'OpenAPI & SDK generation',
              },
              2: {
                title: 'Data pipelines',
                body: 'Move data between systems reliably. Queues, streams, batch jobs — at whatever volume and shape your business needs.',
                cap1: 'Postgres · Kafka · S3 · Snowflake',
                cap2: 'ETL · ELT · CDC',
                cap3: 'Backfills & replays',
                cap4: 'Dead-letter handling',
                cap5: 'Schema evolution, gracefully',
              },
              3: {
                title: 'Stack consolidation',
                body: "Audit the tools you've collected, find the overlap, design the smaller stack. Most teams can shed half their SaaS bill without losing capability.",
                cap1: 'Tool & contract audit',
                cap2: 'Data ownership mapping',
                cap3: 'Migration playbooks',
                cap4: 'Risk-managed cutovers',
                cap5: 'Hand-over documentation',
              },
            },
            rail_label: 'Under every integration engagement',
            rail: {
              1: 'Idempotency & retries',
              2: 'Monitoring & alerts',
              3: 'OpenAPI specs',
              4: 'Versioning paths',
              5: 'Backfills & replays',
              6: 'Documentation & hand-off',
            },
            craft: {
              label: 'Integration discipline · inside every integration engagement',
              title: 'What makes connections stay solid.',
              items: {
                1: { title: 'Idempotency · safe to repeat', body: "Click twice, charge once. Every request is designed so repeating it can't cause a second side effect — critical when networks hiccup and systems retry on their own." },
                2: { title: 'Smart retries', body: 'When a service stumbles, we try again the right way. Short waits at first, longer if it keeps failing, and a holding queue for anything that never recovers — so nothing silently disappears.' },
                3: { title: 'Observability', body: 'We can see everything that happened. Every call, every error, every slow response is recorded with the full context — so when something breaks we find the cause in minutes, not hours.' },
                4: { title: 'Versioning', body: "Change without breaking what's there. New features live alongside old ones, with documentation and a published timeline before anything goes away — so integrations never wake up to a surprise." },
              },
            },
          },
          flow: {
            eyebrow: 'Workflow optimization',
            title: 'The calm version<br>of how it should run.',
            desc: "We map your current operations, find the leaks, and design the new way of working — then make sure the team can measure whether it's actually better.",
            cards: {
              1: {
                title: 'Operations audit',
                body: 'We map your current workflows end to end — who does what, with which tool, how long it takes, and where the leaks are.',
                cap1: 'Process-mapping interviews',
                cap2: 'Time-and-motion analysis',
                cap3: 'Cost-of-delay calculation',
                cap4: 'Bottleneck identification',
                cap5: 'Stakeholder alignment',
              },
              2: {
                title: 'SOPs & playbooks',
                body: 'The new way of working, written down. Clear enough that the next hire can pick it up on day three.',
                cap1: 'Living documentation',
                cap2: 'Decision trees & playbooks',
                cap3: 'Onboarding tracks',
                cap4: 'Versioned & searchable',
                cap5: 'Owned by the team, not the studio',
              },
              3: {
                title: 'KPIs & instrumentation',
                body: "If we can't measure it, we didn't change it. Every workflow ships with a dashboard and a review cadence baked in.",
                cap1: 'Leading & lagging metrics',
                cap2: 'Operational dashboards',
                cap3: 'Anomaly alerts',
                cap4: 'Weekly review cadence',
                cap5: 'Quarterly retrospectives',
              },
            },
            rail_label: 'Under every workflow engagement',
            rail: {
              1: 'Stakeholder interviews',
              2: 'Process maps',
              3: 'Living playbooks',
              4: 'Operational dashboards',
              5: 'Training sessions',
              6: 'Quarterly retrospectives',
            },
            craft: {
              label: 'Workflow discipline · inside every workflow engagement',
              title: 'What makes a new process stick.',
              items: {
                1: { title: 'Process mapping', body: "We draw your work, step by step. Who does what, with which tool, in what order — including the waits and handoffs nobody notices anymore. Once it's on a wall, the bottlenecks are obvious." },
                2: { title: 'Measurement', body: 'Before and after, in numbers. We pick the few metrics that actually matter — time saved, errors caught, tickets cleared — and watch them move. No vibes, just proof.' },
                3: { title: 'Documentation', body: 'The new way, written down. Playbooks with screenshots, decision trees for the tricky calls, and search that actually works. New hires get productive in days, not months.' },
                4: { title: 'Adoption', body: 'We help people actually use it. Training sessions, side-by-side support through the first cycle, and a feedback loop so the playbook stays alive. The team has to own it — we make sure they can.' },
              },
            },
          },
        },
      },
      craft: {
        label: 'Design discipline · inside every web project',
        title: 'Type, color, motion, components.',
        items: {
          type: { title: 'Typography that reads', body: 'Curated pairings, optical sizing, line-heights that breathe. Type is the first read, every time.' },
          color: { title: 'Palettes you can live in', body: "Tokens, not hex codes. Calm anchors, considered accents, and contrast you don't have to apologise for." },
          components: { title: 'Components that compose', body: 'A real design system, not a screenshot library. Documented, tested, and ready for your next page.' },
          motion: { title: 'Motion with reason', body: 'Every transition earns its place. Nothing distracts, nothing slows the reader down, nothing fights reduced-motion.' },
        },
      },
      process: {
        num: '03 / How we work',
        title: 'A calm,<br>three-phase engagement.',
        desc: 'No discovery theatre, no 80-page decks. We map, we build, we operate — with working software at every checkpoint and an open Figma you can poke around in.',
        phases: {
          1: { num: 'Phase 01', title: 'Map', body: "A focused diagnostic. We map your audience, your work, and the surface area we're designing — then sketch the system that solves it." },
          2: { num: 'Phase 02', title: 'Build', body: 'Design and code, side by side. Regular demos, working pages and components at every step — never a slide deck pretending to be progress.' },
          3: { num: 'Phase 03', title: 'Operate', body: "We run it in production. Handle incidents, evolve the design, hand it off when it's stable — or stay on retainer." },
        },
      },
      principles: {
        num: '04 / Principles',
        title: 'How we think<br>about the work.',
        desc: "Six commitments we've made to ourselves — and to anyone who hires us.",
        1: { title: 'Design & code, same hands', body: 'The person designing the page is the person shipping it. No throws over the wall, no broken telephone.' },
        2: { title: 'Senior, end-to-end', body: "The same people own the work from kick-off to hand-off. No subcontracting, no hand-offs to people you've never met." },
        3: { title: 'Quiet engineering', body: 'Calm systems beat clever ones. We optimise for boring, observable, and dependable.' },
        4: { title: 'Performance is design', body: "Speed isn't a tax we add at the end — it's a feature we ship on day one. Sub-second loads are non-negotiable." },
        5: { title: 'You can take it over', body: 'We build so your team can own it. No proprietary frameworks, no vendor lock-in, no consulting tax.' },
        6: { title: 'Tasteful AI', body: 'Models where they earn their cost. Heuristics, rules, and humans everywhere else — by design.' },
      },
      contact: {
        num: "05 / Let's talk",
        h2: 'A website worth<br>making<span class="tide">?</span>',
        lede: 'We take on a small number of projects each season — so we can give each one the attention it deserves. Tell us about yours.',
        new_l: 'New project',
        book: 'Book a 30-min call',
        email_l: 'Direct',
        general_l: 'General enquiries',
      },
      footer: {
        note: 'Designed and built, slowly, by the studio.',
      },
    },

    pt: {
      nav: {
        services: 'Serviços',
        web: 'Práticas',
        process: 'Como trabalhamos',
        principles: 'Princípios',
        contact: 'Contacto',
        cta: 'Começar um projeto',
      },
      hero: {
        eyebrow: 'Um pequeno estúdio para web e sistemas inteligentes',
        h1: 'Desenhamos<br>sistemas<span class="stop">.</span>',
        lede: 'A ZENEX é um estúdio que constrói sites, aplicações web e automação com IA — para equipas que querem a sua presença digital tão cuidada como tudo o resto que fazem. Escrevemos, desenhamos, programamos e entregamos — tudo debaixo do mesmo tecto.',
        cta_primary: 'Começar um projeto',
        cta_secondary: 'Ver o que criamos',
        meta: 'A aceitar projetos · primavera 2026',
      },
      services: {
        num: '01 / O que fazemos',
        title: 'Quatro práticas.<br>Um só estúdio.',
        desc: 'A maioria dos projetos combina duas ou três destas práticas. Clica em qualquer cartão para ver como abordamos essa disciplina em detalhe.',
        flag: 'A nossa craft',
        cue: 'Ver detalhes',
        web: {
          title: 'Design e desenvolvimento web',
          body: 'Desenhamos e construímos o teu site de uma ponta à outra — as páginas que te apresentam, contam a tua história e vendem o que fazes. Bonitas em telemóveis e portáteis, rápidas em qualquer lado, e fáceis de atualizar pela tua equipa.',
        },
        ai: {
          title: 'Automação com IA',
          body: 'Agentes à medida, classificadores, evals, observabilidade. Construído para produção — não para demos.',
        },
        int: {
          title: 'Integração de sistemas',
          body: 'APIs, filas, ETL, webhooks. A canalização chata e crítica que faz a tua stack realmente falar consigo mesma.',
        },
        flow: {
          title: 'Otimização de fluxos',
          body: 'Auditoria às operações, dimensionamento de oportunidades, a versão calma de como o trabalho devia mesmo correr.',
        },
      },
      details: {
        num: '02 / Práticas em detalhe',
        title: 'Um olhar mais perto<br>sobre o ofício.',
        desc: 'Escolhe uma prática acima — ou qualquer separador abaixo — para veres o que construímos de verdade dentro dela.',
        tabs: {
          web: 'Website',
          ai: 'Automação IA',
          int: 'Integração',
          flow: 'Fluxos',
        },
        panels: {
          web: {
            eyebrow: 'Design e desenvolvimento web',
            title: 'Sites,<br>feitos para gostares.',
            desc: 'O teu site é muitas vezes a primeira coisa que as pessoas vêem — e onde decidem se vale a pena ficar. Desenhamo-lo para se ler bem, carregar rápido, ficar certo em todos os ecrãs e continuar fácil de atualizar pela tua equipa, durante anos.',
            cards: {
              1: {
                title: 'Sites de marca e marketing',
                body: 'O site que conta a tua história — o que apresenta a empresa, vende o produto e aparece no Google. Juntamos design bonito a carregamentos rápidos e um editor simples que a tua equipa usa sem ter de ligar a um programador por causa de uma gralha.',
                cap2: 'Edição de conteúdo simples para a tua equipa',
                cap3: 'Edição visual, arrastar e largar',
                cap4: 'Pontuação de topo no Google',
                cap5: 'Animação calma, sem espalhafato',
              },
              2: {
                title: 'Aplicações web',
                body: 'Ferramentas onde os teus clientes entram — um portal de membros, um sistema de marcações, uma plataforma feita à medida do teu negócio. Com logins, pagamentos e a canalização aborrecida (mas essencial) por baixo que mantém tudo a correr.',
                cap1: 'Stack técnica moderna e rápida',
                cap2: 'Logins, faturas, permissões',
                cap3: 'Atualizações e notificações ao vivo',
                cap4: 'Infra fiável, sem heroísmos',
                cap5: 'Monitorização para vermos problemas primeiro',
              },
              3: {
                title: 'Dashboards e ferramentas internas',
                body: 'As interfaces onde a tua equipa vive — para gerir encomendas, ver o que está a acontecer, ou correr o dia-a-dia das operações. Desenhadas para que o próximo passo seja óbvio e a ação certa esteja a um clique, não a cinco.',
                cap1: 'Muita informação, mantida legível',
                cap2: 'Atalhos de teclado e pesquisa rápida',
                cap3: 'Tabelas, filtros e exports bem feitos',
                cap4: 'Blocos reutilizáveis',
                cap5: 'Construída para a tua equipa gerir',
              },
            },
            rail_label: 'Em cada projeto web',
            rail: {
              1: 'Acessibilidade (WCAG AA)',
              2: 'Orçamento de Core Web Vitals',
              3: 'Analytics e instrumentação',
              4: 'Tokens e design system',
              5: 'SEO e dados estruturados',
              6: 'Documentação e hand-off',
            },
          },
          ai: {
            eyebrow: 'Automação com IA',
            title: 'Inteligência<br>que age.',
            desc: 'De agentes à medida até evals — IA de produção que justifica o seu custo. Construímos os sistemas pacientes e observáveis que transformam modelos em software fiável.',
            cards: {
              1: {
                title: 'Fluxos com agentes',
                body: 'Agentes autónomos que agem — não só notificam. Chamada de ferramentas, retries, humano no circuito onde importa, e observabilidade em cada passo.',
                cap1: 'OpenAI · Anthropic · modelos abertos',
                cap2: 'Tool calling e execução de funções',
                cap3: 'Memória e gestão de contexto',
                cap4: 'Passos de aprovação humana onde fazem sentido',
                cap5: 'Orçamentos de custo e latência, à força',
              },
              2: {
                title: 'Classificação e extração',
                body: 'Transforma input não estruturado — emails, PDFs, tickets, chamadas — nos dados estruturados que a tua stack espera. Com noção de confiança, e humanos nas pontas.',
                cap1: 'Email · PDF · áudio · extração web',
                cap2: 'Esquemas e taxonomias à medida',
                cap3: 'Active learning e feedback loops',
                cap4: 'Gestão de confiança e incerteza',
                cap5: 'Fallback gracioso para humanos',
              },
              3: {
                title: 'Evals e observabilidade',
                body: 'O que vai para produção é medido. Cada passo, cada custo, cada regressão — visíveis desde o dia um, com alerta antes do utilizador notar.',
                cap1: 'Evals com golden set',
                cap2: 'Observabilidade ao nível do trace',
                cap3: 'Alertas de drift e regressão',
                cap4: 'Dashboards de custo e latência',
                cap5: 'Prompts e modelos versionados',
              },
            },
            rail_label: 'Em cada projeto de IA',
            rail: {
              1: 'Cobertura de evals',
              2: 'Orçamentos de custo e latência',
              3: 'Prompts e modelos versionados',
              4: 'Ganchos para humano no circuito',
              5: 'Trilho de auditoria',
              6: 'Documentação e hand-off',
            },
            craft: {
              label: 'Disciplina de IA · em todos os projetos de IA',
              title: 'O que torna a IA fiável.',
              items: {
                1: { title: 'Prompts, como uma interface', body: 'Como falamos com a IA. Desenhamos as instruções como uma UI — claras, testadas com exemplos reais, estritas sobre o formato que volta. As respostas mantêm-se consistentes no milésimo pedido, não só na demo.' },
                2: { title: 'Evals em todo o lado', body: 'Como sabemos que ainda funciona. Cada mudança corre contra uma biblioteca de casos conhecidos antes de ir para produção — comparamos respostas com um conjunto aprovado e marcamos o que desviou. A qualidade é medida, não esperada.' },
                3: { title: 'Orçamentos de custo e velocidade', body: 'Como mantemos tudo barato e rápido. Cada tarefa tem preço e tempo limite; trabalho fácil vai para modelos pequenos e rápidos, perguntas difíceis para modelos mais inteligentes (e lentos). Escolhemos sempre o modelo mais barato que faz o trabalho bem.' },
                4: { title: 'Segurança contida', body: 'Como mantemos os erros pequenos. Regras bloqueiam outputs maus, cada decisão fica registada com o raciocínio por trás, e humanos aprovam qualquer coisa sensível antes de seguir.' },
              },
            },
          },
          int: {
            eyebrow: 'Integração de sistemas',
            title: 'Uma stack<br>que fala consigo mesma.',
            desc: 'APIs, pipelines, consolidação — a canalização paciente e fiável que faz com que todas as ferramentas que já pagas funcionem como um só sistema.',
            cards: {
              1: {
                title: 'APIs e webhooks',
                body: 'REST, GraphQL, RPC, webhooks — o que os teus parceiros falarem. Construído com idempotência, retries e assinaturas bem feitas.',
                cap1: 'REST · GraphQL · gRPC',
                cap2: 'Idempotência e retries seguros',
                cap3: 'Assinatura e replay de webhooks',
                cap4: 'Versionamento e caminhos de deprecação',
                cap5: 'OpenAPI e geração de SDKs',
              },
              2: {
                title: 'Pipelines de dados',
                body: 'Mover dados entre sistemas com fiabilidade. Filas, streams, jobs em batch — em qualquer volume e forma que o negócio peça.',
                cap1: 'Postgres · Kafka · S3 · Snowflake',
                cap2: 'ETL · ELT · CDC',
                cap3: 'Backfills e replays',
                cap4: 'Tratamento de dead-letter',
                cap5: 'Evolução de schema, com cuidado',
              },
              3: {
                title: 'Consolidação de stack',
                body: 'Auditamos as ferramentas que acumulaste, encontramos a sobreposição, desenhamos a stack mais pequena. Muitas equipas conseguem cortar metade da fatura de SaaS sem perder capacidade.',
                cap1: 'Auditoria a ferramentas e contratos',
                cap2: 'Mapeamento de propriedade dos dados',
                cap3: 'Playbooks de migração',
                cap4: 'Cutovers com risco controlado',
                cap5: 'Documentação de transição',
              },
            },
            rail_label: 'Em cada projeto de integração',
            rail: {
              1: 'Idempotência e retries',
              2: 'Monitorização e alertas',
              3: 'Specs OpenAPI',
              4: 'Caminhos de versionamento',
              5: 'Backfills e replays',
              6: 'Documentação e hand-off',
            },
            craft: {
              label: 'Disciplina de integração · em todos os projetos de integração',
              title: 'O que torna as ligações sólidas.',
              items: {
                1: { title: 'Idempotência · seguro repetir', body: 'Clica duas vezes, cobra uma. Cada pedido é desenhado para que repeti-lo nunca cause um segundo efeito — crítico quando a rede pisca e os sistemas tentam de novo por conta própria.' },
                2: { title: 'Retries inteligentes', body: 'Quando um serviço tropea, tentamos de novo da forma certa. Esperas curtas no início, mais longas se continuar a falhar, e uma fila de retenção para o que nunca recupera — para nada desaparecer em silêncio.' },
                3: { title: 'Observabilidade', body: 'Vemos tudo o que aconteceu. Cada chamada, cada erro, cada resposta lenta fica registada com o contexto completo — quando algo se parte, encontramos a causa em minutos, não horas.' },
                4: { title: 'Versionamento', body: 'Mudar sem partir o que está. As funcionalidades novas convivem com as antigas, documentadas, com calendário publicado antes de algo desaparecer — as integrações nunca acordam para uma surpresa.' },
              },
            },
          },
          flow: {
            eyebrow: 'Otimização de fluxos',
            title: 'A versão calma<br>de como devia correr.',
            desc: 'Mapeamos as operações atuais, encontramos as fugas e desenhamos a nova forma de trabalhar — e garantimos que a equipa consegue medir se está mesmo melhor.',
            cards: {
              1: {
                title: 'Auditoria às operações',
                body: 'Mapeamos os fluxos atuais de ponta a ponta — quem faz o quê, com que ferramenta, quanto tempo demora e onde estão as fugas.',
                cap1: 'Entrevistas de mapeamento de processos',
                cap2: 'Análise de tempo e movimento',
                cap3: 'Cálculo do custo do atraso',
                cap4: 'Identificação de bottlenecks',
                cap5: 'Alinhamento de stakeholders',
              },
              2: {
                title: 'SOPs e playbooks',
                body: 'A nova forma de trabalhar, posta no papel. Suficientemente clara para o próximo membro a apanhar ao terceiro dia.',
                cap1: 'Documentação viva',
                cap2: 'Árvores de decisão e playbooks',
                cap3: 'Trilhos de onboarding',
                cap4: 'Versionados e pesquisáveis',
                cap5: 'Propriedade da equipa, não do estúdio',
              },
              3: {
                title: 'KPIs e instrumentação',
                body: 'Se não dá para medir, não mudámos. Cada fluxo vai com um dashboard e um ritmo de revisão já incluídos.',
                cap1: 'Métricas leading e lagging',
                cap2: 'Dashboards operacionais',
                cap3: 'Alertas de anomalia',
                cap4: 'Cadência semanal de revisão',
                cap5: 'Retrospetivas trimestrais',
              },
            },
            rail_label: 'Em cada projeto de fluxos',
            rail: {
              1: 'Entrevistas a stakeholders',
              2: 'Mapas de processo',
              3: 'Playbooks vivos',
              4: 'Dashboards operacionais',
              5: 'Sessões de formação',
              6: 'Retrospetivas trimestrais',
            },
            craft: {
              label: 'Disciplina de fluxos · em todos os projetos de fluxos',
              title: 'O que faz uma nova forma de trabalhar colar.',
              items: {
                1: { title: 'Mapeamento de processos', body: 'Desenhamos o teu trabalho, passo a passo. Quem faz o quê, com que ferramenta, em que ordem — incluindo as esperas e handoffs em que já ninguém repara. Quando está na parede, os bottlenecks ficam óbvios.' },
                2: { title: 'Medição', body: 'Antes e depois, em números. Escolhemos as poucas métricas que importam — tempo poupado, erros apanhados, tickets resolvidos — e vemo-las mexer. Sem palpites, só provas.' },
                3: { title: 'Documentação', body: 'A nova forma posta no papel. Playbooks com screenshots, árvores de decisão para os casos tramados, e pesquisa que funciona. Novas contratações ficam produtivas em dias, não meses.' },
                4: { title: 'Adoção', body: 'Ajudamos as pessoas a usar de verdade. Sessões de formação, apoio lado a lado no primeiro ciclo, e um circuito de feedback para o playbook continuar vivo. A equipa tem de ser dona — fazemos com que possa ser.' },
              },
            },
          },
        },
      },
      craft: {
        label: 'Disciplina de design · em todos os projetos web',
        title: 'Tipografia, cor, movimento, componentes.',
        items: {
          type: { title: 'Tipografia que se lê', body: 'Pares cuidados, optical sizing, entrelinhas que respiram. A tipografia é sempre a primeira leitura.' },
          color: { title: 'Paletas em que se vive', body: 'Tokens, não códigos hex. Âncoras calmas, acentos pensados, contraste do qual não temos de pedir desculpa.' },
          components: { title: 'Componentes que compõem', body: 'Um design system a sério, não uma biblioteca de screenshots. Documentado, testado, pronto para a próxima página.' },
          motion: { title: 'Movimento com motivo', body: 'Cada transição justifica o seu lugar. Nada distrai, nada atrasa o leitor, nada luta contra reduced-motion.' },
        },
      },
      process: {
        num: '03 / Como trabalhamos',
        title: 'Um envolvimento<br>calmo, em três fases.',
        desc: 'Sem teatro de discovery, sem decks de 80 páginas. Mapeamos, construímos, operamos — com software a funcionar em cada checkpoint e um Figma aberto onde podes mexer à vontade.',
        phases: {
          1: { num: 'Fase 01', title: 'Mapear', body: 'Um diagnóstico focado. Mapeamos a tua audiência, o teu trabalho e a superfície que estamos a desenhar — e depois esboçamos o sistema que a resolve.' },
          2: { num: 'Fase 02', title: 'Construir', body: 'Design e código, lado a lado. Demos regulares, páginas e componentes a funcionar em cada etapa — nunca um deck a fingir-se de progresso.' },
          3: { num: 'Fase 03', title: 'Operar', body: 'Pomos a correr em produção. Tratamos de incidentes, evoluímos o design, fazemos hand-off quando está estável — ou ficamos em retainer.' },
        },
      },
      principles: {
        num: '04 / Princípios',
        title: 'Como pensamos<br>o trabalho.',
        desc: 'Seis compromissos que fizemos connosco — e com quem nos contrata.',
        1: { title: 'Design e código, as mesmas mãos', body: 'A pessoa que desenha a página é a pessoa que a entrega. Sem atirar por cima do muro, sem telefone estragado.' },
        2: { title: 'Sénior, de uma ponta à outra', body: 'São as mesmas pessoas que conduzem o trabalho do kick-off ao hand-off. Sem subcontratar, sem entregar a pessoas que nunca conheceste.' },
        3: { title: 'Engenharia silenciosa', body: 'Sistemas calmos ganham aos engenhosos. Otimizamos para aborrecido, observável e fiável.' },
        4: { title: 'Performance é design', body: 'Velocidade não é um imposto que pagamos no fim — é uma feature que entregamos no dia um. Carregamentos abaixo do segundo não se negoceiam.' },
        5: { title: 'Tu podes assumir', body: 'Construímos para a tua equipa poder ser dona. Sem frameworks proprietárias, sem vendor lock-in, sem imposto de consultoria.' },
        6: { title: 'IA com bom gosto', body: 'Modelos onde justificam o custo. Heurísticas, regras e humanos em todos os outros sítios — por design.' },
      },
      contact: {
        num: '05 / Vamos falar',
        h2: 'Um site<br>que valha a pena<span class="tide">?</span>',
        lede: 'Aceitamos um pequeno número de projetos por estação — para podermos dar a cada um a atenção que merece. Conta-nos sobre o teu.',
        new_l: 'Novo projeto',
        book: 'Marcar uma chamada de 30 min',
        email_l: 'Direto',
        general_l: 'Informações gerais',
      },
      footer: {
        note: 'Desenhado e construído, devagar, pelo estúdio.',
      },
    },
  };

  // -----------------------------------------------------------------
  // Lookup helpers
  // -----------------------------------------------------------------

  function lookup(dict, path) {
    return path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), dict);
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = lookup(dict, el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const v = lookup(dict, el.getAttribute('data-i18n-html'));
      if (typeof v === 'string') el.innerHTML = v;
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem('zenex.lang', lang); } catch (e) { /* ignore */ }
  }

  function init() {
    let lang = 'en';
    try {
      const stored = localStorage.getItem('zenex.lang');
      if (stored === 'en' || stored === 'pt') lang = stored;
    } catch (e) { /* ignore */ }

    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = btn.getAttribute('data-lang');
        if (next) applyLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.__zenex_i18n = { applyLang, I18N };
})();
