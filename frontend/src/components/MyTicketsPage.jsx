import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import OneTicket from './OneTicket';
import { useNavigate } from 'react-router-dom';


function MyTicketsPage({authToken}) {



    const[tickets,setTickets]=useState([]);

    const navigate=useNavigate();

    useEffect(() => {

        const getTickets = async () => {

          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/api/mytickets',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken,
            },
          };
    
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            setTickets(response.data.tickets);
          })
          .catch((error) => {
            console.log(error);
            if(error.response.status===401){
                alert('You must be logged in to see your tickets.');
                navigate('/lines');
            }
          });
        };
    
        getTickets();
      }, []);


      




  return (
    <div className='tickets-container'>
         {tickets.length === 0 ? (
      <div className='no-tickets-message'>
        You do not have any tickets.
      </div>
    ) : (
      tickets.map(ticket => (
        <OneTicket key={ticket['id: ']} ticket={ticket} page='mytickets' />
      ))
    )}
    </div>
  )
}

export default MyTicketsPage