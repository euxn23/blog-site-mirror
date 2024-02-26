import data from '@/src/prebuilt.json'
import { EntryCard } from '@/src/component/entry-card/entry-card'
import { OtherWorks } from '@/src/component/other-works/other-works'
import './top.scss'

export default function Top() {
  return (
    <div className="top">
      <main className="main">
        <div className="title">Newest</div>
        <div className="entries">
          {data.entries.map((entry) => (
            <EntryCard {...entry} key={entry.slug} />
          ))}
        </div>
      </main>
      <OtherWorks />
    </div>
  )
}
