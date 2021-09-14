import React from 'react'
import styles from './CardHeader.module.css'

const CardHeader = ({ title }) => {
  // const changePeriodData = e => {
  //   handlePeriodData(e.target.value)
  // }

  return (
    <div className={styles.header}>
      <strong className={styles.title}>{title}</strong>
      <select
        className={styles.selectBox}
        // onChange={changePeriodData}
      >
        <option value="daily">일간</option>
        <option value="weekly">주간</option>
        <option value="monthly">월간</option>
      </select>
    </div>
  )
}

export default CardHeader
