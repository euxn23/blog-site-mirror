import { Feed } from 'feed'
import { DESCRIPTION, OG_IMAGE_URL, SITE_NAME, SITE_URL } from '@/src/config'
import data from '@/src/prebuilt.json'

var XML_CHAR_MAP = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&apos;',
} as const

function escapeXml(s: string) {
  return s.replace(/[<>&"']/g, (ch) => XML_CHAR_MAP?.[ch as keyof typeof XML_CHAR_MAP] ?? undefined)
}
export function getFeed() {
  const feed = new Feed({
    title: SITE_NAME,
    description: DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: 'ja',
    image: OG_IMAGE_URL,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: '©2024 SUZUKI Yuta',
    updated: new Date(),
    generator: 'feed',
    author: {
      name: 'SUZUKI Yuta',
      email: 'euxn23@gmail.com',
      link: 'https://github.com/euxn23',
    },
    feedLinks: {
      rss: `${SITE_URL}/rss.xml`,
    },
    ttl: 60,
  })
  data.entries.forEach((e) => {
    feed.addItem({
      title: e.title,
      id: `${SITE_URL}/${e.slug}`,
      link: `${SITE_URL}/${e.slug}`,
      description: escapeXml(e.content),
      date: new Date(e.date),
    })
  })

  return feed
}
