import React from 'react'
import axios from 'axios';

function BuyTicketBtn({number, authToken}) {


function handleTicketBuying(){
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/api/lines/' + number + '/buy',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + authToken
        },
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
        if(error.response.status===404){
            alert(error.response.data);
        }else if(error.response.status===403){
            alert(error.response.data[0] + ', only users can purchase a ticket.');
        }else{
            alert(error.response.data.message + '\nYou must be logged in, in order to purchase a ticket.');
        }
      });
}



  return (
    <button className="buy-ticket-btn" onClick={handleTicketBuying}>
    Buy Ticket
  </button>
  )
}

export default BuyTicketBtn