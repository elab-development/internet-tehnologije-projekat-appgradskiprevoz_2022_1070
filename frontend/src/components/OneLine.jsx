import React from 'react'
import BuyTicketBtn from './BuyTicketBtn'


function OneLine({line, authToken}) {





  return (
    <div className='line-container'>
      <h2 className='line-number'>{'Line ' + line.number}</h2>
      <div className='locations'>
        <div className='location'>
          <h3 className='location-name'>Start Location:</h3>
          <p className='location-dest'>{line.start_location}</p>
        </div>
        <div className='location'>
          <h3 className='location-name'>End Location:</h3>
          <p className='location-dest'>{line.end_location}</p>
        </div>
      </div>
      <BuyTicketBtn number={line.number} authToken={authToken} />
      <a href={'/lines/' + line.number} className='see-more-link'>See more info</a>
    </div>
  )
}

export default OneLine