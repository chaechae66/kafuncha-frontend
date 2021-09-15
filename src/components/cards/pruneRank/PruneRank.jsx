import React, { useEffect, useState } from 'react'
import styles from '../chattingRank/ChattingRank.module.css'
import CardHeader from '../shared/cardHeader/CardHeader'
import RankMember from '../shared/rankMember/RankMember'

const PruneRank = () => {
  const fileName =
    '/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv'
  const [data, setData] = useState(null)
  const [changeUrl, setChangeUrl] = useState(3)
  const [loading, setLoading] = useState(false)

  const handlePruneData = value => {
    switch (value) {
      case 'threeDays':
        setChangeUrl(3)
        break
      case 'fiveDays':
        setChangeUrl(5)
        break
      case 'sevenDays':
        setChangeUrl(7)
        break

      default:
        throw Error(value + '는 없는 매게 변수 입니다.')
    }
  }

  console.log('loading',loading)

  useEffect(() => {
    setLoading(true)
    fetch('https://programming.coffee/prune' + fileName) //
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(res => {
        return res.filter(elem => elem.dataDiff >= changeUrl)
      })
      .then(res => {
        let resAry = [res[0], res[1], res[2], res[3], res[4], res[5], res[6]]
        return resAry.filter(elem => elem !== undefined)
      })
      .then((res) =>{
          setData(res)
          setLoading(false)
        })
  }, [changeUrl])
  return (
    <div className={styles.box}>
      <CardHeader
        title="잠수인원"
        prune={true}
        handlePruneData={handlePruneData}
      />
      <div style={{marginBottom:"2rem"}}></div>
      {!loading? (
        !data ? (
          <h3>데이터가 없습니다.</h3>
        ) : (
          data.map((elem, index) => (
            <>
              <RankMember
              user={elem?.user}
              percent={null}
              msgCountOrDate={elem?.lastShowDate}
              index={index}
              unit=""
              prune={true}
            />
            <div style={{marginBottom:'0.75rem'}}></div>
            </>
          ))
        )
      ):(
        <h3>로딩 중입니다.</h3>
      ) }
    </div>
  )
}

export default PruneRank
