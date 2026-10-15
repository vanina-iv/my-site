import { Mail, Send } from 'lucide-react'
import { EMAIL, LINKEDIN_URL, SUBSTACK_URL, TELEGRAM_URL, X_URL } from '@/src/config'
import { BookButton, Container } from './primitives'
import { Reveal } from './reveal'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const messageLinks = [
  { href: TELEGRAM_URL, label: 'Telegram', Icon: Send, external: true },
  { href: EMAIL, label: 'Email', Icon: Mail, external: false },
  { href: X_URL, label: 'X (Twitter)', Icon: XIcon, external: true },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col items-center rounded-[2rem] bg-card px-6 py-14 text-center ring-1 ring-border md:px-12 md:py-20">
          <h2
            id="contact-heading"
            className="max-w-3xl text-4xl font-bold text-foreground md:text-6xl"
          >
            {"Let's talk about your project"}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {
              "Raising, launching or stuck after launch? Book a free 30-minute call. You'll leave with at least one idea you can use, whether we work together or not."
            }
          </p>
          <BookButton size="lg" className="mt-10" />

          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Prefer to message?</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-x-2">
              {messageLinks.map(({ href, label, Icon, external }, i) => (
                <li key={label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="hidden text-border sm:inline">
                      |
                    </span>
                  )}
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 px-2 py-1 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export function Footer() {
  const links = [
    { href: TELEGRAM_URL, label: 'Telegram' },
    { href: X_URL, label: 'X' },
    { href: SUBSTACK_URL, label: 'Newsletter' },
    { href: LINKEDIN_URL, label: 'LinkedIn' },
  ]
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span>{'© 2026 Vanina Ivanova'}</span>
          {links.map((link) => (
            <span key={link.label} className="flex items-center gap-3">
              <span aria-hidden="true">·</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </Container>
    </footer>
  )
}
