import { Metadata } from "next";
import styles from "./Post.module.scss";

async function getData(id: string){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // время в секундах, через которое будет срабатывать очередной запрос на сервер
    }
  });

  return response.json()
}

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: `${post.title} | Next App`,
    description: post.title,
  }
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
  <>
    <h1 className={styles.title}>{post.title}</h1>
    <div className={styles.container}>
      <p className={styles.desc}>{post.body}</p>
    </div>

  </>
  )
}
