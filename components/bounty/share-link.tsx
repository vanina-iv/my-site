'use client'

import { useState } from 'react'
import { copyText } from '@/lib/utils'

export function ShareLink({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // Share sheet dismissed
      }
      return
    }
    if (await copyText(url)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={share}
        className="font-medium text-primary underline underline-offset-4 hover:decoration-2"
      >
        Share this page
      </button>
      <span aria-live="polite" className="text-foreground">
        {copied ? ' (link copied)' : ''}
      </span>
    </>
  )
}
