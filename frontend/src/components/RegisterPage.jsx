import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterPage({setAuthToken}) {

  const[errors, setErrors]=useState();

  const[userData, setUserData]=useState({
    name:'',
    email:'',
    password:'',
    address:'',
    phone_number:''
  })


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
        window.sessionStorage.setItem('auth_token', response.data.access_token);     //ovde dodaj navigate
        setAuthToken(response.data.access_token);
      }else{
        setErrors(response.data[0]);  //posto je onaj response iz laravela ustv. niz, moram preko indeksa
      }                 
    }).catch((e)=>{
      console.log(e);
    })
  }

  return (
    <div className='register-page'>
      <div className='register-form-container'>
        <div className='register-header'>
          <img src='https://getlogo.net/wp-content/uploads/2021/02/city-of-belgrade-logo-vector.png' alt='Belgrade Logo' className='logo-img' />
          <h1 className='header-text'>Create a new account</h1>
        </div>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' className='form-control' onInput={handleInput} required />
            {errors ? <span className='error-message'>{errors.name}</span> : <></>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' className='form-control' onInput={handleInput} required />
            {errors ? <span className='error-message'>{errors.email}</span> : <></>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' className='form-control' onInput={handleInput} required />
            {errors ? <span className='error-message'>{errors.password}</span> : <></>}
          </div>
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
          <button type='submit' className='button'>Register</button>
        </form>
        <div className='login-link'>Already have an account? <Link to='/login'>Login here</Link>
        </div>
      </div>
    </div>
  )

}

export default RegisterPage