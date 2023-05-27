import { Metadata } from 'next'
import { DESCRIPTION, KEYWORDS, OG_IMAGE_URL, SITE_NAME } from '@/src/env'

export function injectPageToMetadata({
  title: title_,
  image,
}: {
  title?: string
  image?: string
}): Metadata {
  const title = title_ ?? SITE_NAME

  return {
    title,
    description: DESCRIPTION,
    icons: '/favicon.ico',
    keywords: KEYWORDS?.split(','),
    viewport: {
      width: 'device-width',
      initialScale: 1,
      minimumScale: 1,
    },
    openGraph: {
      title: title,
      siteName: SITE_NAME,
      description: DESCRIPTION,
      type: 'website',
      images: {
        url: image ?? OG_IMAGE_URL ?? '',
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      images: {
        url: image ?? OG_IMAGE_URL ?? '',
      },
    },
  }
}
