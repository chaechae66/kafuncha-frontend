import React from 'react'
import styles from './RankMember.module.css'

const RankMember = ({ rank, name, messageCount }) => {
  const rankOpacity = 1 / rank
  return (
    <div className={styles.wrap}>
      <strong
        style={{
          color: '#3771df',
          opacity: rankOpacity,
          width: '3rem',
        }}>
        {rank}위
      </strong>
      <strong className={styles.name}>{name}</strong>
      <span className={styles.count}>{messageCount}회</span>
    </div>
  )
}

export default RankMember
