import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import OneUser from './OneUser';
import useSearchSort from './useSearchSort';

function Users({authToken}) {

    const [users, setUsers] = useState([]);
    
    
    const {setSearch, setSortBy, setSortOrder, search, sortBy, sortOrder} = useSearchSort();


    useEffect(() => {
        const fetchUsers = async () => {

          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/api/users',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json', 
              'Authorization': 'Bearer ' + authToken
            },
            params: {
              search,
              sortBy,
              sortOrder,
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
      }, [search, sortBy, sortOrder]);



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
      <div className='search-sort-controls'>
        <input type='text'  className='search-input' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={sortBy} className='sort-by-select' onChange={(e) => setSortBy(e.target.value)}>
          <option value='name'>Name</option>
          <option value='email'>Email</option>
        </select>
        <select value={sortOrder} className='sort-order-select'  onChange={(e) => setSortOrder(e.target.value)}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </div>      
    {users.map(user => (
      <OneUser user={user} authToken={authToken} key={user['id: ']} removeDeletedTicket={removeDeletedTicket} />
    ))}
  </div>
  )
}

export default Users