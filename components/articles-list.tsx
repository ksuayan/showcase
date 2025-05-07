"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { ArticlesListProps } from "@/lib/types"

export function ArticlesList({ articles, articlesPerPage = 6 }: ArticlesListProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = articles.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <Card key={article._id} className="overflow-hidden transition-all hover:shadow-lg">
            <Link href={`/articles/${article.slug}`}>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
            </Link>
            <CardContent className="p-6">
              <div className="flex gap-2 mb-2">
                {article.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
              <Link href={`/articles/${article.slug}`}>
                <h3 className="text-xl font-serif mb-2 hover:text-primary transition-colors">{article.title}</h3>
              </Link>
              <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <span className="text-sm text-muted-foreground">{formatDate(article.date)}</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
