import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { generateSiteIndex } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Site Index | Visual Portfolio",
  description: "A complete index of all pages on the Visual Portfolio site.",
}

export default function SiteIndexPage() {
  const siteIndex = generateSiteIndex()

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-4xl font-serif mb-8">Site Index</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-serif mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {siteIndex.pages.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-primary hover:underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Articles</h2>
            <ul className="space-y-2">
              {siteIndex.articles.map((article) => (
                <li key={article.url}>
                  <Link href={article.url} className="text-primary hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Topics</h2>
            <ul className="space-y-2">
              {siteIndex.topics.map((topic) => (
                <li key={topic.url}>
                  <Link href={topic.url} className="text-primary hover:underline">
                    {topic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Media</h2>
            <ul className="space-y-2">
              {siteIndex.media.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-primary hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
