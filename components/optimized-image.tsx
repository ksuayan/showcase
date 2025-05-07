"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle placeholder SVG URLs
  const isPlaceholder = src.startsWith("/placeholder.svg")

  if (isPlaceholder) {
    // Extract dimensions from placeholder URL if not provided
    if (!width || !height) {
      const match = src.match(/height=(\d+)&width=(\d+)/)
      if (match) {
        height = Number.parseInt(match[1])
        width = Number.parseInt(match[2])
      } else {
        width = 800
        height = 600
      }
    }

    return (
      <div
        className={cn("bg-muted relative overflow-hidden", isLoading ? "animate-pulse" : "", className)}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "duration-700 ease-in-out",
            isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
            className,
          )}
          onLoadingComplete={() => setIsLoading(false)}
          priority={priority}
          sizes={sizes}
        />
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width || 1200}
        height={height || 800}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
          className,
        )}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        sizes={sizes}
      />
    </div>
  )
}
