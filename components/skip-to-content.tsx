"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function SkipToContent() {
  const { t } = useLanguage()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:top-0 focus:left-0 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {t.common.skipToContent}
    </a>
  )
}
