import { BookButton, Container, SectionHeading } from './primitives'
import { Reveal } from './reveal'

const steps = [
  {
    title: 'Intro call (30 minutes, free).',
    text: "We talk about where the project is, what's blocking growth, and whether I'm the right fit. If I'm not, I'll tell you.",
  },
  {
    title: 'Audit & strategy (weeks 1–2).',
    text: 'I dig into your positioning, channels, community and competitors, then deliver a plan with priorities, owners and targets.',
  },
  {
    title: 'Execution (weeks 3–12).',
    text: 'We run the plan together. I lead, your team and partners build, and you get a short weekly update with what shipped and what moved.',
  },
  {
    title: 'Monthly review.',
    text: "We look at the numbers, keep what works, cut what doesn't, and set the next month's focus.",
  },
]

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="process-heading">{"How we'll work together"}</SectionHeading>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {
              "We'll start by understanding your product, goals, audience, and current challenges. From there, I'll recommend the right priorities and scope, then work with your team on a clear plan and its execution."
            }
          </p>
          <p className="mt-6 font-medium text-foreground">{"Here's what happens step by step:"}</p>

          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col border-t-2 border-foreground pt-6">
                <span className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-border bg-secondary/60 p-6 md:p-8">
            <p className="leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Retainer note:</strong> Crypto
              moves fast, but results take a full cycle. I work on a 3-month minimum, so we have
              time to plan, launch and measure properly. After that, we continue month to month.
            </p>
          </div>

          <BookButton className="mt-10" />
        </Reveal>
      </Container>
    </section>
  )
}
