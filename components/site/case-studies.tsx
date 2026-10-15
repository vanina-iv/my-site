'use client'

import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { X } from 'lucide-react'
import { caseStudies, type CaseStudy } from '@/src/data/caseStudies'
import { cn } from '@/lib/utils'
import { BookButton, Container, SectionHeading } from './primitives'
import { Reveal } from './reveal'

const HASH_PREFIX = '#case-studies/'
const DESKTOP_QUERY = '(min-width: 1024px)'

function useColumns() {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(DESKTOP_QUERY)
      mql.addEventListener('change', callback)
      return () => mql.removeEventListener('change', callback)
    },
    () => (window.matchMedia(DESKTOP_QUERY).matches ? 3 : 1),
    () => 3,
  )
}

function slugFromHash() {
  const hash = window.location.hash
  if (!hash.startsWith(HASH_PREFIX)) return null
  const slug = decodeURIComponent(hash.slice(HASH_PREFIX.length))
  return caseStudies.some((s) => s.slug === slug) ? slug : null
}

type Active = { slug: string; open: boolean } | null

export function CaseStudies() {
  const [active, setActive] = useState<Active>(null)
  const columns = useColumns()

  useEffect(() => {
    const sync = () => {
      const slug = slugFromHash()
      setActive(slug ? { slug, open: true } : null)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const toggle = (slug: string) => {
    if (active?.slug === slug && active.open) {
      close()
      return
    }
    setActive({ slug, open: true })
    history.replaceState(null, '', `${HASH_PREFIX}${slug}`)
  }

  const close = useCallback(() => {
    setActive((prev) => (prev ? { ...prev, open: false } : prev))
    history.replaceState(null, '', '#case-studies')
  }, [])

  const handleExited = useCallback(() => setActive((prev) => (prev && !prev.open ? null : prev)), [])

  const activeIndex = active ? caseStudies.findIndex((s) => s.slug === active.slug) : -1
  const panelAfterIndex =
    activeIndex === -1
      ? -1
      : Math.min(Math.floor(activeIndex / columns) * columns + columns - 1, caseStudies.length - 1)

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-card py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="case-studies-heading" className="max-w-3xl">
            Experience built for a fast-moving industry
          </SectionHeading>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {
              "Blockchain moves quickly. I bring more than a decade of experience in the space, backed by 20 years in marketing. I've worked with projects across fundraising, launches, and growth, helping teams turn complex products and markets into focused marketing plans."
            }
          </p>

          <h3 className="mt-14 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Case studies
          </h3>

          <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-6">
            {caseStudies.map((study, i) => {
              const isActive = active?.slug === study.slug && active.open
              return (
                <Fragment key={study.slug}>
                  <button
                    type="button"
                    onClick={() => toggle(study.slug)}
                    aria-expanded={isActive}
                    aria-controls={`case-study-panel-${study.slug}`}
                    className={cn(
                      'group flex flex-col items-start rounded-2xl border bg-background p-6 text-left transition-colors md:p-8',
                      isActive
                        ? 'border-primary'
                        : 'border-border hover:border-primary/40',
                    )}
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {study.client}
                    </span>
                    <span className="mt-3 font-heading text-xl lg:min-h-[2lh] font-semibold leading-snug tracking-tight text-foreground">
                      {study.title}
                    </span>
                    <span className="mt-8 font-heading text-5xl font-bold tracking-tight text-primary md:text-6xl">
                      {study.highlightValue}
                    </span>
                    <span className="mt-2 flex-1 text-sm text-muted-foreground">
                      {study.highlightLabel}
                    </span>
                    <span className="mt-8 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
                      {isActive ? 'Close case study −' : 'Read case study +'}
                    </span>
                  </button>

                  {i === panelAfterIndex && active && (
                    <CaseStudyPanel
                      key={active.slug}
                      study={caseStudies[activeIndex]}
                      open={active.open}
                      onClose={close}
                      onExited={handleExited}
                    />
                  )}
                </Fragment>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function CaseStudyPanel({
  study,
  open,
  onClose,
  onExited,
}: {
  study: CaseStudy
  open: boolean
  onClose: () => void
  onExited: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const expanded = open && entered

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'grid-template-rows') return
    if (expanded) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    } else if (!open) {
      onExited()
    }
  }

  const blocks = [
    { label: 'Problem', text: study.problem },
    { label: 'Solution', text: study.solution },
    { label: 'Results', text: study.results },
  ]

  return (
    <div
      ref={ref}
      id={`case-study-panel-${study.slug}`}
      role="region"
      aria-label={`${study.client} case study`}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        'col-span-full grid scroll-mt-24 transition-[grid-template-rows,opacity] duration-500 ease-out',
        expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
      )}
    >
      <div className="overflow-hidden">
        <article className="relative rounded-2xl border border-border bg-background p-6 md:p-10">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:right-6 md:top-6"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Close case study</span>
          </button>

          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {study.client}
          </p>
          <h4 className="mt-3 max-w-2xl pr-12 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {study.title}
          </h4>

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {blocks.map((block) => (
              <div key={block.label} className="border-t border-border pt-5">
                <h5 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {block.label}
                </h5>
                <p className="mt-3 leading-relaxed text-muted-foreground">{block.text}</p>
              </div>
            ))}
          </div>

          <BookButton className="mt-10" />
        </article>
      </div>
    </div>
  )
}
