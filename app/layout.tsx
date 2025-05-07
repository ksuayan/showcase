import type React from "react"
import "./globals.css"
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { SkipToContent } from "@/components/skip-to-content"
import { Analytics } from "@/components/analytics"
import { LoadingTransition } from "@/components/loading-transition"
import { ServiceWorkerRegistration } from "@/components/service-worker-registration"
import type { Metadata } from "next"
import { Suspense } from "react"

// Define fonts with proper subsets and weights
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
})

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-serif",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Visual Portfolio",
    default: "Visual Portfolio",
  },
  description: "A showcase of photography, videos, and audio projects with a focus on visual storytelling.",
  keywords: ["portfolio", "photography", "video", "audio", "visual", "creative"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
      "ja-JP": "/ja",
    },
  },
  manifest: "/manifest.json",
  themeColor: "#4a6fa5",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a6fa5" />
      </head>
      <body className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <LanguageProvider>
            <SkipToContent />
            <LoadingTransition />
            <Suspense>{children}</Suspense>
            <Analytics />
            <ServiceWorkerRegistration />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
