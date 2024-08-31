import React from 'react'



function OneTicket({ticket, page}) {



    const ticketPage = page === 'admin' ? 'ticket-admin' : 'ticket';



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
  </div>
  )
}

export default OneTicket