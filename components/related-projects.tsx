import { ProjectCard } from "./project-card"
import type { RelatedProjectsProps } from "@/lib/types"
import type { JSX } from "react"

export function RelatedProjects({ projects }: RelatedProjectsProps): JSX.Element {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}
