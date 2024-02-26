export type Config = {
  SITE_NAME: string
  OGP_WORKER: string
  OG_IMAGE_URL: string
  DESCRIPTION: string
  KEYWORDS: string
  THEME: 'light' | 'dark'
}

export type EntryData = {
  date: string
  title: string
  slug: string
  /**
   * markdown text
   */
  content: string
  tags?: string[]
}

export type OtherWorks = {
  date: string
  title: string
  media: string
  url: string
}
