import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import CardHeader from '../cardHeader/CardHeader'
import Graphs from '../graphs/Graphs'
import LoadingModal from '../loadingModal/LoadingModal'
import RankMembers from '../rankMembers/RankMembers'
import styles from './Card.module.css'

const Card = ({ title }) => {
  const [data, setData] = useState(null)
  const [wholeData, setWholeData] = useState(null)
  const [urlChangeData, setUrlChangeData] = useState(
    'daily-champion-rank/02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv'
  )
  const [urlChangeWholeData, setUrlChangeWholeData] =
    useState('daily-chat-count')

  useEffect(() => {
    CallWholeData()
    CallData()
  }, [urlChangeData, urlChangeWholeData])

  const CallWholeData = () => {
    useFetch(urlChangeWholeData, 'GET')
      .then(res => {
        return res.filter(elem => elem.date === '2021-09-03')
      })
      .then(res => {
        setWholeData(res)
      })
  }

  const CallData = () => {
    useFetch(urlChangeData, 'GET')
      .then(res => {
        return res.filter(elem => elem.date === '2021-09-03')
      })
      .then(res => {
        let dataList = []
        res.map(elem => {
          if (elem.rank === 1 || elem.rank === 2 || elem.rank === 3) {
            dataList.push(elem)
          }
        })
        setData(dataList)
      })
  }

  const handlePeriodData = (_data = 'daily') => {
    switch (_data) {
      case 'daily':
        setUrlChangeData(
          'daily-champion-rank/02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv'
        )
        setUrlChangeWholeData('daily-chat-count')
        break
      // case 'weekly' :
      //   console.log("주간")
      //   break
      // case 'monthly' :
      //   console.log("월간")
      //   break
      default:
        throw Error(console.log(_data + '는 올바른 매게변수가 아닙니다.'))
    }
  }

  return (
    <>
      {!data && !wholeData ? (
        <LoadingModal />
      ) : (
        <div className={styles.card}>
          <CardHeader title={title} handlePeriodData={handlePeriodData} />
          <Graphs data={data} wholeData={wholeData} />
          <RankMembers data={data} />
        </div>
      )}
    </>
  )
}

export default Card
