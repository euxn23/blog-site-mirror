import entries from '@/src/prebuilt.json'
import { notFound } from 'next/navigation'
import ReactMarkdown, { Components } from 'react-markdown'
import styles from './entry.module.scss'
import { Pickup } from '@/src/component/pickup/pickup'
import { format, parseISO } from 'date-fns'
import { Code } from 'bright'

type Props = {
  params: {
    date: string
    slug: string
  }
}

const components: Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      // @ts-expect-error Server Component
      <Code
        {...props}
        theme={'one-dark-pro'}
        lang={match[1]}
        lineNumbers
      >
        {String(children).replace(/\n$/, '')}
      </Code>
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    )
  },
}
export default function Entry({ params }: Props) {
  const entry = entries.find((entry) => entry.slug === params.slug)
  if (!entry) {
    notFound()
  }
  return (
    <div className={styles.entry}>
      <div className={styles.header}>
        <h1 className={styles.text}>{entry.title}</h1>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.date}>
            {format(parseISO(entry.date), 'yyyy-MM-dd E.')}
          </div>
          <div className={styles.content}>
            <ReactMarkdown className={styles.markdown} components={components}>
              {entry.content}
            </ReactMarkdown>
          </div>
        </main>
        <Pickup />
      </div>
    </div>
  )
}
