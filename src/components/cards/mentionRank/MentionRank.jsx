import React, { useEffect, useState } from 'react'
import styles from '../chattingRank/ChattingRank.module.css'
import CardHeader from '../shared/cardHeader/CardHeader'
import RankMember from '../shared/rankMember/RankMember'
import RowGraph from '../shared/rowGraph/RowGraph'
import { v4 } from 'uuid'

const MentionRank = () => {
  const [data, setData] = useState(null)
  const [wholeData, setWholeData] = useState(null)
  const [changeUrl, setChangeUrl] = useState(4)
  const [loading, setLoading ] = useState(false)

  const fileName =
    '/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv'

  const handlePeriodData = value => {
    switch (value) {
      case 'daily':
        setChangeUrl(4)
        break
      case 'weekly':
        setChangeUrl(18)
        break
      case 'monthly':
        setChangeUrl(41)
        break
      default:
        throw Error(value + '는 없는 매게변수입니다!')
    }
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://programming.coffee/mention' + fileName) //
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(res => res.splice(0, changeUrl))
      .then(res => {
        console.log('mention', res)
        let dataAry = []
        let copyRes = res.slice()
        dataAry = copyRes.reduce((acc, data) => {
          if (acc.some(elem => elem.user === data.user)) {
            let findData = acc.find(elem => elem.user === data.user)
            findData.mentionCount += data.mentionCount
          } else {
            acc.push(data)
          }
          return acc
        }, [])
        return dataAry
      })
      .then(res =>
        res.sort((a, b) => {
          return b.mentionCount - a.mentionCount
        })
      )
      .then(res => {
        return [res[0], res[1], res[2]]
      })
      .then((res) => {
        setData(res)
        setLoading(false)
      })
  }, [changeUrl])

  useEffect(() => {
    setLoading(true)
    fetch('https://programming.coffee/mention' + fileName) //
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(res => res.splice(0, changeUrl))
      .then(res => {
        let totalCount = 0
        res.map(elem => (totalCount += elem.mentionCount))
        setWholeData(totalCount)
        setLoading(false)
      })
  }, [changeUrl])
  return (
    <div className={styles.box}>
      <CardHeader
        title="맨션 랭킹"
        handlePeriodData={handlePeriodData}
        prune={false}
      />
      <br />
      {!loading ? (
        !data && !wholeData ? (
          <h3>데이터가 없습니다.</h3>
        ) : (
          data.map(elem => (
            <RowGraph
              key={v4()}
              user={elem.user}
              msgCount={elem.mentionCount}
              wholeData={wholeData}
            />
          ))
        )
      ) : (
        <h3>로딩 중입니다.</h3>
      )}
      <br />
      {!loading ? (
        !data && !wholeData ? (
          <></>
        ) : (
          data.map((elem, index) => (
            <RankMember
              key={v4()}
              index={index}
              user={elem.user}
              msgCountOrDate={elem.mentionCount}
              percent={null}
              unit="회"
              prune={false}
            />
          ))
        )
      ):(
        <></>
      )}
    </div>
  )
}

export default MentionRank
