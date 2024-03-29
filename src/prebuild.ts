import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { EntryData } from './types'
import { getOtherWorks } from '@/entry-repo/other-works'

type BuildEntryData = EntryData & { date: Date }

const dirname = path.dirname(new URL(import.meta.url).pathname)

async function getMarkdownEntries() {
  const entriesDir = path.join(dirname, '..', 'entry-repo', 'entries')

  const dirFiles = await fs.readdir(entriesDir)
  const markdownFiles = dirFiles
    .filter((file) => path.extname(file) === '.md')
    // 同一日付の通し番号を降順にするため
    .reverse()
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
  const entries = markdownEntries
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map((entry) => ({
      ...entry,
      date: `${entry.date.getFullYear()}-${entry.date.getMonth() + 1}-${entry.date.getDate()}`,
    }))

  const output = JSON.stringify({
    entries: entries,
    otherWorks: await getOtherWorks(),
  })
  await fs.writeFile(path.join(dirname, 'prebuilt.json'), output, 'utf-8')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
