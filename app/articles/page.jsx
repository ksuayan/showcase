import { SiteHeader } from "@/components/site-header"
import { ArticlesList } from "@/components/articles-list"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would normally come from your MongoDB database
const articles = [
  {
    _id: "article1",
    title: "The Art of Composition in Photography",
    slug: "art-of-composition-photography",
    excerpt:
      "Learn the fundamental principles of composition that can transform your photography from ordinary to extraordinary.",
    date: "2023-10-15",
    coverImage: "https://your-cloudfront-url.com/images/articles/composition.jpg",
    categories: ["Photography", "Tutorials"],
  },
  {
    _id: "article2",
    title: "Understanding Light in Videography",
    slug: "understanding-light-videography",
    excerpt:
      "Explore how different lighting techniques can dramatically impact the mood and quality of your video projects.",
    date: "2023-09-28",
    coverImage: "https://your-cloudfront-url.com/images/articles/videography-light.jpg",
    categories: ["Videography", "Lighting"],
  },
  {
    _id: "article3",
    title: "The Evolution of Audio Recording",
    slug: "evolution-audio-recording",
    excerpt:
      "A journey through the history of audio recording technology and how it has shaped modern music production.",
    date: "2023-09-10",
    coverImage: "https://your-cloudfront-url.com/images/articles/audio-recording.jpg",
    categories: ["Audio", "Technology"],
  },
  {
    _id: "article4",
    title: "Minimalist Approaches to Visual Design",
    slug: "minimalist-visual-design",
    excerpt:
      "How the 'less is more' philosophy can create powerful and impactful visual experiences across different media.",
    date: "2023-08-22",
    coverImage: "https://your-cloudfront-url.com/images/articles/minimalist-design.jpg",
    categories: ["Design", "Theory"],
  },
  {
    _id: "article5",
    title: "Color Theory for Digital Artists",
    slug: "color-theory-digital-artists",
    excerpt:
      "Understanding the psychological impact of color choices and how to use them effectively in your digital artwork.",
    date: "2023-08-05",
    coverImage: "https://your-cloudfront-url.com/images/articles/color-theory.jpg",
    categories: ["Design", "Digital Art"],
  },
  {
    _id: "article6",
    title: "Storytelling Through Sequential Images",
    slug: "storytelling-sequential-images",
    excerpt: "How to craft compelling visual narratives using a series of connected images or frames.",
    date: "2023-07-19",
    coverImage: "https://your-cloudfront-url.com/images/articles/sequential-storytelling.jpg",
    categories: ["Photography", "Storytelling"],
  },
  {
    _id: "article7",
    title: "The Impact of AI on Creative Industries",
    slug: "ai-impact-creative-industries",
    excerpt:
      "Exploring how artificial intelligence is changing the landscape of photography, design, and other visual arts.",
    date: "2023-07-02",
    coverImage: "https://your-cloudfront-url.com/images/articles/ai-creativity.jpg",
    categories: ["Technology", "Industry Trends"],
  },
  {
    _id: "article8",
    title: "Environmental Portraiture: Capturing Context",
    slug: "environmental-portraiture",
    excerpt: "Techniques for creating portraits that reveal the subject's personality through their environment.",
    date: "2023-06-15",
    coverImage: "https://your-cloudfront-url.com/images/articles/environmental-portraits.jpg",
    categories: ["Photography", "Portraiture"],
  },
  {
    _id: "article9",
    title: "Sound Design for Visual Media",
    slug: "sound-design-visual-media",
    excerpt: "How audio elements can enhance the impact of visual storytelling in film, games, and interactive media.",
    date: "2023-05-28",
    coverImage: "https://your-cloudfront-url.com/images/articles/sound-design.jpg",
    categories: ["Audio", "Multimedia"],
  },
]

// For demo purposes, we'll use placeholder images
const placeholderArticles = articles.map((article, index) => ({
  ...article,
  coverImage: `/placeholder.svg?height=${400 + index * 10}&width=${600 + index * 10}`,
}))

export const metadata = {
  title: "Articles | Visual Portfolio",
  description: "Insights, tutorials, and stories about photography, videography, audio production, and visual arts.",
  keywords: ["articles", "blog", "photography", "videography", "audio", "visual arts"],
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-4xl font-serif mb-8">Articles</h1>

        <ArticlesList articles={placeholderArticles} />
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
