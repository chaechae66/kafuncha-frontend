import React, { useState } from 'react'
import RowGraph from '../rowGraph/RowGraph'
import styles from './Graphs.module.css'

const Graphs = ({ data, wholeData }) => {
  const [active, setActive] = useState([
    { obj: true },
    { obj: false },
    { obj: false },
  ])
  const handleActive = _data => {
    console.log('_data', _data)
    setActive(() => {
      const newActive = [...active]
      console.log('newActive', newActive)
      // const numArray = [1,2,3]
      newActive.map((elem, index) => {
        if (index === Number(_data) - 1) {
          return (elem.obj = true)
        } else {
          return (elem.obj = false)
        }
      })
      return newActive
    })
  }
  return (
    <div className={styles.wrap}>
      {!data ? (
        <div className={styles.nullData}>데이터가 없습니다.</div>
      ) : (
        data.map((elem, index) => {
          return (
            <RowGraph
              wholeData={wholeData}
              key={elem.rank}
              rank={elem.rank}
              name={elem.name}
              messageCount={elem.messageCount}
              handleActive={handleActive}
              activeBool={active[index].obj}
            />
          )
        })
      )}
    </div>
  )
}

export default Graphs
