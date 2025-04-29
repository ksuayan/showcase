import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ArticlesList } from "@/components/articles-list"
import { getAllProjects } from "@/lib/mongodb"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// This would normally come from your MongoDB database
const articles = [
  {
    _id: "article1",
    title: "The Art of Composition in Photography",
    slug: "art-of-composition-photography",
    excerpt:
      "Learn the fundamental principles of composition that can transform your photography from ordinary to extraordinary.",
    date: "2023-10-15",
    coverImage: "/placeholder.svg?height=400&width=600",
    categories: ["Photography", "Tutorials"],
  },
  {
    _id: "article2",
    title: "Understanding Light in Videography",
    slug: "understanding-light-videography",
    excerpt:
      "Explore how different lighting techniques can dramatically impact the mood and quality of your video projects.",
    date: "2023-09-28",
    coverImage: "/placeholder.svg?height=410&width=610",
    categories: ["Videography", "Lighting"],
  },
  {
    _id: "article3",
    title: "The Evolution of Audio Recording",
    slug: "evolution-audio-recording",
    excerpt:
      "A journey through the history of audio recording technology and how it has shaped modern music production.",
    date: "2023-09-10",
    coverImage: "/placeholder.svg?height=420&width=620",
    categories: ["Audio", "Technology"],
  },
]

export default async function Home() {
  // This would normally fetch from MongoDB
  const projects = await getAllProjects(3).catch(() => [
    {
      _id: "project1",
      title: "Urban Photography Series",
      slug: "urban-photography-series",
      excerpt: "A collection of urban landscape photography exploring city architecture and street life.",
      date: "2023-10-15",
      coverImage: "/placeholder.svg?height=600&width=800",
      tags: ["photography", "urban", "architecture"],
      mediaType: "photography",
    },
    {
      _id: "project2",
      title: "Ambient Soundscapes",
      slug: "ambient-soundscapes",
      excerpt:
        "An audio project capturing the natural and urban environments through field recordings and composition.",
      date: "2023-09-20",
      coverImage: "/placeholder.svg?height=610&width=810",
      tags: ["audio", "field-recording", "composition"],
      mediaType: "audio",
    },
    {
      _id: "project3",
      title: "Documentary Short: City Life",
      slug: "documentary-short-city-life",
      excerpt: "A short documentary exploring the rhythms and patterns of daily life in major urban centers.",
      date: "2023-08-05",
      coverImage: "/placeholder.svg?height=620&width=820",
      tags: ["video", "documentary", "urban"],
      mediaType: "video",
    },
  ])

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <section className="py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif leading-tight">Visual Stories & Creative Code</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                A showcase of photography, videos, and audio projects with a focus on visual storytelling.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Portfolio showcase"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Latest Articles</h2>
            <Button variant="ghost" asChild>
              <Link href="/articles" className="flex items-center gap-2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ArticlesList articles={articles} articlesPerPage={3} />
        </section>
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
