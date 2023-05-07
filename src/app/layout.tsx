import './globals.css'
import { Inter } from 'next/font/google'
import styles from '@/src/app/layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'blog.euxn.me',
  description: 'A blog by @euxn23',
}

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
            <div className={styles.header}>
              <img
                className={styles.icon}
                src="https://github.com/euxn23.png"
              />
              <div className={styles.title}>blog.euxn.me</div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
