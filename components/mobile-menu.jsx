"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

const topics = [
  { name: "Art", slug: "art" },
  { name: "Technology", slug: "technology" },
  { name: "Music", slug: "music" },
  { name: "Film", slug: "film" },
  { name: "Journals", slug: "journals" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      <div className={`mobile-menu ${isOpen ? "" : "hidden"}`}>
        <div className="mobile-menu-header">
          <h2 className="text-2xl font-serif">Portfolio</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="mobile-menu-items">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/articles" onClick={() => setIsOpen(false)}>
            Articles
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg mb-4">Topics</h3>
            <div className="flex flex-col gap-4">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="mobile-menu-footer">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
