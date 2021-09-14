import React, { useEffect, useState } from 'react'
import CardHeader from '../shared/cardHeader/CardHeader'
import RankMember from '../shared/rankMember/RankMember'
import RowGraph from '../shared/rowGraph/RowGraph'
import styles from './ChattingRank.module.css'
import { v4 } from 'uuid'
const ChattingRank = () => {
  const [data, setData] = useState(null)
  const [wholeData, setWholeData] = useState(null)

  const fileName =
    '/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv'

  useEffect(() => {
    fetch(
      'https://programming.coffee/daily-champion-rank' +
        fileName +
        '?rewindNumDays=8'
    ) //
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(res => res.slice(153, 229))
      .then(res => {
        console.log('res', res)
        let dataAry = []
        let copyRes = res.slice()
        dataAry = copyRes.reduce((acc, data) => {
          if (acc.some(elem => elem.user === data.user)) {
            let findData = acc.find(elem => elem.user === data.user)
            findData.messageCount += data.messageCount
          } else {
            acc.push(data)
          }
          return acc
        }, [])
        return dataAry
      })
      .then(res =>
        res.sort((a, b) => {
          return b.messageCount - a.messageCount
        })
      )
      .then(res => {
        return [res[0], res[1], res[2]]
      })
      .then(res => setData(res))
  }, [])

  useEffect(() => {
    fetch('https://programming.coffee/daily-chat-count')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(res => res.slice(0, 3))
      .then(res => {
        let totalCount = 0
        res.forEach(ele => {
          totalCount += ele.count
        })
        setWholeData(totalCount)
      })
  }, [])

  return (
    <div className={styles.box}>
      <CardHeader title="채팅랭킹" />
      <br />
      {!data ? (
        <h3>데이터가 없습니다.</h3>
      ) : (
        data.map(elem => (
          <RowGraph
            key={v4()}
            user={elem.user}
            msgCount={elem.messageCount}
            wholeData={wholeData}
          />
        ))
      )}
      <br />
      {!data ? (
        <></>
      ) : (
        data.map((elem, index) => (
          <RankMember
            key={v4()}
            index={index}
            user={elem.user}
            msgCountOrDate={elem.messageCount}
            percent={null}
            unit="회"
          />
        ))
      )}
    </div>
  )
}

export default ChattingRank
