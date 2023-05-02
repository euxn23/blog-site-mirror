import Image from 'next/image'
import entries from '@/src/prebuilt.json'
import { EntryCard } from '@/src/component/entry-card/entry-card'
import styles from './top.module.scss'
import React from 'react'
import { Pickup } from '@/src/component/pickup/pickup'

export default function Top() {
  return (
    <div className={styles.top}>
      <main className={styles.main}>
        <div className={styles.title}>Newest</div>
        <div className={styles.entries}>
          {entries.map((entry) => (
            <EntryCard {...entry} key={entry.slug} />
          ))}
        </div>
      </main>
      <Pickup />
    </div>
  )
}
