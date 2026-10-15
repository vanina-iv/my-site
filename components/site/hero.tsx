import Image from 'next/image'
import { BookButton, Container } from './primitives'

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-12 md:pb-28 md:pt-20">
      <Container className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            Vanina Ivanova
          </p>
          <h1 className="text-[2.75rem] font-bold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Strategic marketing leadership for{' '}
            <span className="text-primary">blockchain teams</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I help crypto founders raise, launch and grow, with CMO-level strategy and
            someone who actually ships it. 10+ years in blockchain, 20 in marketing.
          </p>
          <BookButton className="mt-10" />
        </div>

        <figure className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-secondary shadow-[0_30px_60px_-30px_rgba(122,50,32,0.35)]">
            <Image
              src="/images/vanina-warm.png"
              alt="Vanina Ivanova"
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
          <figcaption className="absolute -bottom-5 left-3 rounded-2xl sm:-left-4 bg-card px-4 py-3 text-sm shadow-lg ring-1 ring-border md:-left-10">
            <span className="block font-heading text-lg font-semibold text-foreground">
              Vanina Ivanova
            </span>
            <span className="text-muted-foreground">Ex-CMO, AdEx and Ambire</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
