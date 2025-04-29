"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const topics = [
  { name: "Art", slug: "art" },
  { name: "Technology", slug: "technology" },
  { name: "Music", slug: "music" },
  { name: "Film", slug: "film" },
  { name: "Journals", slug: "journals" },
]

export function TopicsMenu({ className }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className={cn("flex", className)}>
      {/* Desktop view */}
      <div className="hidden md:flex items-center space-x-6">
        {topics.map((topic) => {
          const isActive = pathname === `/topics/${topic.slug}`
          return (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              {topic.name}
            </Link>
          )
        })}
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1 px-2">
              Topics <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {topics.map((topic) => (
              <DropdownMenuItem key={topic.slug} asChild>
                <Link href={`/topics/${topic.slug}`} onClick={() => setOpen(false)}>
                  {topic.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
