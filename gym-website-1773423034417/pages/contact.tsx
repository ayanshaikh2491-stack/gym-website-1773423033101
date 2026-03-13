import Head from 'next/head';
import styles from '../styles/Contact.module.css';

function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea placeholder="Message" className={styles textarea} />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
}

export default ContactPage;