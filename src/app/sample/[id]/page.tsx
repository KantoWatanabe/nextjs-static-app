'use client'

import styles from '../../../styles/page.module.css'
import Link from 'next/link'

// ダイナミックルーティングのページはSGではHTMLが作られない
// https://nextjs.org/docs/app/api-reference/file-conventions/page
// searchParamsを使用するとSGビルド時に以下エラーが発生
// StaticGenBailoutError: Page with `dynamic = "error"` couldn't be rendered statically because it used `searchParams.a`.

export default function Home({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {
    a: string | string[] | undefined,
    b: string | string[] | undefined,
  };
}) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is Sample Detail Page. {params.id}
        </p>
        <Link href="/sample">Back to Sample.</Link>
      </div>
    </main>
  )
}