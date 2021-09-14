import React from 'react'
import styles from './RowGraph.module.css'

const RowGraph = ({ user, msgCount, wholeData }) => {
  console.log('user', user)
  console.log('msgCount', msgCount)
  const percent = (msgCount / wholeData) * 100
  // const onActive = e => {
  //   e.preventDefault()
  //   handleActive(e.target.getAttribute('data-count'))
  // }
  return (
    <div
      className={styles.wrap}
      // onClick={onActive}
      // data-count={rank}
    >
      <h3
      // className={!activeBool ? styles.name : styles.activeName}
      // data-count={rank}
      >
        {user}
      </h3>
      <div
        className={styles.wholeGraph}
        // data-count={rank}
      >
        <div
          // data-count={rank}
          // style={
          //   !activeBool
          //     ? {
          //         width: `${percent}%`,
          //         height: '100%',
          //         borderRadius: '5px',
          //         backgroundColor: '#3771df',
          //       }
          //     : {
          //         width: `${percent}%`,
          //         height: '100%',
          //         borderRadius: '5px',
          //         backgroundColor: 'rgb(246, 233, 110)',
          //       }
          // }
          style={{
            width: `${percent}%`,
            height: '100%',
            borderRadius: '5px',
            backgroundColor: '#3771df',
          }}></div>
      </div>
    </div>
  )
}

export default RowGraph
