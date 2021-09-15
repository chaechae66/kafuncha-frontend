import React, { useEffect } from 'react'
import styles from './ChattingCount.module.css'

const ChattingCount = () => {
  useEffect(() => {
    fetch('https://programming.coffee/attendance')
    .then((res) => {if(res.ok){return res.json()}})
    .then(res => console.log(res))
  }, [])
  return (
    <div className={styles.box}>
      <div className={styles.countBox}>
        <span>전체 채팅 횟수</span>
        <span>1000</span>
      </div>
      <br />
      <div className={styles.countBox}>
        <span>하루 채팅 횟수</span>
        <span>1000</span>
      </div>
    </div>
  )
}

export default ChattingCount
