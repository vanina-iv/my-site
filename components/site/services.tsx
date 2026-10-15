import { BookButton, Container, SectionHeading } from './primitives'
import { Reveal } from './reveal'

const services = [
  {
    title: 'Fundraising & pre-launch',
    for: 'Teams before or during a raise who need a story that investors and users get in one read.',
    get: 'Market and competitor research; positioning and narrative; pitch deck messaging; investor relations support; early community setup.',
  },
  {
    title: 'Go-to-market & launch',
    for: 'Projects heading to mainnet, TGE or a major release.',
    get: 'GTM strategy and launch plan; KOL selection and management; PR and media relations; community campaigns; launch-week execution.',
  },
  {
    title: 'Growth',
    for: 'Live products that need more users, and users who stick around.',
    get: 'Acquisition and retention strategy; content and social strategy; funnel design; marketing analytics and reporting; partnerships and business development.',
  },
  {
    title: 'Fractional CMO',
    for: 'Founders who need a senior marketing lead but not a full-time hire yet.',
    get: 'All of the above, plus team and agency management, budget planning and a seat at the strategy table.',
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="services-heading">How I can help</SectionHeading>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
              >
                <span className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {service.title}
                </h3>
                <dl className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed">
                  <div>
                    <dt className="font-medium text-foreground">For:</dt>
                    <dd className="mt-1 text-muted-foreground">{service.for}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">You get:</dt>
                    <dd className="mt-1 text-muted-foreground">{service.get}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-accent p-6 md:p-8">
            <p className="text-lg text-foreground">
              {"Not sure what you need? That's what the intro call is for."}
            </p>
            <BookButton />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
