"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export function LoadingTransition() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    const handleStart = (newUrl: string) => {
      if (newUrl !== url) {
        setIsLoading(true)
      }
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    window.addEventListener("beforeunload", () => setIsLoading(true))
    window.addEventListener("routeChangeStart", handleStart as any)
    window.addEventListener("routeChangeComplete", handleComplete)
    window.addEventListener("routeChangeError", handleComplete)

    return () => {
      window.removeEventListener("beforeunload", () => setIsLoading(true))
      window.removeEventListener("routeChangeStart", handleStart as any)
      window.removeEventListener("routeChangeComplete", handleComplete)
      window.removeEventListener("routeChangeError", handleComplete)
    }
  }, [pathname, searchParams])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-1 bg-primary transition-opacity duration-300",
        isLoading ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="h-full w-full bg-primary animate-pulse" />
    </div>
  )
}
