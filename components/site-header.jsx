import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { MobileMenu } from "./mobile-menu"
import { TopicsMenu } from "./topics-menu"

export function SiteHeader() {
  return (
    <header className="container mx-auto py-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif">
          Portfolio
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/projects" className="font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/gallery" className="font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/articles" className="font-medium hover:text-primary transition-colors">
              Articles
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>

      <div className="mt-4 border-b pb-4">
        <TopicsMenu />
      </div>
    </header>
  )
}
