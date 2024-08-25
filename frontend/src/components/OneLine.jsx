import React from 'react'



function OneLine({line}) {





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
      {/* ovde ce da ide dugme */}
    </div>
  )
}

export default OneLine