import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Flight Status App</h1>
      <p className={styles.description}>
        <Link href="/flight" className={styles.link}>View Flight Status</Link>
      </p>
    </div>
  );
}