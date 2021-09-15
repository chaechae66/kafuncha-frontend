import React from 'react'
import styles from './RankMember.module.css'

const RankMember = ({ user, msgCountOrDate, percent, unit, index,prune }) => {
  const rank = index + 1
  const rankOpacity = 1 / rank
  return (
    <>
      {!prune ? (
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
      ):(
        <div className={styles.wrap}>
          <strong
            style={{
              color: rank <= 3? '#fa5341' : '#3771df',
              opacity: rankOpacity >= 0.25 ? rankOpacity : 0.25,
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
      )}
    </>
  )
}

export default RankMember
