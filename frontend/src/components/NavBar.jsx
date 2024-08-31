import React from 'react'
import {Link} from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NavBar({authToken, setAuthToken, userRole, setUserRole}) {


const navigate=useNavigate();

function handleLogout(){
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/api/logout',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
        },
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.removeItem('auth_token');
        window.sessionStorage.removeItem('user_role');
        setAuthToken();   //postavljanje tokena i role-a na null kad se korisnik izloguje
        setUserRole();
        alert(response.data);
        navigate('/lines');
      })
      .catch((error) => {
        console.log(error);
      });
}
  



  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='nav-left-container'>
          <h3 className='nav-title'>BeoGP</h3>
          <Link to='/lines' className='nav-item' id='line-link'>Lines</Link>
          <Link to='/mytickets' className='nav-item' id='tickets-link'>MyTickets</Link>
          {userRole === 'moderator' || userRole === 'admin' ? (<Link to='/admin' className='nav-item' id='admin-link'>Admin</Link>) : <></>}
        </div>
        <div className='nav-right-container'>
            <div className='nav-dropdown'>
                <FaUser className='nav-user-icon' />
                <div className='nav-dropdown-menu'>
                    <Link to='/login' className={authToken!=null ? 'nav-dropdown-disabled' : 'nav-dropdown-item'}>Log in</Link>
                    <Link to='/logout' className={authToken!=null ? 'nav-dropdown-item' : 'nav-dropdown-disabled'} onClick={handleLogout}>Log out</Link>
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar