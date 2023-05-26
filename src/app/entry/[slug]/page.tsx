import entries from '@/src/prebuilt.json'
import { notFound } from 'next/navigation'
import ReactMarkdown, { Components } from 'react-markdown'
import './entry.scss'
import { Pickup } from '@/src/component/pickup/pickup'
import { format, parseISO } from 'date-fns'
import { Code } from 'bright'
import { Metadata } from 'next'
import { injectPageToMetadata } from '@/src/helper/inject-page-to-metadata'
import { OGP_WORKER, SITE_NAME } from '@/src/env'

type Props = {
  params: {
    slug: string
  }
}

const components: Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)(:.+)/.exec(className || '')
    return !inline && match ? (
      // @ts-expect-error Server Component
      <Code {...props} theme={'one-dark-pro'} lang={match[1]} title={match[2]?.slice(1)} lineNumbers>
        {String(children).replace(/\n$/, '')}
      </Code>
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    )
  },
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = entries.find((entry) => entry.slug === params.slug)
  if (!entry) {
    return {
      title: `404 Not Found | ${SITE_NAME}`,
    }
  }
  return injectPageToMetadata({
    title: `${entry.title} | ${SITE_NAME}`,
    image: `${OGP_WORKER}?title=${entry.title}`,
  })
}
export default function Entry({ params }: Props) {
  const entry = entries.find((entry) => entry.slug === params.slug)
  if (!entry) {
    notFound()
  }
  return (
    <div className="entry">
      <div className="header">
        <h1 className="text">{entry.title}</h1>
      </div>
      <div className="container">
        <main className="main">
          <div className="date">
            {format(parseISO(entry.date), 'yyyy-MM-dd E.')}
          </div>
          <div className="content">
            <ReactMarkdown className="markdown" components={components}>
              {entry.content}
            </ReactMarkdown>
          </div>
        </main>
        <Pickup />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return entries.map((entry) => ({
    date: format(parseISO(entry.date), 'yyyy-MM-dd'),
    slug: entry.slug,
  }))
}
