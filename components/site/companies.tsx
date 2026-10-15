import { Container } from './primitives'
import { Reveal } from './reveal'

type Company = {
  name: string
  logo: string
  width: number
  height: number
  sizeClass: string
}

const companies: Company[] = [
  { name: 'AdEx Network', logo: '/logos/adex.png', width: 978, height: 394, sizeClass: 'h-9 md:h-10' },
  { name: 'Ambire Wallet', logo: '/logos/ambire.png', width: 952, height: 405, sizeClass: 'h-9 md:h-10' },
  { name: 'Veridise', logo: '/logos/veridise.png', width: 1017, height: 243, sizeClass: 'h-7 md:h-8' },
  { name: 'Serotonin', logo: '/logos/serotonin.png', width: 855, height: 863, sizeClass: 'h-12 md:h-14' },
  { name: 'Chainflow', logo: '/logos/chainflow.png', width: 915, height: 266, sizeClass: 'h-7 md:h-8' },
  { name: 'Neon EVM', logo: '/logos/neon-evm.png', width: 866, height: 120, sizeClass: 'h-[18px] md:h-5' },
]

export function Companies() {
  return (
    <section aria-labelledby="companies-heading" className="border-y border-border py-14">
      <Container>
        <Reveal>
          <h2
            id="companies-heading"
            className="text-center text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground"
          >
            Companies I have worked with
          </h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between">
            {companies.map((company) => (
              <li key={company.name} className="flex h-14 items-center">
                <img
                  src={company.logo || '/placeholder.svg'}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  loading="lazy"
                  decoding="async"
                  className={`${company.sizeClass} w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
