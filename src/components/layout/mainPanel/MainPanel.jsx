import React from 'react'
import ChattingRank from '../../cards/chattingRank/ChattingRank'
import MentionRank from '../../cards/mentionRank/MentionRank'
import styles from './MainPanel.module.css'

const MainPanel = () => {
  return (
    <>
      <section className={styles.rankArea}>
        <ChattingRank />
        <MentionRank />
      </section>
    </>
  )
}

export default MainPanel
