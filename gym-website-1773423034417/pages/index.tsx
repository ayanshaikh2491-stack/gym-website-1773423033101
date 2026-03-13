import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Website</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our Gym</h1>
        <p className={styles.description}>
          Get fit with our professional trainers and state of the art equipment
        </p>
        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About Us</h2>
          </Link>
          <Link href="/classes" className={styles.card}>
            <h2>Classes</h2>
          </Link>
          <Link href="/contact" className={styles.card}>
            <h2>Contact Us</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;