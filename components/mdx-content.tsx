import type React from "react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import { VideoEmbed } from "./video-embed"
import type { MDXContentProps } from "@/lib/types"

function CodeBlock({ children, className }: { children: string; className?: string }) {
  const language = className?.replace(/language-/, "")
  const highlightedCode = highlight(children)

  return (
    <pre className={`${className} p-4 rounded-lg overflow-x-auto`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  )
}

const components = {
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <div {...props} />,
  code: CodeBlock,
  YouTube: ({ id, title }: { id: string; title?: string }) => (
    <VideoEmbed provider="youtube" videoId={id} title={title} />
  ),
  Vimeo: ({ id, title }: { id: string; title?: string }) => <VideoEmbed provider="vimeo" videoId={id} title={title} />,
}

export function MDXContent({ content }: MDXContentProps) {
  return <MDXRemote source={content} components={components} />
}
