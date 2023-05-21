import './globals.css'
import { Oswald } from 'next/font/google'
import './layout.scss'
import Link from 'next/link'
import { injectPageToMetadata } from '@/src/helper/inject-page-to-metadata'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata = injectPageToMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={oswald.className}>
        <div className="layout">
          <div className="container">
            <Link className="header" href="/">
              <img
                className="icon"
                src="/icon.png"
              />
              <div className="title">blog.euxn.me</div>
            </Link>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
