import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Operation Iron Soldier</title>
        <meta name="description" content="Operation Iron Soldier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Welcome to Operation Iron Soldier</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.etsy.com/shop/operationironsoldier"
          target="_blank"
          rel="noopener noreferrer"
        >
          Etsy Store
        </a>
      </footer>
    </div>
  )
}
