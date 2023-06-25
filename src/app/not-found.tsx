import Link from 'next/link'
 
// https://github.com/vercel/next.js/issues/48227
// static exportではnot-found.tsxが404.htmlにコンパイルされないバグがある...
// ただ結局、CDNから配信されると404.htmlは機能しないので、別途ルーティングする必要あり

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">Home</Link>
      </p>
    </div>
  )
}
