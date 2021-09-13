import React, { useEffect, useState } from 'react'

const ChattingRank = () => {
  const [data, setData] = useState(null)

  const fileName =
    '/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv'

  console.log('data', data)

  useEffect(() => {
    fetch(
      'https://programming.coffee/daily-champion-rank' +
        fileName +
        '?rewindNumDays=3'
    ) //
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
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
          return dataAry
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

  console.log('setdata', data)
  return <div>chattingRank</div>
}

export default ChattingRank
