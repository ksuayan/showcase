import "./globals.css"
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
})

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-serif",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
})

export const metadata = {
  title: "Visual Portfolio",
  description: "A showcase of photography, videos, and audio projects with a focus on visual storytelling.",
  keywords: ["portfolio", "photography", "video", "audio", "visual", "creative"],
  openGraph: {
    title: "Visual Portfolio",
    description: "A showcase of photography, videos, and audio projects with a focus on visual storytelling.",
    url: "https://your-portfolio-url.com",
    siteName: "Visual Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visual Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Portfolio",
    description: "A showcase of photography, videos, and audio projects with a focus on visual storytelling.",
    images: ["https://your-portfolio-url.com/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
