import { Components } from 'react-markdown'

export const p: Components['p'] = ({ node, ...props }) => {
  const childAnchorElement = node.children.find(
    (child) => child.type === 'element' && child.tagName === 'a'
  )
  if (
    (childAnchorElement as any)?.properties.href.startsWith(
      'https://twitter.com'
    )
  ) {
    return <div {...props} />
  }
  return <p {...props} />
}
