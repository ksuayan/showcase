import { MDXRemote } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import { VideoEmbed } from "./video-embed"

function CodeBlock({ children, className }) {
  const language = className?.replace(/language-/, "")
  const highlightedCode = highlight(children)

  return (
    <pre className={`${className} p-4 rounded-lg overflow-x-auto`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  )
}

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  YouTube: ({ id, title }) => <VideoEmbed provider="youtube" videoId={id} title={title} />,
  Vimeo: ({ id, title }) => <VideoEmbed provider="vimeo" videoId={id} title={title} />,
}

export function MDXContent({ content }) {
  return <MDXRemote source={content} components={components} />
}
