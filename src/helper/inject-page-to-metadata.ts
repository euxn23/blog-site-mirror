import { Metadata } from 'next'

export function injectPageToMetadata({
  title: title_,
  image,
}: {
  title?: string
  image?: string
}): Metadata {
  const title = title_ ?? 'blog.euxn.me'

  return {
    title,
    description: 'A blog by @euxn23',
    icons: '/favicon.ico',
    keywords: ['euxn23', 'blog', 'euxn.me', 'ユーン'],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      minimumScale: 1,
    },
    openGraph: {
      title: title,
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
      title: title,
      images: {
        url: image ?? 'https://ogp.blog.euxn.me/cache/og-image.png',
      },
    },
  }
}
