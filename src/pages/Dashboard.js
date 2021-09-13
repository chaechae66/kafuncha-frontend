import { Link } from 'react-router-dom'
import ChattingRank from '../components/cards/chattingRank/ChattingRank'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.bg}>
      <ChattingRank />
      <Link to="/" className={styles.goToIntro}>
        인트로 Go!!
      </Link>
    </div>
  )
}
