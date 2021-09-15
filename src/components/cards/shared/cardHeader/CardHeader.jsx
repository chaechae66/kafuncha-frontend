import React from 'react'
import styles from './CardHeader.module.css'

const CardHeader = ({ title, handlePeriodData, handlePruneData, prune }) => {
  const changePeriodData = e => {
    handlePeriodData(e.target.value)
  }

  const changePruneData = e => {
    handlePruneData(e.target.value)
  }

  return (
    <div className={styles.header}>
      <strong className={styles.title}>{title}</strong>
      {!prune ? (
        <select className={styles.selectBox} onChange={changePeriodData}>
          <option value="daily">일간</option>
          <option value="weekly">주간</option>
          <option value="monthly">월간</option>
        </select>
      ) : (
        <select className={styles.selectBox} onChange={changePruneData}>
          <option value="threeDays">3일</option>
          <option value="fiveDays">5일</option>
          <option value="sevenDays">7일</option>
        </select>
      )}
    </div>
  )
}

export default CardHeader
