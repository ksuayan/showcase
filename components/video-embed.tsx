"use client"

import { useState } from "react"
import { Maximize2, Pause, Play } from "lucide-react"
import type { VideoEmbedProps } from "@/lib/types"

export function VideoEmbed({ provider, videoId, title }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [showControls, setShowControls] = useState<boolean>(false)

  // Determine the embed URL based on the provider
  const getEmbedUrl = () => {
    if (provider === "youtube") {
      return `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&rel=0`
    } else if (provider === "vimeo") {
      return `https://player.vimeo.com/video/${videoId}?autoplay=${isPlaying ? 1 : 0}`
    }
    return ""
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleFullscreen = () => {
    const iframe = document.getElementById(`video-${videoId}`)
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen()
      } else if ((iframe as any).webkitRequestFullscreen) {
        ;(iframe as any).webkitRequestFullscreen()
      } else if ((iframe as any).mozRequestFullScreen) {
        ;(iframe as any).mozRequestFullScreen()
      } else if ((iframe as any).msRequestFullscreen) {
        ;(iframe as any).msRequestFullscreen()
      }
    }
  }

  return (
    <div
      className="relative aspect-video rounded-lg overflow-hidden mb-6"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <iframe
        id={`video-${videoId}`}
        src={getEmbedUrl()}
        title={title || `${provider} video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />

      {showControls && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 transition-opacity duration-300">
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-2 flex gap-2">
            {isPlaying ? (
              <button
                onClick={handlePause}
                className="text-white hover:text-primary transition-colors p-2 rounded-full"
                aria-label="Pause"
              >
                <Pause className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={handlePlay}
                className="text-white hover:text-primary transition-colors p-2 rounded-full"
                aria-label="Play"
              >
                <Play className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-primary transition-colors p-2 rounded-full"
              aria-label="Fullscreen"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
