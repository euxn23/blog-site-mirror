import ReactMarkdown, { Components } from 'react-markdown'
import { code } from './code'
import { a } from './a'
import { p } from './p'
import './markdown.scss'

const components: Components = {
  code,
  a,
  p,
}
export const Markdown = ({ content }: { content: string }) => (
  <ReactMarkdown className="markdown" components={components}>
    {content}
  </ReactMarkdown>
)
