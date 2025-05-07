"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { localeMetadata } from "@/lib/i18n/types"

export function LanguageSelector() {
  const { locale, setLocale, t, locales } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t.common.languageSelector} className="relative">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t.common.languageSelector}</span>
          <span className="absolute -bottom-1 -right-1 text-xs">{localeMetadata[locale].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => {
              setLocale(l)
              setOpen(false)
            }}
            className="flex items-center gap-2"
            aria-current={locale === l ? "true" : "false"}
          >
            <span>{localeMetadata[l].flag}</span>
            <span>{localeMetadata[l].nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
