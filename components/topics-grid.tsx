"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { OptimizedImage } from "./optimized-image"
import type { JSX } from "react"

export function TopicsGrid(): JSX.Element {
  const { t } = useLanguage()
  const data = t.topics
  const [expanded, setExpanded] = useState<boolean>(false)

  // Show only 3 topics when collapsed on mobile
  const visibleTopics = expanded ? data.topics : data.topics.slice(0, 3)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleTopics.map((topic, index) => (
          <Link key={topic.slug} href={`/topics/${topic.slug}`}>
            <div className="group relative overflow-hidden rounded-lg border hover:border-primary transition-colors">
              <div className="aspect-video overflow-hidden">
                <OptimizedImage
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{topic.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show toggle button on mobile only when there are more topics */}
      {data.topics.length > 3 && (
        <div className="flex justify-center md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="flex items-center gap-1">
            {expanded ? (
              <>
                {t.common.showLess} <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                {t.common.showMore} <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
