import './globals.scss'
import { Oswald, Noto_Sans_JP } from 'next/font/google'
import './layout.scss'
import Link from 'next/link'
import { injectPageToMetadata } from '@/src/helper/inject-page-to-metadata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import { SITE_NAME, THEME } from '@/src/config'

const oswald = Oswald({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  variable: '--font-oswald',
})
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const metadata = injectPageToMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" data-theme={THEME}>
      <body className={`${oswald.variable} ${notoSansJP.variable}`}>
        <div className="layout">
          <div className="container">
            <Link className="header" href="/">
              <img className="icon" src="/icon.png" />
              <div className="title">{SITE_NAME}</div>
            </Link>
            {children}
            <div className="footer">
              <div className="links">
                <a
                  href="https://twitter.com/euxn23"
                  target="_blank"
                  className="twitter"
                >
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a
                  href="https://github.com/euxn23"
                  target="_blank"
                  className="github"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </div>
              <div className="copylight">
                <div className="euxn">
                  ©2024 SUZUKI Yuta.&nbsp;
                  <span className="nao">designed by ENDO Nao.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
