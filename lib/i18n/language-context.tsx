"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Locale, Translations } from "./types"

// Import translations
import enFooter from "@/data/en/footer.json"
import enTopics from "@/data/en/topics.json"
import enHero from "@/data/en/hero.json"
import enNavigation from "@/data/en/navigation.json"
import enCommon from "@/data/en/common.json"

import esFooter from "@/data/es/footer.json"
import esTopics from "@/data/es/topics.json"
import esHero from "@/data/es/hero.json"
import esNavigation from "@/data/es/navigation.json"
import esCommon from "@/data/es/common.json"

import jaFooter from "@/data/ja/footer.json"
import jaTopics from "@/data/ja/topics.json"
import jaHero from "@/data/ja/hero.json"
import jaNavigation from "@/data/ja/navigation.json"
import jaCommon from "@/data/ja/common.json"

// Combine translations
const translations: Record<Locale, Translations> = {
  en: {
    footer: enFooter,
    topics: enTopics,
    hero: enHero,
    navigation: enNavigation,
    common: enCommon,
  },
  es: {
    footer: esFooter,
    topics: esTopics,
    hero: esHero,
    navigation: esNavigation,
    common: esCommon,
  },
  ja: {
    footer: jaFooter,
    topics: jaTopics,
    hero: jaHero,
    navigation: jaNavigation,
    common: jaCommon,
  },
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  locales: Locale[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_KEY = "preferred-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get the language from localStorage, fallback to browser language or default to 'en'
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const savedLocale = localStorage.getItem(LANGUAGE_KEY) as Locale | null

    if (savedLocale && Object.keys(translations).includes(savedLocale)) {
      setLocaleState(savedLocale)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0]
      if (browserLang && Object.keys(translations).includes(browserLang as Locale)) {
        setLocaleState(browserLang as Locale)
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LANGUAGE_KEY, newLocale)

    // Update the html lang attribute
    if (document.documentElement) {
      document.documentElement.lang = newLocale
    }
  }

  // Only render children after we've determined the language
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale],
        locales: Object.keys(translations) as Locale[],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
