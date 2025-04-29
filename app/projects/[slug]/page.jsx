import Link from "next/link"
import { getMdxBySlug } from "@/lib/mdx"
import { getProjectBySlug, getRelatedProjects } from "@/lib/mongodb"
import { notFound } from "next/navigation"
import { MDXContent } from "@/components/mdx-content"
import { MediaGallery } from "@/components/media-gallery"
import { ProjectHeader } from "@/components/project-header"
import { RelatedProjects } from "@/components/related-projects"
import { SiteHeader } from "@/components/site-header"
import { MapPin } from "lucide-react"

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug).catch(() => null)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Visual Portfolio`,
    description: project.excerpt,
    keywords: project.tags,
    openGraph: {
      title: `${project.title} | Visual Portfolio`,
      description: project.excerpt,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }) {
  const project = await getProjectBySlug(params.slug).catch(() => {
    // For demo purposes, create a mock project
    return {
      _id: "project1",
      title: "Urban Photography Series",
      slug: "urban-photography-series",
      excerpt: "A collection of urban landscape photography exploring city architecture and street life.",
      date: "2023-10-15",
      coverImage: "/placeholder.svg?height=600&width=800",
      tags: ["photography", "urban", "architecture"],
      mediaType: "photography",
      geolocation: {
        city: "New York",
        country: "USA",
        coordinates: {
          latitude: 40.7128,
          longitude: -74.006,
        },
      },
      media: [
        {
          id: "img1",
          type: "image",
          url: "/placeholder.svg?height=600&width=800",
          caption: "Downtown Skyline at Sunset",
        },
        {
          id: "img2",
          type: "image",
          url: "/placeholder.svg?height=610&width=810",
          caption: "Street Life in Motion",
        },
        {
          id: "img3",
          type: "image",
          url: "/placeholder.svg?height=620&width=820",
          caption: "Urban Architecture Details",
        },
      ],
    }
  })

  if (!project) {
    notFound()
  }

  const { content } = await getMdxBySlug(params.slug).catch(() => {
    // For demo purposes, return mock content
    return {
      content: `
# Urban Photography Series

This project explores the intersection of architecture, human activity, and light in urban environments.

## Approach

I wanted to capture the city not just as physical structures but as living ecosystems where light, shadow, and human presence create unique moments throughout the day.

\`\`\`jsx
// Example of code used for post-processing
function adjustContrast(image, level) {
  return image.map(pixel => {
    return pixel * level;
  });
}
\`\`\`

The series focuses on three main themes:

1. **Architectural Geometry** - The patterns and shapes formed by buildings
2. **Human Scale** - How people interact with and exist within urban spaces
3. **Light and Shadow** - The dramatic interplay of natural light in the concrete jungle
      `,
    }
  })

  const relatedProjects = await getRelatedProjects(project._id, project.tags).catch(() => [])

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <ProjectHeader project={project} />

        {project.geolocation && (
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {project.geolocation.city}, {project.geolocation.country}
            </span>
          </div>
        )}

        <div className="mt-8">
          <MediaGallery media={project.media} />
        </div>

        <article className="mt-12 prose dark:prose-invert mx-auto">
          <MDXContent content={content} />
        </article>

        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif mb-6">Related Projects</h2>
            <RelatedProjects projects={relatedProjects} />
          </div>
        )}
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
