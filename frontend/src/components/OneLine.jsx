import React from 'react'
import BuyTicketBtn from './BuyTicketBtn'
import { Link } from 'react-router-dom'


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
      <Link to={'/lines/' + line.number} className='see-more-link'>See more info</Link>
    </div>
  )
}

export default OneLine