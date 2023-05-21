import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { EntryData } from './app/types'

type BuildEntryData = EntryData & { date: Date }

const dirname = path.dirname(new URL(import.meta.url).pathname)

async function getMarkdownEntries() {
  const entriesDir = path.join(dirname, 'entries')

  const dirFiles = await fs.readdir(entriesDir)
  const markdownFiles = dirFiles.filter((file) => path.extname(file) === '.md')
  const markdownEntries = await Promise.all(
    markdownFiles.map<Promise<BuildEntryData>>(async (file) => {
      const filePath = path.join(entriesDir, file)
      const text = await fs.readFile(path.join(filePath), 'utf-8')
      const { data, content } = matter(text)
      return {
        content,
        date: data.date,
        title: data.title,
        slug: path.parse(file).name,
        tags: data.tags,
      }
    })
  )

  return markdownEntries
}
async function main() {
  const markdownEntries = await getMarkdownEntries()
  const entries = markdownEntries.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  )

  const output = JSON.stringify(entries)
  await fs.writeFile(path.join(dirname, 'prebuilt.json'), output, 'utf-8')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
