import type React from "react"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"

interface LazyLoadOptions {
  ssr?: boolean
  loading?: React.ReactNode
}

export function lazyImport<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {},
) {
  const {
    ssr = false,
    loading = (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    ),
  } = options

  const LazyComponent = dynamic(importFn, {
    ssr,
    loading: () => <>{loading}</>,
  })

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={loading}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
