import React, { useEffect, useState } from 'react'

const ChattingRank = () => {
  const [data] = useState(null)

  const fileName =
    '/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv'

  console.log('data', data)

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
      .then(res => {
        let dataAry = []
        let copyRes = [...res]
        dataAry = copyRes.reduce((acc, data) => {
          if (acc.some(elem => elem.user === data.user)) {
            console.log('data', data)
            let copyData = { ...data }
            let findData = acc.find(elem => elem.user === data.user)
            console.log('finddata', findData)
            findData.messageCount += copyData.messageCount
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
      .then(res => console.log('res', res))
    // .then(res => setData(res))
  }, [])

  console.log('setdata', data)
  return <div>chattingRank</div>
}

export default ChattingRank
