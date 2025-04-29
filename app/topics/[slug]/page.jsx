import { SiteHeader } from "@/components/site-header"
import { ArticlesList } from "@/components/articles-list"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { topics, articles } from "@/data/topics"

/**
 * Generates metadata for the topic page
 * @param {Object} params - The route parameters
 * @param {string} params.slug - The topic slug
 * @returns {Promise<Object>} The metadata object
 */
export async function generateMetadata({ params }) {
  const { slug } = await params
  const topic = topics.find((t) => t.slug === slug)

  if (!topic) {
    return {
      title: 'Topic Not Found',
      description: 'The requested topic could not be found.',
    }
  }

  return {
    title: topic.name,
    description: topic.description || `Articles and projects related to ${topic.name.toLowerCase()}`,
    keywords: [topic.name, "articles", "projects", "portfolio"],
  }
}

/**
 * Filters articles by topic name (case-insensitive)
 * @param {Array} articles - The articles to filter
 * @param {string} topicName - The topic name to filter by
 * @returns {Array} Filtered articles
 */
function filterArticlesByTopic(articles, topicName) {
  return articles.filter((article) =>
    article.categories.some((category) => 
      category.toLowerCase() === topicName.toLowerCase()
    )
  )
}

/**
 * Topic page component
 * @param {Object} props - Component props
 * @param {Object} props.params - Route parameters
 * @param {string} props.params.slug - The topic slug
 * @returns {JSX.Element} The rendered topic page
 */
export default async function TopicPage({ params }) {
  const { slug } = await params
  const topic = topics.find((t) => t.slug === slug)

  if (!topic) {
    notFound()
  }

  const topicArticles = filterArticlesByTopic(articles, topic.name)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-4xl font-serif mb-8">{topic.name}</h1>
        
        {topic.description && (
          <p className="text-muted-foreground mb-8">{topic.description}</p>
        )}

        {topicArticles.length > 0 ? (
          <ArticlesList articles={topicArticles} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found for this topic.</p>
          </div>
        )}
      </main>

      <footer className="border-t py-12 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </Link>
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </Link>
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
