import React from 'react'
import OneTicket from './OneTicket'

function OneUser({user}) {

  return (
    <div className='user-card'>
      <h2 className='user-info-title'>{user['Name: ']}</h2>
      <p className='user-info'><strong>Email:</strong> {user['Email: ']}</p>
      <p className='user-info'><strong>Phone number:</strong> {user['Phone number: '] || '/'}</p>
      <p className='user-info'><strong>Address:</strong> {user['Address: '] || '/'}</p>
      
      {Array.isArray(user['Tickets: ']) && user['Tickets: '].length > 0 ? (     //mora ova provera da li je array
        <div className='user-tickets'>
          <h3>Tickets: </h3>
          {user['Tickets: '].map(ticket => (
            <OneTicket key={ticket['id: ']} ticket={ticket} page='admin' />
          ))}
        </div>
      ) : (
        <p><strong>Tickets:</strong> {user['Tickets: ']}</p>
      )}
    </div>
  )
}

export default OneUser