import type { Article, Project, Topic, Photo, SiteIndex, SiteMapItem } from "./types"
import topicsData from "@/data/topics.json"

export function getAllProjects(limit?: number): Project[] {
  const projects: Project[] = [
    {
      _id: "project1",
      title: "Urban Photography Series",
      slug: "urban-photography-series",
      excerpt: "A collection of urban landscape photography exploring city architecture and street life.",
      date: "2023-10-15",
      coverImage: "/placeholder.svg?height=600&width=800",
      tags: ["photography", "urban", "architecture"],
      mediaType: "photography",
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
      geolocation: {
        city: "New York",
        country: "USA",
        coordinates: {
          latitude: 40.7128,
          longitude: -74.006,
        },
      },
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
      media: [
        {
          id: "audio1",
          type: "audio",
          url: "https://example.com/audio1.mp3",
          caption: "Urban Ambience",
        },
        {
          id: "audio2",
          type: "audio",
          url: "https://example.com/audio2.mp3",
          caption: "Forest Sounds",
        },
      ],
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
      media: [
        {
          id: "video1",
          type: "video",
          url: "https://example.com/video1.mp4",
          thumbnail: "/placeholder.svg?height=480&width=640",
          caption: "Morning Commute",
        },
        {
          id: "video2",
          type: "video",
          url: "https://example.com/video2.mp4",
          thumbnail: "/placeholder.svg?height=480&width=640",
          caption: "Night Markets",
        },
      ],
    },
  ]

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects()
  return projects.find((project) => project.slug === slug) || null
}

export function getRelatedProjects(projectId: string, tags: string[], limit = 3): Project[] {
  const projects = getAllProjects()
  return projects
    .filter((project) => project._id !== projectId && project.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit)
}

export const articles: Article[] = [
  {
    _id: "article1",
    title: "The Art of Composition in Photography",
    slug: "art-of-composition-photography",
    excerpt:
      "Learn the fundamental principles of composition that can transform your photography from ordinary to extraordinary.",
    date: "2023-10-15",
    coverImage: "/placeholder.svg?height=400&width=600",
    categories: ["Photography", "Art", "Tutorials"],
    content: `
# The Art of Composition in Photography

Good composition is essential to creating compelling photographs. It's about arranging elements within your frame to create a visually pleasing and impactful image.

## The Rule of Thirds

One of the most well-known composition techniques is the rule of thirds. Imagine your frame divided into a 3x3 grid. Placing key elements along these lines or at their intersections often creates a more balanced and interesting image.

<YouTube id="dQw4w9WgXcQ" title="Understanding the Rule of Thirds" />

## Leading Lines

Leading lines are lines within an image that guide the viewer's eye toward the main subject or through the frame. These can be roads, fences, rivers, or any linear element.

## Framing

Using elements in the foreground to frame your main subject can add depth and context to your image.

<Vimeo id="76979871" title="Framing Techniques in Photography" />

## Balance and Symmetry

Balance in composition refers to the visual weight of elements in your frame. Symmetrical compositions can create a sense of harmony, while asymmetrical compositions can be more dynamic.
    `,
  },
  {
    _id: "article2",
    title: "Understanding Light in Videography",
    slug: "understanding-light-videography",
    excerpt:
      "Explore how different lighting techniques can dramatically impact the mood and quality of your video projects.",
    date: "2023-09-28",
    coverImage: "/placeholder.svg?height=410&width=610",
    categories: ["Videography", "Film", "Lighting"],
    content: `
# Understanding Light in Videography

Light is perhaps the most crucial element in videography. It not only determines exposure but also sets the mood, creates depth, and guides the viewer's attention.

## Natural vs. Artificial Light

Both natural and artificial light have their advantages and challenges. Natural light is free and can be beautiful, but it's less controllable. Artificial light gives you complete control but requires equipment and setup time.

<YouTube id="dQw4w9WgXcQ" title="Natural vs Artificial Light in Videography" />

## Three-Point Lighting

The standard setup in videography is three-point lighting:
1. Key light - The main light source
2. Fill light - Softens shadows created by the key light
3. Back light - Separates the subject from the background

## Color Temperature

Understanding color temperature is essential for maintaining consistent color throughout your footage. Mixing different light sources can create unwanted color casts.
    `,
  },
  {
    _id: "article3",
    title: "The Evolution of Audio Recording",
    slug: "evolution-audio-recording",
    excerpt:
      "A journey through the history of audio recording technology and how it has shaped modern music production.",
    date: "2023-09-10",
    coverImage: "/placeholder.svg?height=420&width=620",
    categories: ["Audio", "Technology", "Music"],
    content: `
# The Evolution of Audio Recording

The technology we use to capture sound has undergone remarkable transformations since the first audio recordings in the late 19th century.

## From Mechanical to Digital

Audio recording began with purely mechanical methods, evolved through magnetic tape, and now exists primarily in the digital realm. Each stage brought new creative possibilities.

<YouTube id="dQw4w9WgXcQ" title="History of Audio Recording Technology" />

## The Impact on Music Production

Recording technology doesn't just capture music; it shapes it. Many genres and production techniques exist because of specific recording technologies and their limitations or capabilities.

## Modern Home Studios

Today's technology allows for professional-quality recordings in home environments, democratizing music production in unprecedented ways.
    `,
  },
  {
    _id: "article4",
    title: "Minimalist Approaches to Visual Design",
    slug: "minimalist-visual-design",
    excerpt:
      "How the 'less is more' philosophy can create powerful and impactful visual experiences across different media.",
    date: "2023-08-22",
    coverImage: "/placeholder.svg?height=430&width=630",
    categories: ["Design", "Art", "Theory"],
    content: `
# Minimalist Approaches to Visual Design

Minimalism in design is about stripping away the unnecessary to focus on what truly matters. It's not about emptiness, but about intentionality.

## Core Principles

Minimalist design typically embraces:
- Limited color palettes
- Ample negative space
- Simple typography
- Reduced elements

<YouTube id="dQw4w9WgXcQ" title="Principles of Minimalist Design" />

## Functional Minimalism

Beyond aesthetics, minimalism serves functional purposes by:
- Improving usability
- Enhancing focus
- Speeding up comprehension
- Reducing cognitive load

## Historical Context

Minimalism has roots in various art and design movements, from Japanese Zen aesthetics to Bauhaus and beyond.
    `,
  },
  {
    _id: "article5",
    title: "The Future of Web Development",
    slug: "future-web-development",
    excerpt: "Exploring emerging technologies and methodologies that will shape the future of web development.",
    date: "2023-08-05",
    coverImage: "/placeholder.svg?height=440&width=640",
    categories: ["Web", "Technology", "Programming"],
    content: `
# The Future of Web Development

Web development continues to evolve at a rapid pace, with new technologies and approaches emerging regularly.

## Web Assembly

WebAssembly (WASM) allows high-performance code from languages like C++ and Rust to run in browsers, opening new possibilities for web applications.

<YouTube id="dQw4w9WgXcQ" title="Introduction to WebAssembly" />

## AI-Assisted Development

Artificial intelligence is increasingly helping developers write code, debug issues, and optimize performance, changing how we approach web development.

## Edge Computing

Moving computation closer to users through edge computing is reducing latency and enabling new types of web applications that weren't previously possible.
    `,
  },
  {
    _id: "article6",
    title: "Classical Music in Modern Film Scores",
    slug: "classical-music-film-scores",
    excerpt: "How classical music techniques and motifs continue to influence and enhance modern film scoring.",
    date: "2023-07-19",
    coverImage: "/placeholder.svg?height=450&width=650",
    categories: ["Music", "Film", "Analysis"],
    content: `
# Classical Music in Modern Film Scores

The relationship between classical music and film scoring is profound and continues to shape how music functions in cinema.

## Leitmotifs and Themes

Wagner's concept of leitmotifs—recurring musical themes associated with characters or ideas—is fundamental to modern film scoring, from Star Wars to Marvel films.

<YouTube id="dQw4w9WgXcQ" title="Leitmotifs in Film Music" />

## Orchestration Techniques

Classical orchestration techniques remain essential tools for film composers, even as they incorporate electronic and non-traditional elements.

## Direct Borrowing

Many films directly use classical pieces, either in their original form or as inspiration for new compositions, creating rich intertextual relationships.
    `,
  },
  {
    _id: "article7",
    title: "Travel Journal: Tokyo Photography Expedition",
    slug: "tokyo-photography-expedition",
    excerpt: "A personal account of a two-week photography journey through Tokyo's diverse neighborhoods.",
    date: "2023-07-02",
    coverImage: "/placeholder.svg?height=460&width=660",
    categories: ["Photography", "Journals", "Travel"],
    content: `
# Travel Journal: Tokyo Photography Expedition

This article documents my experiences capturing the visual essence of Tokyo over two weeks of exploration.

## Urban Landscapes

Tokyo offers an incredible diversity of urban landscapes, from the neon canyons of Shinjuku to the traditional architecture of Asakusa.

<YouTube id="dQw4w9WgXcQ" title="Tokyo Urban Photography" />

## Street Photography

The streets of Tokyo provide endless opportunities for candid photography, with each neighborhood offering its own unique character and rhythm.

## Technical Challenges

Photographing in Tokyo presents unique challenges, from navigating crowded spaces to dealing with extreme lighting contrasts between bright neon and dark alleys.
    `,
  },
  {
    _id: "article8",
    title: "Environmental Portraiture: Capturing Context",
    slug: "environmental-portraiture",
    excerpt: "Techniques for creating portraits that reveal the subject's personality through their environment.",
    date: "2023-06-15",
    coverImage: "/placeholder.svg?height=470&width=670",
    categories: ["Photography", "Portraiture"],
    content: `
# Environmental Portraiture: Capturing Context

Environmental portraiture goes beyond capturing a person's likeness to reveal something about who they are through their surroundings.

## Location Selection

Choosing the right location is crucial—it should reflect the subject's personality, profession, or passions in an authentic way.

<YouTube id="dQw4w9WgXcQ" title="Environmental Portrait Photography" />

## Composition Strategies

Environmental portraits require balancing the subject with their surroundings, using composition to create visual relationships that tell a story.

## Lighting Considerations

Working with available light in environmental settings presents challenges but also opportunities for creating authentic, atmospheric portraits.
    `,
  },
  {
    _id: "article9",
    title: "Sound Design for Visual Media",
    slug: "sound-design-visual-media",
    excerpt: "How audio elements can enhance the impact of visual storytelling in film, games, and interactive media.",
    date: "2023-05-28",
    coverImage: "/placeholder.svg?height=480&width=680",
    categories: ["Audio", "Multimedia"],
    content: `
# Sound Design for Visual Media

Sound design is often overlooked but is crucial to creating immersive experiences in film, games, and other visual media.

## Beyond Background Music

Effective sound design encompasses much more than music, including ambient sounds, foley effects, and carefully designed audio cues.

<YouTube id="dQw4w9WgXcQ" title="The Art of Sound Design" />

## Emotional Impact

Sound directly affects our emotional response to visual content, often operating on a subconscious level to heighten tension, create relief, or signal danger.

## Technical Integration

The technical aspects of integrating sound with visual media require careful attention to synchronization, spatial positioning, and dynamic range.
    `,
  },
]

export function getAllArticles(limit?: number): Article[] {
  if (limit) {
    return articles.slice(0, limit)
  }
  return articles
}

export function getArticleBySlug(slug: string): Article | null {
  return articles.find((article) => article.slug === slug) || null
}

export function getArticlesByCategory(category: string, limit?: number): Article[] {
  const filteredArticles = articles.filter((article) =>
    article.categories.some((cat) => cat.toLowerCase() === category.toLowerCase()),
  )

  if (limit) {
    return filteredArticles.slice(0, limit)
  }

  return filteredArticles
}

// Use topics from JSON file
export const topics: Topic[] = topicsData.topics

export const photos: Photo[] = [
  {
    id: "photo1",
    url: "/placeholder.svg?height=600&width=800",
    caption: "Urban landscape at sunset",
  },
  {
    id: "photo2",
    url: "/placeholder.svg?height=610&width=810",
    caption: "Mountain vista panorama",
  },
  {
    id: "photo3",
    url: "/placeholder.svg?height=620&width=820",
    caption: "Coastal waves at dawn",
  },
  {
    id: "photo4",
    url: "/placeholder.svg?height=630&width=830",
    caption: "Forest canopy in autumn",
  },
  {
    id: "photo5",
    url: "/placeholder.svg?height=640&width=840",
    caption: "Desert landscape under stars",
  },
  {
    id: "photo6",
    url: "/placeholder.svg?height=650&width=850",
    caption: "Wildlife in natural habitat",
  },
  {
    id: "photo7",
    url: "/placeholder.svg?height=660&width=860",
    caption: "Macro photography of flowers",
  },
  {
    id: "photo8",
    url: "/placeholder.svg?height=670&width=870",
    caption: "Architectural details in black and white",
  },
]

// Site index generator
export function generateSiteIndex(): SiteIndex {
  // Generate pages
  const pages: SiteMapItem[] = [
    {
      title: "Home",
      url: "/",
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      title: "Articles",
      url: "/articles",
      priority: 0.9,
      changeFrequency: "daily",
    },
    {
      title: "Media",
      url: "/media",
      priority: 0.9,
      changeFrequency: "weekly",
    },
  ]

  // Generate article pages
  const articlePages: SiteMapItem[] = articles.map((article) => ({
    title: article.title,
    url: `/articles/${article.slug}`,
    lastModified: article.date,
    priority: 0.8,
    changeFrequency: "monthly",
  }))

  // Generate topic pages
  const topicPages: SiteMapItem[] = topics.map((topic) => ({
    title: topic.name,
    url: `/topics/${topic.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }))

  // Generate media items
  const mediaItems: SiteMapItem[] = [
    {
      title: "Photography",
      url: "/media#photography",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      title: "Videos",
      url: "/media#videos",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      title: "Audio",
      url: "/media#audio",
      priority: 0.6,
      changeFrequency: "monthly",
    },
  ]

  return {
    pages,
    articles: articlePages,
    topics: topicPages,
    media: mediaItems,
  }
}

// Generate XML sitemap
export function generateSitemapXml(): string {
  const siteIndex = generateSiteIndex()
  const allItems = [...siteIndex.pages, ...siteIndex.articles, ...siteIndex.topics, ...siteIndex.media]

  const baseUrl = "https://portfolio.example.com"

  const xmlItems = allItems
    .map((item) => {
      return `
  <url>
    <loc>${baseUrl}${item.url}</loc>
    ${item.lastModified ? `<lastmod>${new Date(item.lastModified).toISOString()}</lastmod>` : ""}
    ${item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ""}
    ${item.priority ? `<priority>${item.priority}</priority>` : ""}
  </url>`
    })
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlItems}
</urlset>`
}
