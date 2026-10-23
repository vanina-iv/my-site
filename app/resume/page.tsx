import type { Metadata } from 'next'
import { Download, Mail } from 'lucide-react'
import { Footer } from '@/components/site/contact'
import { Header } from '@/components/site/header'
import { Container, Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { EMAIL, LINKEDIN_URL, SITE_URL } from '@/src/config'
import { RESUME_PDF, resume, type Role } from '@/src/data/resume'

const PAGE_TITLE = 'Resume - Vanina Ivanova'
const PAGE_DESCRIPTION = `${resume.headline}. ${resume.summary.split('. ')[0]}.`

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/resume' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/resume`,
    siteName: 'Vanina Ivanova',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    creator: '@inks',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function ResumeSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section aria-labelledby={id} className="border-t border-border">
      <Reveal className="grid gap-6 py-12 md:grid-cols-[220px_1fr] md:gap-12 md:py-16">
        <h2
          id={id}
          className="text-sm font-semibold uppercase tracking-[0.14em] text-primary md:pt-1"
        >
          {title}
        </h2>
        <div>{children}</div>
      </Reveal>
    </section>
  )
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="flex flex-col gap-10">
      {roles.map((role) => (
        <li key={`${role.company}-${role.title}`}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
              {role.company} <span className="font-normal text-muted-foreground">-</span>{' '}
              {role.title}
            </h3>
            <p className="shrink-0 text-sm text-muted-foreground">
              {role.location} | {role.dates}
            </p>
          </div>
          <ul className="mt-4 flex flex-col gap-2.5">
            {role.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 leading-relaxed text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

export default function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <section id="top" className="pb-12 pt-12 md:pb-16 md:pt-20">
          <Container>
            <Eyebrow>Resume</Eyebrow>
            <h1 className="text-[2.75rem] font-bold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {resume.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">{resume.headline}</p>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <li>
                <a
                  href={EMAIL}
                  className="inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  {EMAIL.replace('mailto:', '')}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                >
                  <LinkedinIcon className="size-4" />
                  linkedin.com/in/vaninaivanova
                </a>
              </li>
              <li className="text-muted-foreground">{resume.timezone}</li>
            </ul>

            <a
              href={RESUME_PDF}
              download
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download aria-hidden="true" className="size-4" />
              Download PDF
            </a>
          </Container>
        </section>

        <Container className="pb-20 md:pb-28">
          <ResumeSection id="summary-heading" title="Professional summary">
            <p className="text-lg leading-relaxed text-muted-foreground">{resume.summary}</p>
          </ResumeSection>

          <ResumeSection id="competencies-heading" title="Core competencies">
            <dl className="flex flex-col gap-5">
              {resume.competencies.map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-foreground">{item.label}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          <ResumeSection id="experience-heading" title="Professional experience">
            <RoleList roles={resume.experience} />
          </ResumeSection>

          <ResumeSection id="earlier-heading" title="Earlier growth marketing experience">
            <p className="mb-8 italic leading-relaxed text-muted-foreground">
              {resume.earlierIntro}
            </p>
            <RoleList roles={resume.earlier} />
            <p className="mt-8 italic leading-relaxed text-muted-foreground">
              {resume.earlierNote}
            </p>
          </ResumeSection>

          <ResumeSection id="community-heading" title="Community & thought leadership">
            <ul className="flex flex-col gap-3">
              {resume.community.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection id="education-heading" title="Education & certifications">
            <ul className="flex flex-col gap-3">
              {resume.education.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </ResumeSection>
        </Container>
      </main>
      <Footer />
    </>
  )
}
