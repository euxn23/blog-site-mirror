import { OtherWorks } from '@/src/types'
import './other-work.scss'
import { format, parse } from 'date-fns'

type Props = OtherWorks
export function OtherWork({ date, title, media, url }: Props) {
  return (
    <a href={url} target="_blank">
      <div className="other-work">
        <div className="date">{format(parse(date, 'yyyy-MM-dd', new Date()), 'yyyy-MM-dd E.')}</div>
        <div className="title-box">
          <div className="title">{title}</div>
          <div className="media">- {media}</div>
        </div>
      </div>
    </a>
  )
}
