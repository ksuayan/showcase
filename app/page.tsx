"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArticlesList } from "@/components/articles-list"
import { getAllArticles } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TopicsGrid } from "@/components/topics-grid"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { useLanguage } from "@/lib/i18n/language-context"
import { useEffect, useState } from "react"

export default function Home() {
  const { t } = useLanguage()
  const [articles, setArticles] = useState<any[]>([])

  // Get data from our static data source
  useEffect(() => {
    setArticles(getAllArticles(3))
  }, [])

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="main-content" className="container mx-auto py-12">
        <HeroSection />

        <section className="py-12">
          <h2 className="text-3xl font-serif mb-8">{t.common.exploreTopics}</h2>
          <TopicsGrid />
        </section>

        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">{t.common.latestArticles}</h2>
            <Button variant="ghost" asChild>
              <Link href="/articles" className="flex items-center gap-2">
                {t.common.viewAll} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ArticlesList articles={articles} articlesPerPage={3} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
