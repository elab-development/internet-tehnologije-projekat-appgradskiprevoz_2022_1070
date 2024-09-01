import React from 'react'
import axios from 'axios';



function OneTicket({ticket, page, authToken, removeDeletedTicket}) {



    const ticketPage = page === 'admin' ? 'ticket-admin' : 'ticket';

    const handleDelete = () => {
        const config = {
          method: 'delete',
          maxBodyLength: Infinity,
          url: '/api/deleteticket/' + ticket['id: '],
          headers: { 
            'Accept': 'application/json', 
            'Authorization': 'Bearer ' + authToken
          },
        };
    
        axios.request(config)
          .then((response) => {
            console.log(response.data);
            alert(response.data);
            if(removeDeletedTicket) {
              removeDeletedTicket(ticket['id: ']);
          }
          })
          .catch((error) => {
            console.log(error);
            alert(error.response.data);
          });
      };

  return (
    <div className={ticketPage}>
        <div className='ticket-id'><h3>Ticket ID: {ticket['id: ']}</h3></div>
        <div className='ticket-info'>
            <div className='ticket-info-1'>
                <p>Line:  {ticket['Line: ']}</p>
                <p>Price: {ticket['Price: ']}</p>
            </div>
            <div className='ticket-info-2'>
                <p>Purchased: {ticket['Purchased: ']}</p>
                <p>Valid until: {ticket['Valid until: ']}</p>
            </div>
        </div>
        {page === 'admin' && (
        <button onClick={handleDelete} className='delete-ticket-button'>
          Delete
        </button>
      )}
  </div>
  )
}

export default OneTicket