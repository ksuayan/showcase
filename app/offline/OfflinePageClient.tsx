"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WifiOff, Home, RefreshCw } from "lucide-react"

export default function OfflinePageClient() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="main-content" className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <WifiOff className="h-24 w-24 text-muted-foreground mb-6" />
          <h1 className="text-4xl font-serif mb-4">You're Offline</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            It looks like you're currently offline. Please check your internet connection and try again.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Go to Homepage
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              <RefreshCw className="mr-2 h-4 w-4" /> Retry Connection
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
