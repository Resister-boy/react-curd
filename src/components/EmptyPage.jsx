import { Link } from 'react-router-dom';
import styles from '../scss/EmptyPage.module.scss';

function EmptyPage() {
  return (
    <div className={styles.container}>
      <div>
        <h2>잘못된 접근입니다</h2>
        <Link className={styles.button} to="/">돌아가기</Link>
      </div>
    </div>
  )
}

export default EmptyPage;