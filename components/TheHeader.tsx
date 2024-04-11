import Link from "next/link";
import styles from "./TheHeader.module.scss";

const TheHeader = () => {
  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog" className={styles.link}>Blog</Link>
          </li>
          <li className={styles.item}>
            <Link href="/about" className={styles.link}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export {TheHeader};