import React from 'react'
import styles from './Side.module.css'
import ChattingCount from '../../chattingCount/ChattingCount'

const Side = () => {
  return (
    <aside className={styles.aside}>
      <ChattingCount />
    </aside>
  )
}

export default Side
