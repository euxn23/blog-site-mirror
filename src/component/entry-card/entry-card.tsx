import { EntryData } from '@/src/app/types'
import './entry-card.scss'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export const EntryCard = ({ title, date, tags, slug }: EntryData) => (
  <Link href={`/entry/${slug}`} className="entry-card">
    <div className="header">
      <div className="date">{format(parseISO(date), 'yyyy-MM-dd E.')}</div>
      {tags && (
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag-item" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="title">{title}</div>
  </Link>
)
