import { SiteHeader } from "@/components/site-header"
import { MDXContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// In a real app, you would fetch this from MongoDB
async function getArticleBySlug(slug) {
  // Mock data for demonstration
  const articles = [
    {
      _id: "article1",
      title: "The Art of Composition in Photography",
      slug: "art-of-composition-photography",
      excerpt:
        "Learn the fundamental principles of composition that can transform your photography from ordinary to extraordinary.",
      date: "2023-10-15",
      coverImage: "/placeholder.svg?height=400&width=600",
      categories: ["Photography", "Art", "Tutorials"],
      content: `
# The Art of Composition in Photography

Good composition is essential to creating compelling photographs. It's about arranging elements within your frame to create a visually pleasing and impactful image.

## The Rule of Thirds

One of the most well-known composition techniques is the rule of thirds. Imagine your frame divided into a 3x3 grid. Placing key elements along these lines or at their intersections often creates a more balanced and interesting image.

<YouTube id="dQw4w9WgXcQ" title="Understanding the Rule of Thirds" />

## Leading Lines

Leading lines are lines within an image that guide the viewer's eye toward the main subject or through the frame. These can be roads, fences, rivers, or any linear element.

## Framing

Using elements in the foreground to frame your main subject can add depth and context to your image.

<Vimeo id="76979871" title="Framing Techniques in Photography" />

## Balance and Symmetry

Balance in composition refers to the visual weight of elements in your frame. Symmetrical compositions can create a sense of harmony, while asymmetrical compositions can be more dynamic.
      `,
    },
    // Add more mock articles as needed
  ]

  return articles.find((article) => article.slug === slug)
}

export async function generateMetadata({ params }) {
  const article = await getArticleBySlug(params.slug)

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

export default async function ArticlePage({ params }) {
  const article = await getArticleBySlug(params.slug)

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

      <footer className="border-t py-12 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
