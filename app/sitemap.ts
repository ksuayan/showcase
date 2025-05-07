import type { MetadataRoute } from "next"
import { generateSiteIndex } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example.com"
  const siteIndex = generateSiteIndex()

  const allItems = [
    ...siteIndex.pages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency || "weekly",
      priority: page.priority || 0.7,
    })),
    ...siteIndex.articles.map((article) => ({
      url: `${baseUrl}${article.url}`,
      lastModified: article.lastModified ? new Date(article.lastModified) : new Date(),
      changeFrequency: article.changeFrequency || "monthly",
      priority: article.priority || 0.6,
    })),
    ...siteIndex.topics.map((topic) => ({
      url: `${baseUrl}${topic.url}`,
      lastModified: new Date(),
      changeFrequency: topic.changeFrequency || "monthly",
      priority: topic.priority || 0.5,
    })),
    ...siteIndex.media.map((media) => ({
      url: `${baseUrl}${media.url}`,
      lastModified: new Date(),
      changeFrequency: media.changeFrequency || "monthly",
      priority: media.priority || 0.5,
    })),
  ]

  return allItems
}
