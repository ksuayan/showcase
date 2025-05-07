"use client"

import { SiteHeader } from "@/components/site-header"
import { ArticlesList } from "@/components/articles-list"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllArticles } from "@/lib/data"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { useEffect, useState } from "react"

export default function ArticlesPage() {
  const { t } = useLanguage()
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    setArticles(getAllArticles())
  }, [])

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="main-content" className="container mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> {t.common.backToHome}
        </Link>

        <h1 className="text-4xl font-serif mb-8">{t.navigation.links[1].text}</h1>

        <ArticlesList articles={articles} />
      </main>

      <SiteFooter />
    </div>
  )
}
