import './globals.css'
import { Oswald } from 'next/font/google'
import './layout.scss'
import Link from 'next/link'
import { injectPageToMetadata } from '@/src/helper/inject-page-to-metadata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

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
              <img className="icon" src="/icon.png" />
              <div className="title">blog.euxn.me</div>
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
                <div className="euxn">©2023 SUZUKI Yuta.&nbsp;<span className="nao">designed by ENDO Nao.</span></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
