import styles from './page.module.css';
import AttractMode from './../components/AttractMode/AttractMode';

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <AttractMode />
    </main>
  )
}