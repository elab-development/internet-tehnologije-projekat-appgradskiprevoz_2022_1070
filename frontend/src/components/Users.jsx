import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import OneUser from './OneUser';

function Users({authToken}) {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/api/users',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken,
            },
          };
    
          axios.request(config)
            .then((response) => {
              console.log(response.data);
            setUsers(response.data['users: ']);     //malo drugacije zato sto sam ovde u laravel-u koristio resource
            })
            .catch((error) => {
              console.log(error);
            });
        };
    
        fetchUsers();
      }, []);



      const removeDeletedTicket = (userId, ticketId) => {
        setUsers(users.map(user => {
            if (user['id: '] === userId) {
                return {
                    ...user,
                    ['Tickets: ']: user['Tickets: '].filter(ticket => ticket['id: '] !== ticketId),
                };
            }
            return user;
        }));
    };



  return (
    <div className='user-container'>
    {users.map(user => (
      <OneUser user={user} authToken={authToken} key={user['id: ']} removeDeletedTicket={removeDeletedTicket} />
    ))}
  </div>
  )
}

export default Users