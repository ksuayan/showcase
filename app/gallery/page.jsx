import { SiteHeader } from "@/components/site-header"
import { PhotoGallery } from "@/components/photo-gallery"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would normally come from your MongoDB database
const photos = [
  {
    id: "photo1",
    url: "https://your-cloudfront-url.com/images/gallery/photo1.jpg",
    caption: "Urban landscape at sunset",
  },
  {
    id: "photo2",
    url: "https://your-cloudfront-url.com/images/gallery/photo2.jpg",
    caption: "Mountain vista panorama",
  },
  {
    id: "photo3",
    url: "https://your-cloudfront-url.com/images/gallery/photo3.jpg",
    caption: "Coastal waves at dawn",
  },
  {
    id: "photo4",
    url: "https://your-cloudfront-url.com/images/gallery/photo4.jpg",
    caption: "Forest canopy in autumn",
  },
  {
    id: "photo5",
    url: "https://your-cloudfront-url.com/images/gallery/photo5.jpg",
    caption: "Desert landscape under stars",
  },
  {
    id: "photo6",
    url: "https://your-cloudfront-url.com/images/gallery/photo6.jpg",
    caption: "Wildlife in natural habitat",
  },
  {
    id: "photo7",
    url: "https://your-cloudfront-url.com/images/gallery/photo7.jpg",
    caption: "Macro photography of flowers",
  },
  {
    id: "photo8",
    url: "https://your-cloudfront-url.com/images/gallery/photo8.jpg",
    caption: "Architectural details in black and white",
  },
]

// For demo purposes, we'll use placeholder images
const placeholderPhotos = photos.map((photo, index) => ({
  ...photo,
  url: `/placeholder.svg?height=${600 + index * 10}&width=${800 + index * 10}`,
}))

export const metadata = {
  title: "Photo Gallery | Visual Portfolio",
  description: "Browse through a collection of stunning photography showcasing various themes and subjects.",
  keywords: ["gallery", "photography", "visual", "portfolio", "images"],
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-4xl font-serif mb-8">Photo Gallery</h1>

        <PhotoGallery photos={placeholderPhotos} />
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
