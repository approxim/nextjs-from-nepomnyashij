import { log } from "console";
import { Metadata } from "next"
import Link from "next/link";
import styles from "./Blog.module.scss";

async function getData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/postsвв", {
    next: {
      revalidate: 60, // время в секундах, через которое будет срабатывать очередной запрос на сервер
    }
  });

  if (!response.ok) throw new Error("Unable to fetch posts!"); // текст ошибки, с случае когда не удается запросить данные с сервера

  return response.json()
}

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "some blog description"
}

export default async function Blog() {
  const posts = await getData()

  return (
    <>
      <h1>Blog page</h1>
      <ul className={styles.list}>
        {posts.map((post: any) => (
          <li className={styles.post} key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
