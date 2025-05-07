import type { FooterData, TopicsData, HeroData, NavigationData } from "@/lib/types"

export type Locale = "en" | "es" | "ja"

export interface Translations {
  footer: FooterData
  topics: TopicsData
  hero: HeroData
  navigation: NavigationData
  common: {
    languageSelector: string
    skipToContent: string
    darkMode: string
    lightMode: string
    systemMode: string
    toggleTheme: string
    viewAll: string
    showMore: string
    showLess: string
    backToHome: string
    latestArticles: string
    exploreTopics: string
  }
}

export interface LocaleMetadata {
  name: string
  nativeName: string
  flag: string
}

export const localeMetadata: Record<Locale, LocaleMetadata> = {
  en: {
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
  es: {
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
  },
  ja: {
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
  },
}
