"use client"

import styles from '../page.module.css'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

export default function Home() {
  // https://nextjs.org/docs/app/api-reference/functions/use-search-params
  const searchParams = useSearchParams();
  const search = searchParams.get('query');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is Sample Page.  {search}
        </p>
        <Link href="/sample/sample1-2">Go to Sample1-2.</Link>
        <Link href="/sample/111">Go to Sample Detail.</Link>
        <Link href="/">Back to Home.</Link>
      </div>
    </main>
  )
}