import type { Project } from "./types"

// This file is intentionally left blank to disable MongoDB integration.
// The application is configured to use static data instead.

export async function getAllProjects(): Promise<Project[]> {
  console.warn(
    "MongoDB is disabled. Using static data. Please check .env file and remove the MONGODB_URI to remove this warning.",
  )
  return []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  console.warn(
    "MongoDB is disabled. Using static data. Please check .env file and remove the MONGODB_URI to remove this warning.",
  )
  return null
}

export async function getRelatedProjects(projectId: string, tags: string[]): Promise<Project[]> {
  console.warn(
    "MongoDB is disabled. Using static data. Please check .env file and remove the MONGODB_URI to remove this warning.",
  )
  return []
}
