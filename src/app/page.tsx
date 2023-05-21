import Image from 'next/image'
import entries from '@/src/prebuilt.json'
import { EntryCard } from '@/src/component/entry-card/entry-card'
import './top.scss'
import React from 'react'
import { Pickup } from '@/src/component/pickup/pickup'

export default function Top() {
  return (
    <div className="top">
      <main className="main">
        <div className="title">Newest</div>
        <div className="entries">
          {entries.map((entry) => (
            <EntryCard {...entry} key={entry.slug} />
          ))}
        </div>
      </main>
      <Pickup />
    </div>
  )
}
