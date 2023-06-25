"use client"

import styles from '../../styles/page.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { basePath } from '../../lib/util';
import {TestItem} from '../../interfaces';
import {TEST} from '../../lib/const';

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
        <p>
          {TEST}
        </p>
        <p>
          NEXT_PUBLIC_ENV={process.env.NEXT_PUBLIC_ENV}
        </p>
        <Link href="/sample/sample1-2">Go to Sample1-2.</Link>
        {/*<Link href="/sample/111">Go to Sample Detail.</Link>-->*/}
        <Link href="/">Back to Home.</Link>
        <TestList />
      </div>
    </main>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function TestList() {
  const { data, error } = useSWR(`${basePath()}/json/test.json`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const listItems = data.list.map((item: TestItem) =>
    <li key={item.id}>{item.name}</li>
  );

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
