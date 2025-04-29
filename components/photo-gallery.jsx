"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Grid3X3, SlidersHorizontal, Maximize2 } from "lucide-react"

export function PhotoGallery({ photos }) {
  const [mounted, setMounted] = useState(false)
  const [view, setView] = useState("grid")
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const carouselRef = useRef(null)

  // Only render tabs after component has mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length
    setCurrentIndex(newIndex)
    setSelectedPhoto(photos[newIndex])
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % photos.length
    setCurrentIndex(newIndex)
    setSelectedPhoto(photos[newIndex])
  }

  const handleFullscreen = () => {
    const element = carouselRef.current
    if (!element) return

    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  }

  // Don't render tabs until component has mounted
  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Photo Gallery</h2>
          <div className="h-10 w-32 bg-muted rounded animate-pulse"></div>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div key={photo.id} className="gallery-item">
              <img src={photo.url || "/placeholder.svg"} alt={photo.caption || `Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Photo Gallery</h2>
        <Tabs value={view} onValueChange={setView} className="w-auto">
          <TabsList>
            <TabsTrigger value="grid" className="flex items-center gap-2">
              <Grid3X3 className="h-4 w-4" /> Grid
            </TabsTrigger>
            <TabsTrigger value="carousel" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Carousel
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Tabs value={view} className="mt-0">
        <TabsContent value="grid" className="mt-0">
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div key={photo.id} className="gallery-item" onClick={() => handlePhotoClick(photo, index)}>
                <img src={photo.url || "/placeholder.svg"} alt={photo.caption || `Photo ${index + 1}`} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="carousel" className="mt-0">
          <div
            className="carousel aspect-[16/9] bg-muted"
            ref={carouselRef}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div
              className="carousel-inner h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${photos.length * 100}%`,
              }}
            >
              {photos.map((photo, index) => (
                <div key={photo.id} className="carousel-item h-full flex items-center justify-center">
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.caption || `Photo ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {(showControls || view === "carousel") && (
              <>
                <div className="carousel-controls">
                  <Button
                    variant="outline"
                    size="icon"
                    className="carousel-control"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrevious()
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="carousel-control"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute top-4 right-4">
                  <Button variant="outline" size="icon" className="carousel-control" onClick={handleFullscreen}>
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="carousel-indicators">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          {photos[currentIndex]?.caption && (
            <p className="text-center text-muted-foreground mt-2">{photos[currentIndex].caption}</p>
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          <div
            className="relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <img
              src={selectedPhoto?.url || "/placeholder.svg"}
              alt={selectedPhoto?.caption || "Gallery image"}
              className="w-full h-auto"
            />
            {showControls && (
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
            {showControls && (
              <div className="absolute top-4 right-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={handleFullscreen}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          {selectedPhoto?.caption && (
            <div className="p-4">
              <p className="text-center">{selectedPhoto.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
