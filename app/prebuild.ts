import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { EntryData } from './types'

async function main() {
  const dirname = path.dirname(new URL(import.meta.url).pathname)
  const entriesDir = path.join(dirname, 'entries')

  console.log(path.join(dirname, 'entries'))
  const markdownFiles = await fs.readdir(entriesDir)
  const markdownEntries = (await Promise.all(
    markdownFiles.map<Promise<EntryData>>(async (file) => {
      const filePath = path.join(entriesDir, file)
      const text = await fs.readFile(path.join(filePath), 'utf-8')
      const { data, content } = matter(text)
      return {
        content,
        date: data.date,
        title: data.title,
        slug: file,
        tags: data.tags,
      }
    })
  )).sort((a, b) => b.date.getTime() - a.date.getTime())

  const output = JSON.stringify(markdownEntries)
  await fs.writeFile(path.join(dirname, 'prebuilt.json'), output, 'utf-8')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
