import { Link } from 'react-router-dom';
import styles from '../scss/Header.module.scss'

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link to="/">Vocabulary</Link>
      </h1>
      <div className={styles.menu}>
        <Link to="/create_word" className={styles.link}>
          add New Word
        </Link>
        <Link to="/create_day" className={styles.link}>
          add New Day
        </Link>
      </div>
    </div>
  )
}

export default Header;