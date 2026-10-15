'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { copyText } from '@/lib/utils'

export function CopyIntro({ text }: { text: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const copied = status === 'copied'

  const copy = async () => {
    setStatus((await copyText(text)) ? 'copied' : 'failed')
    setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <figure className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <figcaption className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-foreground">Copy-paste intro</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          {copied ? (
            <Check aria-hidden="true" className="size-4 text-primary" />
          ) : (
            <Copy aria-hidden="true" className="size-4" />
          )}
          {copied ? 'Copied' : status === 'failed' ? 'Select & copy' : 'Copy'}
        </button>
      </figcaption>
      <blockquote className="mt-4 select-all leading-relaxed text-muted-foreground">{text}</blockquote>
      <p aria-live="polite" className="sr-only">
        {copied ? 'Intro copied to clipboard' : status === 'failed' ? 'Copy failed, select the text to copy it' : ''}
      </p>
    </figure>
  )
}
