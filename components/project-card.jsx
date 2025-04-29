import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-serif font-semibold mb-2 hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2">{project.excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        <span className="text-sm text-muted-foreground">{formatDate(project.date)}</span>
        <span className="text-sm font-medium">{project.mediaType}</span>
      </CardFooter>
    </Card>
  )
}
