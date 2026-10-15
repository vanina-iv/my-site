import { LINKEDIN_URL } from '@/src/config'
import { Container, SectionHeading } from './primitives'
import { Reveal } from './reveal'

const facts: React.ReactNode[] = [
  <>
    <strong>10+</strong> years in blockchain, <strong>20</strong> in marketing
  </>,
  <>Co-founder of Sol Sisters - the most active community for women in Solana</>,
  <>
    Led fundraising for AdEx Network, raised <strong>40,000 ETH</strong> in{' '}
    <strong>8 hours</strong>
  </>,
  <>
    Grew Ambire Wallet from <strong>1</strong> to <strong>100,000</strong> users and{' '}
    <strong>$50M+</strong> in TVL
  </>,
  <>Keynote speaker at various industry events</>,
  <>Based in Europe, working with teams worldwide</>,
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-secondary/60 py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="about-heading" className="max-w-3xl">
            Crypto marketing from pre-launch to scale - by an OG
          </SectionHeading>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                {
                  "Hi there! I'm Vanina, and I've spent the last decade doing marketing for crypto projects. I rode the ICO wave, survived every bear market since, and I've seen more \"this time it's different\" narratives than I can count."
                }
              </p>
              <p>
                {
                  "I've led marketing as CMO at AdEx Network and Ambire Wallet, and worked with projects like Neon EVM. I was also a part of the team at Serotonin - one of the largest Web3 growth studios, where I helped multiple projects grow."
                }
              </p>
              <p>
                {
                  "What I bring is simple: senior strategy and hands-on execution in one person. I've seen what survives a cycle and what doesn't, so you don't pay to learn it twice."
                }
              </p>
              <p>
                See my professional experience on{' '}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-4 hover:decoration-2"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>

            <aside
              aria-labelledby="facts-heading"
              className="h-fit rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <h3 id="facts-heading" className="text-base font-semibold text-foreground">
                Quick facts about me:
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {facts.map((fact, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
