import { getAllProjects } from "@/lib/mongodb"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="container mx-auto py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <h1 className="text-4xl font-serif font-bold mb-8">All Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}
