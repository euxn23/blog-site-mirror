import { Metadata } from 'next'

export function injectPageToMetadata({
  title,
  image,
}: {
  title?: string
  image?: string
}): Metadata {
  return {
    title: 'blog.euxn.me',
    description: 'A blog by @euxn23',
    icons: '/favicon.ico',
    keywords: ['euxn23', 'blog', 'euxn.me', 'ユーン'],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      minimumScale: 1,
    },
    openGraph: {
      title: title ?? 'blog.euxn.me',
      siteName: 'blog.euxn.me',
      description: 'A blog by @euxn23',
      type: 'website',
      images: {
        url: image ?? 'https://ogp.blog.euxn.me/cache/og-image.png',
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      card: 'summary_large_image',
      images: {
        url: image ?? 'https://ogp.blog.euxn.me/cache/og-image.png',
      },
    },
  }
}
