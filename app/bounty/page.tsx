import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { CopyIntro } from '@/components/bounty/copy-intro'
import { Faq, type FaqItem } from '@/components/bounty/faq'
import { ShareLink } from '@/components/bounty/share-link'
import { Footer } from '@/components/site/contact'
import { Header } from '@/components/site/header'
import { Container, Eyebrow, LinkButton, SectionHeading } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { SITE_URL, TELEGRAM_URL } from '@/src/config'

const PAGE_TITLE = "The Easiest $1,000 You'll Ever Make - Vanina Ivanova"
const PAGE_DESCRIPTION =
  "Know a company that needs a senior Web3 marketing leader? Make a warm intro. If it leads to a job offer, I'll send you $1,000. That's it."
const PAGE_URL = `${SITE_URL}/bounty`

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/bounty' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Vanina Ivanova',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    creator: '@inks',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

const steps = [
  {
    title: 'You spot the opening.',
    text: 'A company you know is hiring a CMO, Head of Marketing or Head of Growth. Or they should be.',
  },
  {
    title: 'You make the intro.',
    text: 'A short telegram message or email connecting me with the founder or hiring manager. Copy my one-liner below if you like.',
  },
  {
    title: 'I land the offer, you get $1,000.',
    text: 'If the intro leads to a job offer, the bounty is yours. Paid in USD or USDC, your choice.',
  },
]

const introText =
  "Hey [NAME], you mentioned you're hiring for marketing. You should talk to Vanina Ivanova: 10+ years in blockchain, ex-CMO at AdEx Network and Ambire Wallet. More here: 0xvanina.com"

const roles = [
  'CMO',
  'Head of Marketing',
  'Head of Growth',
  'Head of Content',
  'Fractional CMO with a long-term commitment',
  'Marketing Lead',
  'Events Lead',
  'Growth Lead',
  'Social Media Lead',
]

const stats = [
  { value: '40,000 ETH', label: "raised in 8 hours, leading AdEx Network's fundraise" },
  { value: '100,000', label: 'users at Ambire Wallet, grown from 1, with $50M+ TVL' },
  { value: '10+ years', label: 'in blockchain, 20 in marketing' },
]

const rules = [
  {
    title: 'Warm intros only.',
    text: "You know the person you're introducing me to, and they're expecting to hear about me. Cold-forwarding a job post doesn't count.",
  },
  {
    title: 'First intro wins.',
    text: 'If two people intro me to the same company, the bounty goes to whoever made the intro first.',
  },
  {
    title: 'Full-time or long-term roles.',
    text: 'The role is permanent, or a contract of 6+ months.',
  },
  {
    title: 'Paid on the offer.',
    text: 'You get $1,000 once I sign the offer, within 14 days. Paid in USD or USDC.',
  },
  {
    title: 'Multiple bounties available up to $5,000.',
    text: 'You introduce me to 5 companies, 5 of them make an offer, you get $5,000.',
  },
  {
    title: "Ends when I'm hired.",
    text: 'The bounty closes as soon as I accept an offer. This page will say so.',
  },
]

const faqs: FaqItem[] = [
  {
    question: 'Is this for real?',
    answer:
      "Yes. A good intro is worth more than a hundred applications, so I'd rather pay the person who opens the door than a job board.",
  },
  {
    question: "What if the company isn't actively hiring?",
    answer:
      'Intro me anyway. Plenty of the best roles are created after the right conversation. If that conversation leads to an offer, the bounty still counts.',
  },
  {
    question: "What if I don't get the job?",
    answer:
      "Then we're both out nothing but a few minutes, and I'm grateful you thought of me.",
  },
  {
    question: 'Is there a limit on intros?',
    answer:
      'No. Make as many as you like. Only the intro that leads to the offer I accept gets paid.',
  },
  {
    question: 'How will I know how it went?',
    answer:
      "I'll keep you posted after the first call and let you know how it ends, either way.",
  },
]

export default function BountyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="top" className="pb-20 pt-12 md:pb-28 md:pt-20">
          <Container className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr] md:grid-rows-[auto_1fr] md:gap-x-16 md:gap-y-10">
            <div>
              <Eyebrow>Referral bounty · $1,000</Eyebrow>
              <h1 className="text-[2.75rem] font-bold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
                The Easiest <span className="text-primary">$1,000</span> {"You'll Ever Make"}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {
                  "Know a company that needs a senior Web3 marketing leader? Make a warm intro. If it leads to a job offer, I'll send you $1,000. That's it."
                }
              </p>
            </div>

            <figure className="mx-auto w-full max-w-[340px] md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[360px]">
              <video
                src="/videos/bounty.mp4"
                poster="/videos/bounty-poster.jpg"
                width={720}
                height={1280}
                controls
                playsInline
                preload="metadata"
                aria-label="Video: 60 seconds on why I'm doing this"
                className="aspect-[9/16] w-full rounded-3xl bg-secondary object-cover shadow-[0_30px_60px_-30px_rgba(122,50,32,0.35)] ring-1 ring-border"
              />
              <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                {"60 seconds on why I'm doing this"}
              </figcaption>
            </figure>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:col-start-1 md:row-start-2">
              <LinkButton href={TELEGRAM_URL}>Make an intro</LinkButton>
              <a
                href="#how-it-works"
                className="text-base font-medium text-foreground underline decoration-primary/40 underline-offset-[6px] transition-colors hover:decoration-primary"
              >
                How it works ↓
              </a>
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="bg-secondary/60 py-20 md:py-28"
        >
          <Container>
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <SectionHeading id="how-heading">Three steps. One of them is mine.</SectionHeading>
              <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex flex-col border-t-2 border-foreground pt-6">
                    <span className="font-mono text-sm text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-12 max-w-3xl">
                <CopyIntro text={introText} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Who I'm looking for */}
        <section aria-labelledby="looking-heading" className="py-20 md:py-28">
          <Container>
            <Reveal>
              <Eyebrow>{"Who I'm looking for"}</Eyebrow>
              <SectionHeading id="looking-heading">What a great intro looks like</SectionHeading>

              <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="font-semibold text-foreground">Roles:</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {roles.map((role) => (
                      <li
                        key={role}
                        className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    {"I’m a strategist but I’m not afraid of getting my hands dirty and execute."}
                  </p>
                </div>

                <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="font-semibold text-foreground">Companies:</strong> Crypto,
                    blockchain and Web3 teams, from funded startups to established protocols.
                    Infrastructure, wallets, DeFi and developer platforms are a sweet spot. AI
                    companies.
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">Setup:</strong>{' '}
                    {
                      "Remote, global. I’m flexible with working hours and can accommodate roles across the globe."
                    }
                  </p>
                  <p className="rounded-2xl bg-accent p-5 text-foreground">
                    <strong className="font-semibold">Not sure if it fits?</strong>{' '}
                    {"Send it anyway. If it's close, I'd rather hear about it."}
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Why I'm an easy intro */}
        <section aria-labelledby="why-heading" className="bg-card py-20 md:py-28">
          <Container>
            <Reveal>
              <Eyebrow>{"Why I'm an easy intro"}</Eyebrow>
              <SectionHeading id="why-heading">{"You won't have to oversell me"}</SectionHeading>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {"Your name goes on the intro, so here's what you're vouching for."}
              </p>

              <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
                {stats.map((stat) => (
                  <li
                    key={stat.value}
                    className="rounded-2xl border border-border bg-background p-6 md:p-8"
                  >
                    <p className="font-heading text-4xl font-bold tracking-tight text-primary md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {
                  "I've led marketing as CMO at AdEx Network and Ambire Wallet, worked with Neon EVM, Veridise and Chainflow, and helped multiple projects grow at Serotonin. I also co-founded Sol Sisters, the most active community for women in Solana."
                }
              </p>
              <a
                href="/"
                className="mt-6 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
              >
                See my full profile and case studies
                <ArrowRight aria-hidden="true" className="size-4" />
                0xvanina.com
              </a>
            </Reveal>
          </Container>
        </section>

        {/* The fine print */}
        <section aria-labelledby="rules-heading" className="py-20 md:py-28">
          <Container>
            <Reveal>
              <Eyebrow>The fine print</Eyebrow>
              <SectionHeading id="rules-heading">The rules (short, I promise)</SectionHeading>
              <ul className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
                {rules.map((rule) => (
                  <li key={rule.title} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <p className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">{rule.title}</strong>{' '}
                      {rule.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="bg-secondary/60 py-20 md:py-28">
          <Container>
            <Reveal>
              <SectionHeading id="faq-heading">FAQ</SectionHeading>
              <div className="mt-10">
                <Faq items={faqs} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Final CTA */}
        <section id="intro" aria-labelledby="cta-heading" className="py-24 md:py-32">
          <Container>
            <Reveal className="flex flex-col items-center rounded-[2rem] bg-card px-6 py-14 text-center ring-1 ring-border md:px-12 md:py-20">
              <h2
                id="cta-heading"
                className="max-w-3xl text-4xl font-bold text-foreground md:text-6xl"
              >
                Got someone in mind?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {
                  "Tell me who and how you know them. I'll reply within 48 hours, and we'll plan the intro together so it lands well for both of us."
                }
              </p>
              <LinkButton href={TELEGRAM_URL} size="lg" className="mt-10">
                Send the intro idea
              </LinkButton>
              <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {"Don't know anyone? "}
                <ShareLink url={PAGE_URL} title={PAGE_TITLE} />
                {' and earn karma points and my gratitude.'}
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
