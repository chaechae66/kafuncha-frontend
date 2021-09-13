import styles from './Dashboard.module.css'
import Header from '../components/layout/header/Header'
import Side from '../components/layout/side/Side'
import MainPanel from '../components/layout/mainPanel/MainPanel'

export default function Dashboard() {
  return (
    <div className={styles.bg}>
      <Header />
      <main className={styles.main}>
        <Side />
        <MainPanel />
      </main>
    </div>
  )
}
