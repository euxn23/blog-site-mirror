'use client'

import * as Accordion from '@radix-ui/react-accordion'
import data from '@/src/prebuilt.json'
import { OtherWork } from '@/src/component/other-work/other-work'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { useCallback, useEffect, useState } from 'react'
import './other-works.scss'

function OtherWorksDesktop() {
  return (
    <div className="other-works">
      <div className="title">Other Works</div>
      <div className="entries">
        {data.otherWorks.map((entry, index) => (
          <>
            {index !== 0 && <hr className="line" />}
            <OtherWork {...entry} key={entry.url} />
          </>
        ))}
      </div>
    </div>
  )
}

function OtherWorksMobile() {
  return (
    <Accordion.Root className="other-works" type="single" collapsible asChild>
      <Accordion.Item value="other-works">
        <Accordion.Trigger className="title">
          Other Works
          <ChevronDownIcon className="chevron" aria-hidden />
        </Accordion.Trigger>
        <Accordion.Content className="entries">
          {data.otherWorks.map((entry, index) => (
            <>
              {index !== 0 && <hr className="line"/>}
              <OtherWork {...entry} key={entry.url} />
            </>
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export function OtherWorks() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 800)
  const handleResize = useCallback(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [setIsMobile])
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return isMobile ? <OtherWorksMobile /> : <OtherWorksDesktop />
}
