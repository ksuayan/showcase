"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { reportWebVitals } from "@/lib/web-vitals"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Report web vitals
    reportWebVitals()

    // Track page views (you can replace this with your analytics provider)
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
    console.log(`Page view: ${url}`)

    // Example for Google Analytics
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'GA-MEASUREMENT-ID', {
    //     page_path: url,
    //   })
    // }
  }, [pathname, searchParams])

  return null
}
