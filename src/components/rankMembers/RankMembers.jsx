import React from 'react'
import RankMember from '../rankMember/RankMember'

const RankMembers = ({ data }) => {
  return (
    <>
      {!data ? (
        <></>
      ) : (
        data.map(elem => {
          return (
            <RankMember
              key={elem.rank}
              name={elem.name}
              rank={elem.rank}
              messageCount={elem.messageCount}
            />
          )
        })
      )}
    </>
  )
}

export default RankMembers
