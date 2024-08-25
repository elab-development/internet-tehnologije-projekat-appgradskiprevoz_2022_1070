import React, { useEffect, useState } from 'react'
import OneLine from './OneLine';
import axios from 'axios';

function Lines({authToken}) {


const[lines, setLines] = useState([]);


useEffect(()=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/api/lines',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        },
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLines(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
}, []);



  return (
    <div className="lines-container">
    {lines.map(line => (
      <OneLine key={line.id} line={line} authToken={authToken} />
    ))}
  </div>
  )
}

export default Lines