import React from 'react'
import styles from './RowGraph.module.css'

const RowGraph = ({
  name,
  wholeData,
  messageCount,
  handleActive,
  rank,
  activeBool,
}) => {
  const percent = (messageCount / wholeData[0].count) * 100
  const onActive = e => {
    e.preventDefault()
    handleActive(e.target.getAttribute('data-count'))
  }
  return (
    <div className={styles.wrap} onClick={onActive} data-count={rank}>
      <h3
        className={!activeBool ? styles.name : styles.activeName}
        data-count={rank}>
        {name}
      </h3>
      <div className={styles.wholeGraph} data-count={rank}>
        <div
          data-count={rank}
          style={
            !activeBool
              ? {
                  width: `${percent}%`,
                  height: '100%',
                  borderRadius: '5px',
                  backgroundColor: '#3771df',
                }
              : {
                  width: `${percent}%`,
                  height: '100%',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(246, 233, 110)',
                }
          }></div>
      </div>
    </div>
  )
}

export default RowGraph
