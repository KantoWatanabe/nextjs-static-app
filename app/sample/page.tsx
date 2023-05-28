import styles from '../page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is Sample Page.
        </p>
        <Link href="/sample/sample1-2">Go to Sample1-2.</Link>
        <Link href="/sample/111">Go to Sample Detail.</Link>
        <Link href="/">Back to Home.</Link>
      </div>
    </main>
  )
}