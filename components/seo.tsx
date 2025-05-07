import type { Metadata } from "next"

interface SeoProps {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  type?: "website" | "article" | "profile"
  locale?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  type = "website",
  locale = "en",
  noIndex = false,
}: SeoProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example.com"

  return {
    title,
    description,
    keywords,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Visual Portfolio",
      locale,
      type,
      ...(image && {
        images: [
          {
            url: image.startsWith("http") ? image : `${baseUrl}${image}`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [image.startsWith("http") ? image : `${baseUrl}${image}`],
      }),
    },
  }
}
