import React from 'react'

 const Score = (props) => {
     const {duration, accuracy, wordsPerMinute} =props.score ;
  return (
    <div className="card-deck">
    <div className="card  col-md-3 mb-3 bg-secondary text-white p-2">
       <h6 className=''> Süre : {duration}</h6>
    </div>
    <div className="card col-md-3 mb-3 bg-secondary text-white p-2">
    <h6 className=''> Doğruluk : {accuracy}</h6>
         
    </div>
    <div className="card col-md-3 mb-3 bg-secondary text-white p-2">
        <h6 className=''> DBK : {wordsPerMinute}</h6>
    </div>
</div>
  )
}
export default Score;