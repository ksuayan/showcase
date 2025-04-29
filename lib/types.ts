export interface Project {
  _id: string
  title: string
  slug: string
  excerpt: string
  date: string
  coverImage: string
  tags: string[]
  mediaType: "photography" | "video" | "audio" | "mixed"
  media: MediaItem[]
}

export interface MediaItem {
  id: string
  type: "image" | "video" | "audio"
  url: string
  caption?: string
  thumbnail?: string // For videos
}
