"use client"

import styles from '@/styles/page.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {TestItem} from '@/interfaces';
import {TEST} from '@/lib/const';
import {Cookie} from '@/lib/cookie';
import {useTest} from '@/lib/json'
import { useState } from 'react';

export default function Home() {
  // https://nextjs.org/docs/app/api-reference/functions/use-search-params
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  const [cookieStr, setCookieStr] = useState('');

  const handleSetClick = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    Cookie.set('test', 'aaa', {expires: expires, secure: true});
  };

  const handleGetClick = () => {
    const cookie = Cookie.get('test');
    setCookieStr(cookie ? cookie : '');
  };

  const handleRemoveClick = () => {
    Cookie.remove('test');
    const cookie = Cookie.get('test');
    setCookieStr(cookie ? cookie : '');
  };

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
      <div className={styles.description}>
        <button onClick={handleSetClick}>set cookie</button>
        <button onClick={handleGetClick}>get cookie</button><span>{cookieStr}</span>
        <button onClick={handleRemoveClick}>remove cookie</button>
      </div>
    </main>
  )
}

function TestList() {
  const { data, error } = useTest();

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
