import { Components } from 'react-markdown'
import dynamic from 'next/dynamic'

const DynamicTweetEmbed = dynamic(() => import('./tweet-embed'), { ssr: false })

export const a: Components['a'] = ({ node, href, className, ...props }) => {
  const twitterMatch = /https:\/\/twitter\.com\/.+\/status\/(.+)/.exec(
    href || ''
  )
  if (twitterMatch) {
    return (
      <div className={className}>
        <DynamicTweetEmbed tweetId={twitterMatch[1]} />
      </div>
    )
  }
  return <a href={href} className={className} {...props} />
}
