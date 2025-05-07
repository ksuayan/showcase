"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/i18n/language-context"
import type { JSX } from "react"

export function MobileMenu(): JSX.Element {
  const { t } = useLanguage()
  const navData = t.navigation
  const topicsInfo = t.topics
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false)

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="md:hidden" disabled>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
    )
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      <div className={`mobile-menu ${isOpen ? "" : "hidden"}`}>
        <div className="mobile-menu-header">
          <h2 className="text-2xl font-serif">{navData.logo.text}</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="mobile-menu-items">
          {navData.links.map((link, index) => (
            <Link key={index} href={link.url} onClick={() => setIsOpen(false)}>
              {link.text}
            </Link>
          ))}

          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg mb-4">{t.common.exploreTopics}</h3>
            <div className="flex flex-col gap-4">
              {topicsInfo.topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="mobile-menu-footer">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
