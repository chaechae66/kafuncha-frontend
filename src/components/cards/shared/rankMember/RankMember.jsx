import React from 'react'
import styles from './RankMember.module.css'

const RankMember = ({ user, msgCountOrDate, percent, unit, index }) => {
  const rank = index + 1
  const rankOpacity = 1 / rank
  console.log('rank', rank)
  console.log('opacity', rankOpacity)
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
      <strong className={styles.name}>{user}</strong>
      {!percent ? <></> : <div>{percent}</div>}
      <span className={styles.count}>
        {msgCountOrDate}
        {unit}
      </span>
    </div>
  )
}

export default RankMember
