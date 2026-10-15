import { ArrowUpRight } from 'lucide-react'
import { BOOKING_URL } from '@/src/config'
import { cn } from '@/lib/utils'

export function LinkButton({
  href,
  size = 'md',
  external = true,
  className,
  children,
}: {
  href: string
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary/90',
        size === 'sm' && 'h-9 px-4 text-sm',
        size === 'md' && 'h-12 px-6 text-base',
        size === 'lg' && 'h-14 px-8 text-lg',
        className,
      )}
    >
      {children}
      {external && (
        <>
          <ArrowUpRight aria-hidden="true" className="size-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </a>
  )
}

export function BookButton({
  size = 'md',
  className,
}: {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  return (
    <LinkButton href={BOOKING_URL} size={size} className={className}>
      Book an intro call
    </LinkButton>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground',
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  )
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1100px] px-4 md:px-8', className)}>
      {children}
    </div>
  )
}

export function SectionHeading({
  id,
  children,
  className,
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      id={id}
      className={cn(
        'text-3xl font-bold text-foreground md:text-[2.75rem] md:leading-[1.1]',
        className,
      )}
    >
      {children}
    </h2>
  )
}
