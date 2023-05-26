import { Code } from 'bright'
import { Components } from 'react-markdown'

export const code: Components['code'] = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)(:.+)?/.exec(className || '')
  return !inline && match ? (
    // @ts-expect-error Server Component
    <Code
      {...props}
      theme={'one-dark-pro'}
      lang={match[1]}
      title={match[2]?.slice(1)}
      lineNumbers
    >
      {String(children).replace(/\n$/, '')}
    </Code>
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  )
}
