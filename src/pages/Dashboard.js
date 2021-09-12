import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.bg}>
      {/* <Card title="채팅 랭킹" /> */}
      {/* <Card
        title="맨션 랭킹"
      />
      <Card
        title="잠수 인원"
      /> */}
      <Link to="/" className={styles.goToIntro}>
        인트로 Go!!
      </Link>
    </div>
  )
}
