import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LineShortcut() {

    const[lineNumbers, setLineNumbers]=useState([]);

    const navigate=useNavigate();

    const handleBlockClick = (number) => {
        navigate('/lines/' + number);
    };

    useEffect(() => {

    const fillLines= () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'api/lines?per_page=200',  //da bi odma ucitao sve linije
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            const numbers = response.data.data.map(item => item.number);
            setLineNumbers(numbers);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    fillLines();
    },[]);


  return (
    <div className='line-shortcut-container'>
        <div className='grid-container'>
                {lineNumbers.map((number) => (
                    <div key={number} className='line-block' onClick={() => handleBlockClick(number)}>{number}</div>
                ))}
        </div> 
    </div>
  )
}

export default LineShortcut