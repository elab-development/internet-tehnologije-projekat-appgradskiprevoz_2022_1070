import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage({setAuthToken, setUserRole, adminPage, authToken}) {

  const[errors, setErrors]=useState();

  const[userData, setUserData]=useState({

  })

  const navigate=useNavigate();

  function handleInput(e){
    setUserData({
      ...userData,    //spread operator -> stavlja sve iz userData u setUserData
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.post('/api/register', userData).then((response)=>{
     console.log(response.data);
      if(response.data.access_token!=null){
        setErrors({});
        window.sessionStorage.setItem('auth_token', response.data.access_token);
        setAuthToken(response.data.access_token);
        setUserRole(response.data.role);
        navigate('/lines');
      }else{
        setErrors(response.data[0]);  //posto je onaj response iz laravela ustv. niz, moram preko indeksa
      }                 
    }).catch((e)=>{
      console.log(e);
    })
  }



  function handleAddUser(e){
    e.preventDefault();

    
  }


  function handleUpdateUser(e){
    e.preventDefault();
    let data = userData;
    
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/api/updateuser',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + authToken
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      setErrors([]);
      alert(response.data);
      setUserData({});
    })
    .catch((error) => {
      console.log(error);
      setErrors(error.response.data[0]);
      if(error.response.status===404 || error.response.status===403){
        alert(error.response.data);
      }
      console.log(data);
    });
  }


  function handleDeleteUser(e){
    e.preventDefault();       //ovaj preventDefault() omogucava da se ne submituje forma i samim tim da se ne prikazuju oni spanovi sa error-ima
    let data = userData;
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: '/api/deleteuser',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + authToken
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      setErrors([]);
      alert(response.data);
      setUserData({});
    })
    .catch((error) => {
      console.log(error);
      setErrors(error.response.data.errors);
      if(error.response.status===403){
        alert(error.response.data);
      }
    });
  }

  return (
    <div className='register-page'>
      <div className='register-form-container'>
        <div className='register-header'>
          {adminPage==='yes' ? <></> : <img src='https://getlogo.net/wp-content/uploads/2021/02/city-of-belgrade-logo-vector.png' alt='Belgrade Logo' className='logo-img' />}
          <h1 className='header-text'>{adminPage==='yes' ? 'Manage Users' : 'Create a new account'}</h1>
        </div>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' className='form-control' onInput={handleInput} required={adminPage !== 'yes'} />
            {errors ? <span className='error-message'>{errors.name}</span> : <></>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' className='form-control' onInput={handleInput} required />
            {errors ? <span className='error-message'>{errors.email}</span> : <></>}
          </div>
          {adminPage==='yes' ? 
          <div className='form-group'>
            <label htmlFor='new_email'>New email</label>
            <input type='new_email' id='new_email' name='new_email' className='form-control' onInput={handleInput} />
            {errors ? <span className='error-message'>{errors.new_email}</span> : <></>}
          </div> : <></>}
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' className='form-control' onInput={handleInput} required={adminPage !== 'yes'} />
            {errors ? <span className='error-message'>{errors.password}</span> : <></>}
          </div>
          {adminPage==='yes' ? 
          <div className='form-group'>
            <label htmlFor='role'>Role</label>
              <select id='role' name='role' className='form-control' onChange={handleInput} value={userData.role}>
                  <option value='user'>User</option>
                  <option value='moderator'>Moderator</option>
                  <option value='admin'>Admin</option>
              </select>
          </div> : <></>}
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' name='address' className='form-control' onInput={handleInput} placeholder='optional' />
            {errors ? <span className='error-message'>{errors.address}</span> : <></>}
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone number</label>
            <input type='tel' id='phone' name='phone_number' className='form-control' onInput={handleInput} placeholder='optional' />
            {errors ? <span className='error-message'>{errors.phone_number}</span> : <></>}
          </div>
          {adminPage==='yes' ? 
          <div className='user-admin-buttons'>
            <button onClick={handleAddUser} className='admin-adduser-btn'>Add User</button>
            <button onClick={handleUpdateUser} className='admin-updateuser-btn'>Update User</button>
            <button onClick={handleDeleteUser} className='admin-deleteuser-btn'>Delete User</button>
          </div> : <button type='submit' className='button'>Register</button>}
        </form>
        {adminPage==='yes' ? <></> : <div className='login-link'>Already have an account? <Link to='/login'>Login here</Link></div>}
      </div>
    </div>
  )

}

export default RegisterPage