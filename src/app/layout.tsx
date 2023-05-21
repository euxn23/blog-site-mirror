import './globals.css'
import { Inter } from 'next/font/google'
import styles from '@/src/app/layout.module.scss'
import Link from 'next/link'
import { injectPageToMetadata } from '@/src/helper/inject-page-to-metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = injectPageToMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className={styles.layout}>
          <div className={styles.top}>
            <Link className={styles.header} href="/">
              <img
                className={styles.icon}
                src="https://github.com/euxn23.png"
              />
              <div className={styles.title}>blog.euxn.me</div>
            </Link>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
