import { EntryData } from '@/src/app/types'
import styles from './entry-card.module.scss'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export const EntryCard = ({ title, date, tags, slug }: EntryData) => (
  <Link href={`/entry/${format(parseISO(date), 'yyyy-MM-dd')}/${slug}`} className={styles.entry_card}>
    <div className={styles.header}>
      <div className={styles.date}>
        {format(parseISO(date), 'yyyy-MM-dd E.')}
      </div>
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag_item} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className={styles.title}>{title}</div>
  </Link>
)
