import Head from 'next/head';
import styles from '../styles/Classes.module.css';

function ClassesPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classes</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Classes</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h2>Yoga</h2>
            <p>Our yoga classes are designed to improve flexibility and balance.</p>
          </li>
          <li className={styles.listItem}>
            <h2>Weightlifting</h2>
            <p>Our weightlifting classes are designed to improve strength and muscle mass.</p>
          </li>
          <li className={styles.listItem}>
            <h2>Cardio</h2>
            <p>Our cardio classes are designed to improve cardiovascular health.</p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default ClassesPage;