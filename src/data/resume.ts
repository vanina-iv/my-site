// Resume content, copied from public/Vanina_Ivanova_Resume.pdf.
// When the PDF changes, update this file to match.

export const RESUME_PDF = '/Vanina_Ivanova_Resume.pdf'

export type Role = {
  company: string
  title: string
  location: string
  dates: string
  bullets: string[]
}

export const resume = {
  name: 'Vanina Ivanova',
  headline: 'Senior Web3 Marketing Leader | CMO / Head of Marketing',
  timezone: 'CET time zone (Remote)',

  summary:
    'Marketing leader with 9+ years building and scaling marketing functions for blockchain and crypto companies, including 7 years as founding CMO of Ambire Wallet (formerly AdEx Network), where a token launch raised 40,000 ETH in a single day and the wallet reached 100,000 registered users and $50M TVL within 9 months of launch. Proven track record building marketing, community, and BD teams from zero (0 to 9+ people), running go-to-market for technical products across wallets, DePIN, L1/L2 infrastructure, and security, and translating protocol-level technology into narratives that convert for developers, investors, and end-users.',

  competencies: [
    {
      label: 'Leadership & Strategy',
      text: 'Team building & mentoring (0→9); GTM strategy & execution; fundraising & token launches; marketing budget ownership; founder-led strategy',
    },
    {
      label: 'Product & Growth Marketing',
      text: 'Messaging & positioning; product launch strategy; conversion & retention optimization; website revamps; developer onboarding programs',
    },
    {
      label: 'Content & Community',
      text: 'Content strategy; community building; developer relations; conference speaking & event production; PR & media relations; social growth strategy',
    },
    {
      label: 'Domain Expertise',
      text: 'Non-custodial & custodial wallets; staking & validator infrastructure; DePIN; RWAs; stablecoins; Ethereum & Solana ecosystems',
    },
  ],

  experience: [
    {
      company: 'Neon EVM',
      title: 'Head of Marketing',
      location: 'Remote',
      dates: '2025 – 2026',
      bullets: [
        'Led, restructured, and optimized the marketing, communications, and growth team for the Neon EVM ecosystem',
        'Organized a developer bootcamp that onboarded 170+ developers to the Neon EVM ecosystem',
        'Implemented a comprehensive content and media plan; managed cross-functional stakeholder relations',
        "Designed and executed GTM strategy for Parasol, the company's new perpetual DEX engine",
      ],
    },
    {
      company: 'Chainflow',
      title: 'Marketing & Communications Lead (Maternity Cover)',
      location: 'Remote',
      dates: '2024 – 2026',
      bullets: [
        'Owned the full marketing function for Chainflow, an independent boutique blockchain validator/node operator',
        'Designed and ran a delegated staking acquisition and retention strategy',
        "Managed event participation, sponsorships, and sourced media appearances for the company's founder",
      ],
    },
    {
      company: 'Serotonin',
      title: 'Marketing Director',
      location: 'Remote',
      dates: '2024 – 2025',
      bullets: [
        'Built 360-degree marketing strategies for multiple Web3 clients across infrastructure, L1/L2, and DePIN',
        'Advised clients on fundraising and node-sale campaign execution; designed client GTM strategies',
        'Orchestrated day-to-day execution of marketing and growth activities across client accounts',
      ],
    },
    {
      company: 'Veridise',
      title: 'Head of Marketing',
      location: 'Remote',
      dates: '2023 – 2024',
      bullets: [
        'Served as a marketing team of one, owning content, growth, and social media strategy end-to-end',
        "Grew the company's social following 2x; designed the founder-led marketing strategy",
        'Led a website revamp and visual rebrand that optimized traffic and conversion',
        'Partnered with business development to streamline the lead generation flow',
      ],
    },
    {
      company: 'Ambire (formerly AdEx Network)',
      title: 'Chief Marketing Officer (CMO)',
      location: 'Sofia, Bulgaria',
      dates: '2016 – 2023',
      bullets: [
        'Founding team member; designed the TGE campaign for AdEx Network, raising 40,000 ETH in a single day',
        'Grew the AdEx Network platform from 0 to 20,000 registered publishers and advertisers',
        "Led marketing through the company's pivot to Ambire Wallet, an account-abstraction wallet that later served as the prototype for the Ethereum Foundation's Kohaku wallet",
        "Orchestrated Ambire Wallet's GTM, growing it from 0 to 100,000 registered users and $50M TVL within 9 months of launch",
        "Built and led the company's marketing, customer success, and BD functions from scratch to a 9+ person team",
      ],
    },
  ] satisfies Role[],

  earlierIntro:
    'Selected earlier roles demonstrating scaled consumer growth marketing prior to specializing in crypto/Web3:',
  earlier: [
    {
      company: 'Stremio',
      title: 'Marketing & Growth Director',
      location: 'Sofia, Bulgaria',
      dates: '2016 – 2023',
      bullets: [
        "Grew the platform's user base from 1.8M to 6M users within the first 2 years; ran content, social, and monetization strategy",
        'Revamped the company website, driving consistent 15% month-over-month traffic growth; led GTM for the Stremio iOS app',
        'Designed 4 consecutive addon development competitions that brought 80+ new content addons to the platform',
      ],
    },
    {
      company: 'pCloud AG',
      title: 'Marketing Executive & Growth Hacker',
      location: 'Sofia, Bulgaria',
      dates: '2016 – 2017',
      bullets: [
        'Contributed to end-to-end marketing strategy during a period of growth from 3M to ~7M registered users; owned the company blog as editor-in-chief',
      ],
    },
  ] satisfies Role[],
  earlierNote:
    'Additional early-career marketing & comms roles in fintech, forex, iGaming and media available on request.',

  community: [
    'Co-Founder, Sol Sisters - community for women building on Solana; grew 0 to 330 members within 9 months of launch; organized 3 IRL meetups at major blockchain conferences and secured multiple ecosystem partnerships',
    'Founder, The Web3 Marketing Hub — Substack publication on crypto and Web3 marketing strategy',
    'Producer, The Next Billion Summit (ETH Denver) and Block Zero (Solana validator conference, 2 consecutive years)',
    'Speaker, ETHSofia',
  ],

  education: [
    'BA, Visual Arts & Advertising — New Bulgarian University, Sofia',
    'Certifications: Financial Promotion (UK & Europe); Safary Club Crypto Marketing Certification; SheFi Cohort 14',
  ],
}
