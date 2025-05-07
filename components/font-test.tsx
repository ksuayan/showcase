import type { JSX } from "react"

export function FontTest(): JSX.Element {
  return (
    <div className="space-y-4 p-4 border rounded-lg mb-8">
      <h2 className="text-2xl font-serif">Font Test</h2>
      <div className="grid gap-4">
        <div>
          <h3 className="text-sm font-medium mb-1">IBM Plex Sans (sans-serif)</h3>
          <p className="font-sans text-lg">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-1">IBM Plex Serif (serif)</h3>
          <p className="font-serif text-lg">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-1">IBM Plex Mono (monospace)</h3>
          <p className="font-mono text-lg">The quick brown fox jumps over the lazy dog.</p>
        </div>
      </div>
    </div>
  )
}
