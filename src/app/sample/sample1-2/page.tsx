"use client"

import styles from '@/styles/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is Sample1-2 Page.
        </p>
        <Link href="/sample">Back to Sample.</Link>
      </div>
    </main>
  )
}