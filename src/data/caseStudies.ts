export type CaseStudy = {
  slug: string
  client: string
  title: string
  highlightValue: string
  highlightLabel: string
  problem: string
  solution: string
  results: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'neon-evm',
    client: 'NeonEVM',
    title: 'Developer Bootcamp',
    highlightValue: '97',
    highlightLabel: 'new smart contracts deployed',
    problem:
      'Decreasing transaction volume and difficulty explaining the benefits of Neon EVM to developers',
    solution: 'A 6-week incentivized developer bootcamp to teach devs by doing.',
    results:
      '214 developers signed up for the bootcamp, with 170 of them actively participating and deploying 97 new smart contracts on NeonEVM\'s devnet. The bootcamp also reinvigorated the Neon EVM community by nurturing 62 "chatters" (Discord community participants that regularly engage in conversation).',
  },
  {
    slug: 'ambire-wallet',
    client: 'Ambire Wallet',
    title: 'Paper Hands',
    highlightValue: '1,000+',
    highlightLabel: 'game packs distributed',
    problem: 'Drive targeted booth traffic at expos and conferences',
    solution:
      'Come up with unique swag, the Paper Hands card game (a crypto version of Cards Against Humanity)',
    results:
      '1,000+ game packs distributed across major events, each game giveaway used as a leadgen capture. A game shipped to the Ethereum Foundation office in Germany; a major KOL whose name was on one of the game cards tweeted about the game and Ambire for free.',
  },
  {
    slug: 'adex-network',
    client: 'AdEx Network',
    title: "The World's First Blockchain Ad Space Bid",
    highlightValue: '2M',
    highlightLabel: 'ad spaces sold on easyJet boarding passes',
    problem:
      'Increase credibility in AdEx Network (decentralized advertising network) as a newly established project making bold claims on the market',
    solution:
      "Teaming up with Ink, the world leader in travel media, and easyJet to execute the world's first ad space auction on the blockchain.",
    results:
      "We were granted a rare exception - to use easyJet's brand name in promotional and PR material. The invite-only auction saw interest from large companies like eToro and Propy, and sold 2 million ad spaces on easyJet boarding passes.",
  },
]
