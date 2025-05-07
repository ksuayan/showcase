import { SiteHeader } from "@/components/site-header"
import { MDXContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/data"
import { SiteFooter } from "@/components/site-footer"
import type { SlugParams } from "@/lib/types"

export async function generateMetadata({ params }: SlugParams) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | Visual Portfolio`,
    description: article.excerpt,
    keywords: article.categories,
    openGraph: {
      title: `${article.title} | Visual Portfolio`,
      description: article.excerpt,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default function ArticlePage({ params }: SlugParams) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to articles
        </Link>

        <article>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.categories.map((category) => (
                  <Link key={category} href={`/topics/${category.toLowerCase()}`}>
                    <Badge variant="secondary">{category}</Badge>
                  </Link>
                ))}
              </div>

              <h1 className="text-4xl font-serif mb-4">{article.title}</h1>

              <p className="text-muted-foreground mb-6">{formatDate(article.date)}</p>

              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <MDXContent content={article.content} />
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
