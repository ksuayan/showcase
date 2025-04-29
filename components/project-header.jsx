import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ProjectHeader({ project }) {
  return (
    <div>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <h1 className="text-4xl font-serif tracking-wide">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4 text-muted-foreground">
        <span>{formatDate(project.date)}</span>
        <span>•</span>
        <span>{project.mediaType}</span>
      </div>

      <p className="mt-6 text-xl">{project.excerpt}</p>
    </div>
  )
}
