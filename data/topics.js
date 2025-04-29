/**
 * @typedef {Object} Topic
 * @property {string} name - The name of the topic
 * @property {string} slug - The URL-friendly slug for the topic
 * @property {string} [description] - Optional description of the topic
 */

/**
 * @typedef {Object} Article
 * @property {string} _id - Unique identifier for the article
 * @property {string} title - The title of the article
 * @property {string} slug - The URL-friendly slug for the article
 * @property {string} excerpt - A brief summary of the article
 * @property {string} date - Publication date in YYYY-MM-DD format
 * @property {string} coverImage - URL to the article's cover image
 * @property {string[]} categories - Array of categories the article belongs to
 */

/**
 * Array of available topics
 * @type {Topic[]}
 */
export const topics = [
  { 
    name: "Art", 
    slug: "art",
    description: "Explore the world of visual arts and creative expression"
  },
  { 
    name: "Technology", 
    slug: "technology",
    description: "Latest in tech innovations and digital solutions"
  },
  { 
    name: "Music", 
    slug: "music",
    description: "Discover the art of sound and musical expression"
  },
  { 
    name: "Film", 
    slug: "film",
    description: "Cinematic experiences and visual storytelling"
  },
  { 
    name: "Journals", 
    slug: "journals",
    description: "Personal reflections and creative documentation"
  },
]

/**
 * Array of available articles
 * @type {Article[]}
 */
export const articles = [
  {
    _id: "article1",
    title: "The Art of Composition in Photography",
    slug: "art-of-composition-photography",
    excerpt: "Learn the fundamental principles of composition that can transform your photography from ordinary to extraordinary.",
    date: "2023-10-15",
    coverImage: "/placeholder.svg?height=400&width=600",
    categories: ["Photography", "Art", "Tutorials"],
  },
  {
    _id: "article2",
    title: "Understanding Light in Videography",
    slug: "understanding-light-videography",
    excerpt: "Explore how different lighting techniques can dramatically impact the mood and quality of your video projects.",
    date: "2023-09-28",
    coverImage: "/placeholder.svg?height=410&width=610",
    categories: ["Videography", "Film", "Lighting"],
  },
  {
    _id: "article3",
    title: "The Evolution of Audio Recording",
    slug: "evolution-audio-recording",
    excerpt: "A journey through the history of audio recording technology and how it has shaped modern music production.",
    date: "2023-09-10",
    coverImage: "/placeholder.svg?height=420&width=620",
    categories: ["Audio", "Technology", "Music"],
  },
  {
    _id: "article4",
    title: "Minimalist Approaches to Visual Design",
    slug: "minimalist-visual-design",
    excerpt: "How the 'less is more' philosophy can create powerful and impactful visual experiences across different media.",
    date: "2023-08-22",
    coverImage: "/placeholder.svg?height=430&width=630",
    categories: ["Design", "Art", "Theory"],
  },
  {
    _id: "article5",
    title: "The Future of Web Development",
    slug: "future-web-development",
    excerpt: "Exploring emerging technologies and methodologies that will shape the future of web development.",
    date: "2023-08-05",
    coverImage: "/placeholder.svg?height=440&width=640",
    categories: ["Web", "Technology", "Programming"],
  },
  {
    _id: "article6",
    title: "Classical Music in Modern Film Scores",
    slug: "classical-music-film-scores",
    excerpt: "How classical music techniques and motifs continue to influence and enhance modern film scoring.",
    date: "2023-07-19",
    coverImage: "/placeholder.svg?height=450&width=650",
    categories: ["Music", "Film", "Analysis"],
  },
  {
    _id: "article7",
    title: "Travel Journal: Tokyo Photography Expedition",
    slug: "tokyo-photography-expedition",
    excerpt: "A personal account of a two-week photography journey through Tokyo's diverse neighborhoods.",
    date: "2023-07-02",
    coverImage: "/placeholder.svg?height=460&width=660",
    categories: ["Journals", "Travel", "Photography"],
  },
] 