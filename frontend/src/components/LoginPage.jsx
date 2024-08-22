import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginPage({setAuthToken}) {

    const[errors, setErrors]=useState();

    const[loggedIn, setLoggedIn]=useState();

    const[passwordError, setPasswordError]=useState();

    const[userData, setUserData]=useState({
        email:'',
        password:''
      })

    function handleInput(e){
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        })
    }  

    function handleSubmit(e){
        e.preventDefault();
        axios.post('/api/login', userData).then((response)=>{
         console.log(response.data);
          if(response.data.access_token!=null){
            setPasswordError();
            setErrors({});
            setLoggedIn();
            window.sessionStorage.setItem('auth_token', response.data.access_token);     //ovde dodaj navigate
            setAuthToken(response.data.access_token);
          }else{
            setPasswordError();
            setLoggedIn();
            setErrors(response.data[0]);  //posto je onaj response iz laravela ustv. niz, moram preko indeksa
          }                 
        }).catch((e)=>{
          console.log(e);
          setErrors({});
          if(e.response.data[0]==='Incorrect password'){
            setPasswordError(e.response.data[0])
          }else if(e.response.data[0]==='Already logged in'){
            setErrors({});
            setPasswordError();
            setLoggedIn(e.response.data[0]);
          }
        })
      }




  return (
    <div className='register-page'>
      <div className='login-form-container'>
        <div className='register-header'>
          <img src='https://getlogo.net/wp-content/uploads/2021/02/city-of-belgrade-logo-vector.png' alt='Belgrade Logo' className='logo-img' />
          <h1 className='header-text'>Log in</h1>
        </div>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' className='form-control' onInput={handleInput} required />
            {errors ? <span className='error-message'>{errors.email}</span> : <></>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' className='form-control' onInput={handleInput} required />
            {errors ? <span className='error-message'>{errors.password}</span> : <></>}
            {passwordError ? <span className='error-message'>{passwordError}</span> : <></>}
          </div>
          <button type='submit' className='button'>Log in</button>
          {loggedIn ? <span className='log-error'>{loggedIn}</span> : <></>}
        </form>
        <div className='register-link'>Don't have an account? <Link to='/register'>Create one here!</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage