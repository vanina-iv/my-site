import { Container, SectionHeading } from './primitives'
import { Reveal } from './reveal'

const audience = [
  'Crypto, blockchain and Web3 marketers;',
  'Founders who want to learn more about marketing;',
  'Crypto product teams that want to know how product and marketing work together',
]

export function Newsletter() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="border-t border-border bg-card py-20 md:py-28"
    >
      <Container>
        <Reveal className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading id="newsletter-heading">The Web3 Marketing Hub</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {
                "I write a free weekly newsletter with practical lessons from my work as a CMO and blockchain marketer. Each issue is one short article on marketing, launches, growth, and what I'm learning in Web3."
              }
            </p>
            <p className="mt-8 font-medium text-foreground">Who is it for:</p>
            <ul className="mt-4 flex flex-col gap-3">
              {audience.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-2">
            <p className="mb-4 font-semibold text-foreground">Subscribe to the newsletter</p>
            <iframe
              src="https://theweb3marketer.substack.com/embed"
              title="Subscribe to The Web3 Marketing Hub on Substack"
              width="480"
              height="320"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              className="block w-full max-w-[480px] rounded-2xl"
              style={{ border: '1px solid #EEE', background: 'white' }}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
