import Head from 'next/head';
import styles from '../styles/About.module.css';

function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Our gym was founded to provide a safe and supportive environment for
          individuals to achieve their fitness goals.
        </p>
        <div className={styles.grid}>
          <img
            src="/images/gym-pic1.jpg"
            alt="Gym Picture 1"
            className={styles.image}
          />
          <img
            src="/images/gym-pic2.jpg"
            alt="Gym Picture 2"
            className={styles.image}
          />
          <img
            src="/images/gym-pic3.jpg"
            alt="Gym Picture 3"
            className={styles.image}
          />
        </div>
      </main>
    </div>
  );
}

export default AboutPage;