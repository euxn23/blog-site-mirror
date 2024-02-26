import data from '../../prebuilt.json'
import './orhet-works.scss'
import { OtherWorksEntry } from '@/src/component/other-works-entry/other-works-entry'

const Line = () => (
  <div className="line" />
)

export const OtherWorks = () => (
  <div className="other-works">
    <div className="title">Other Works</div>
    <div className="entries">
      {data.otherWorks.map((entry, index) => (
        <>
          {index !== 0 && <Line />}
          <OtherWorksEntry {...entry} key={entry.url} />
        </>
      ))}
    </div>
  </div>
)
