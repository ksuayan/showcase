// Basic content types
export interface Article {
  _id: string
  title: string
  slug: string
  excerpt: string
  date: string
  coverImage: string
  categories: string[]
  content: string
}

export interface Project {
  _id: string
  title: string
  slug: string
  excerpt: string
  date: string
  coverImage: string
  tags: string[]
  mediaType: "photography" | "video" | "audio" | "mixed"
  media?: MediaItem[]
  geolocation?: Geolocation
}

export interface Topic {
  name: string
  slug: string
  description: string
  image: string
}

export interface MediaItem {
  id: string
  type: "image" | "video" | "audio"
  url: string
  caption?: string
  thumbnail?: string
}

export interface Geolocation {
  city: string
  country: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

export interface Photo {
  id: string
  url: string
  caption: string
}

// Component props
export interface ProjectCardProps {
  project: Project
}

export interface ArticlesListProps {
  articles: Article[]
  articlesPerPage?: number
}

export interface RelatedProjectsProps {
  projects: Project[]
}

export interface ProjectHeaderProps {
  project: Project
}

export interface MediaGalleryProps {
  media: MediaItem[]
}

export interface PhotoGalleryProps {
  photos: Photo[]
}

export interface MDXContentProps {
  content: string
}

export interface VideoEmbedProps {
  provider: "youtube" | "vimeo"
  videoId: string
  title?: string
}

// Page params
export interface SlugParams {
  params: {
    slug: string
  }
}

// Site index types
export interface SiteMapItem {
  title: string
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
  children?: SiteMapItem[]
}

export interface SiteIndex {
  pages: SiteMapItem[]
  articles: SiteMapItem[]
  topics: SiteMapItem[]
  media: SiteMapItem[]
}

// JSON data types
export interface FooterLink {
  text: string
  url: string
  external: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
  divider?: boolean
  additionalLinks?: FooterLink[]
}

export interface FooterData {
  columns: FooterColumn[]
}

export interface TopicsData {
  topics: Topic[]
}

export interface ButtonData {
  text: string
  url: string
}

export interface HeroData {
  title: string
  description: string
  image: string
  imageAlt: string
  primaryButton: ButtonData
  secondaryButton: ButtonData
}

export interface LogoData {
  text: string
  url: string
}

export interface NavigationLink {
  text: string
  url: string
}

export interface NavigationData {
  logo: LogoData
  links: NavigationLink[]
}
