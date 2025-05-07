"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { OptimizedImage } from "./optimized-image"
import type { JSX } from "react"

export function HeroSection(): JSX.Element {
  const { t } = useLanguage()
  const data = t.hero

  return (
    <section className="py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">{data.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{data.description}</p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href={data.primaryButton.url}>{data.primaryButton.text}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={data.secondaryButton.url}>{data.secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <OptimizedImage
            src={data.image || "/placeholder.svg?height=600&width=800"}
            alt={data.imageAlt}
            className="w-full h-auto object-cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
