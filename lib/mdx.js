import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content")

export async function getMdxBySlug(slug, contentType = "projects") {
  try {
    const filePath = path.join(contentDirectory, contentType, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { data, content } = matter(fileContent)

    return {
      frontmatter: data,
      content,
    }
  } catch (error) {
    console.error(`Error reading MDX file for slug ${slug}:`, error)
    return { frontmatter: {}, content: "" }
  }
}

export async function getAllMdxFiles(contentType = "projects") {
  try {
    const dirPath = path.join(contentDirectory, contentType)
    const filenames = fs.readdirSync(dirPath)

    const mdxFiles = filenames.filter((filename) => filename.endsWith(".mdx"))

    return Promise.all(
      mdxFiles.map(async (filename) => {
        const filePath = path.join(dirPath, filename)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data } = matter(fileContent)
        const slug = filename.replace(/\.mdx$/, "")

        return {
          slug,
          ...data,
        }
      }),
    )
  } catch (error) {
    console.error(`Error reading MDX files from ${contentType}:`, error)
    return []
  }
}
