"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ImageIcon, Play, Volume2, Maximize2 } from "lucide-react"
import type { MediaGalleryProps } from "@/lib/types"

export function MediaGallery({ media }: MediaGalleryProps) {
  const [mounted, setMounted] = useState<boolean>(false)
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [showControls, setShowControls] = useState<Record<string, boolean>>({})
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({})

  // Only render tabs after component has mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  const images = media.filter((item) => item.type === "image")
  const videos = media.filter((item) => item.type === "video")
  const audio = media.filter((item) => item.type === "audio")

  const hasImages = images.length > 0
  const hasVideos = videos.length > 0
  const hasAudio = audio.length > 0

  const handleFullscreen = (id: string) => {
    const element = videoRefs.current[id]
    if (!element) return

    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if ((element as any).webkitRequestFullscreen) {
      ;(element as any).webkitRequestFullscreen()
    } else if ((element as any).mozRequestFullScreen) {
      ;(element as any).mozRequestFullScreen()
    } else if ((element as any).msRequestFullscreen) {
      ;(element as any).msRequestFullscreen()
    }
  }

  // Don't render tabs until component has mounted
  if (!mounted) {
    return (
      <div>
        <div className="h-10 w-64 bg-muted rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((item, index) => (
            <div key={item.id} className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={item.url || "/placeholder.svg"}
                alt={item.caption || `Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Tabs defaultValue={hasImages ? "images" : hasVideos ? "videos" : "audio"}>
        <TabsList className="mb-6">
          {hasImages && (
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> Images
            </TabsTrigger>
          )}
          {hasVideos && (
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Play className="h-4 w-4" /> Videos
            </TabsTrigger>
          )}
          {hasAudio && (
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Volume2 className="h-4 w-4" /> Audio
            </TabsTrigger>
          )}
        </TabsList>

        {hasImages && (
          <TabsContent value="images">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div
                      className="cursor-pointer rounded-lg overflow-hidden aspect-square relative"
                      onClick={() => setSelectedMedia(item)}
                    >
                      <img
                        src={item.url || "/placeholder.svg"}
                        alt={item.caption || "Gallery image"}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={item.url || "/placeholder.svg"}
                      alt={item.caption || "Gallery image"}
                      className="w-full h-auto rounded-lg"
                    />
                    {item.caption && <p className="text-center text-muted-foreground mt-2">{item.caption}</p>}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        )}

        {hasVideos && (
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg overflow-hidden relative"
                  onMouseEnter={() => setShowControls((prev) => ({ ...prev, [item.id]: true }))}
                  onMouseLeave={() => setShowControls((prev) => ({ ...prev, [item.id]: false }))}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[item.id] = el
                    }}
                    src={item.url}
                    controls={showControls[item.id]}
                    className="w-full aspect-video"
                    poster={item.thumbnail}
                  />
                  {showControls[item.id] && (
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-background/80 backdrop-blur-sm"
                        onClick={() => handleFullscreen(item.id)}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  {item.caption && <p className="text-muted-foreground mt-2">{item.caption}</p>}
                </div>
              ))}
            </div>
          </TabsContent>
        )}

        {hasAudio && (
          <TabsContent value="audio">
            <div className="space-y-4">
              {audio.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{item.caption || "Audio track"}</h3>
                  <audio src={item.url} controls className="w-full" />
                </div>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}
