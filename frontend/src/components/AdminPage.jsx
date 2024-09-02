import React from 'react'
import Users from './Users'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import RegisterPage from './RegisterPage';


function AdminPage({authToken, userRole}) {



    const navigate=useNavigate();

    useEffect(() => {
        if (userRole !== 'admin' && userRole !== 'moderator') {         //ako user nije mod ili admin preusmerava ga na /lines
          navigate('/lines');
        }
      }, [userRole]);


  return (
    <div className='admin-container'>
        <div className='users-admin-container'>
            <Users authToken={authToken} />
        </div>
        <div className='forms-admin-container'>
             <RegisterPage adminPage='yes' authToken={authToken} />
        </div>

    </div>
  )
}

export default AdminPage