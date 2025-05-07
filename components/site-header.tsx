"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { MobileMenu } from "./mobile-menu"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/i18n/language-context"
import type { JSX } from "react"

export function SiteHeader(): JSX.Element {
  const { t } = useLanguage()
  const data = t.navigation

  return (
    <header className="container mx-auto py-6">
      <div className="flex justify-between items-center">
        <Link href={data.logo.url} className="text-2xl font-serif">
          {data.logo.text}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {data.links.map((link, index) => (
              <Link key={index} href={link.url} className="font-medium hover:text-primary transition-colors">
                {link.text}
              </Link>
            ))}
          </nav>
          <LanguageSelector />
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
