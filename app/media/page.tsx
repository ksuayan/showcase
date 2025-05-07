"use client"

import { SiteHeader } from "@/components/site-header"
import { PhotoGallery } from "@/components/photo-gallery"
import { MediaGallery } from "@/components/media-gallery"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllProjects, photos } from "@/lib/data"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { useEffect, useState } from "react"

export default function MediaPage() {
  const { t } = useLanguage()
  const [projects, setProjects] = useState<any[]>([])
  const [allMedia, setAllMedia] = useState<any[]>([])

  useEffect(() => {
    const fetchedProjects = getAllProjects()
    setProjects(fetchedProjects)

    // Extract all media items from projects
    setAllMedia(fetchedProjects.flatMap((project) => project.media || []))
  }, [])

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="main-content" className="container mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> {t.common.backToHome}
        </Link>

        <h1 className="text-4xl font-serif mb-8">{t.navigation.links[2].text}</h1>

        <div className="space-y-12">
          <section id="photography">
            <h2 className="text-2xl font-serif mb-6">{t.topics.topics[0].name}</h2>
            <PhotoGallery photos={photos} />
          </section>

          <section id="project-media">
            <h2 className="text-2xl font-serif mb-6">Project Media</h2>
            <MediaGallery media={allMedia} />
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
