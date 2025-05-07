import { SiteHeader } from "@/components/site-header"
import { ArticlesList } from "@/components/articles-list"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { topics, getArticlesByCategory } from "@/lib/data"
import { SiteFooter } from "@/components/site-footer"
import type { SlugParams } from "@/lib/types"

export async function generateMetadata({ params }: SlugParams) {
  const topic = topics.find((t) => t.slug === params.slug)

  if (!topic) {
    return {
      title: "Topic Not Found",
    }
  }

  return {
    title: `${topic.name} | Visual Portfolio`,
    description: `Articles and projects related to ${topic.name.toLowerCase()}`,
    keywords: [topic.name, "articles", "projects", "portfolio"],
  }
}

export default function TopicPage({ params }: SlugParams) {
  const topic = topics.find((t) => t.slug === params.slug)

  if (!topic) {
    notFound()
  }

  // Get articles for this topic
  const topicArticles = getArticlesByCategory(topic.name)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-serif mb-4">{topic.name}</h1>
          <p className="text-xl text-muted-foreground">{topic.description}</p>
        </div>

        {topicArticles.length > 0 ? (
          <ArticlesList articles={topicArticles} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found for this topic.</p>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
