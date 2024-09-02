import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function LinesForm({authToken}) {



    const[errors, setErrors]=useState();

    const[lineData, setLineData]=useState({
  
    })

    function handleInput(e){
        setLineData({
          ...lineData,
          [e.target.name]: e.target.value
        })
      }


      function handleAddLine(e){
        e.preventDefault();
        let data = lineData;
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/api/line/add',
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
            setLineData({});
          })
          .catch((error) => {
            console.log(error);
            setErrors(error.response.data.errors);
            if(error.response.status===406){
              alert(error.response.data);
            }
          });
          
      }



      function handleUpdateLine(e){
        e.preventDefault();
        let data = lineData;
          
          let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: '/api/updateline',
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
            setLineData({});
          })
          .catch((error) => {
            console.log(error);
            setErrors(error.response.data.errors);
            if(error.response.status===404){
                alert(error.response.data);
      }
          });
      }



      function handleDeleteLine(e){
        e.preventDefault();
        let data = lineData;
        
          let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: '/api/deleteline/' + lineData.number,
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
            setLineData({});
          })
          .catch((error) => {
            console.log(error);
            setErrors(error.response.data.errors);
            if(error.response.status===404){
              alert(error.response.data);
            }
          });
      }



  return (
    <div className='lines-form-container'>
    <div className='lines-header'>
      <h1 className='header-text'>Manage Lines</h1>
    </div>
    <form className='lines-form'>
      <div className='form-group'>
        <label htmlFor='number'>Line Number</label>
        <input type='text' id='number' name='number' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.number}</span> : <></>}
      </div>
      <div className='form-group'>
        <label htmlFor='vehicle'>Vehicle</label>
        <input type='text' id='vehicle' name='vehicle' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.vehicle}</span> : <></>}
      </div>
      <div className='form-group'>
        <label htmlFor='start_location'>Start Location</label>
        <input type='text' id='start_location' name='start_location' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.start_location}</span> : <></>}
      </div>
      <div className='form-group'>
        <label htmlFor='end_location'>End Location</label>
        <input type='text' id='end_location' name='end_location' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.end_location}</span> : <></>}
      </div>
      <div className='form-group'>
        <label htmlFor='duration'>Duration</label>
        <input type='text' id='duration' name='duration' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.duration}</span> : <></>}
      </div>
      <div className='form-group'>
        <label htmlFor='price'>Price</label>
        <input type='text' id='price' name='price' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.price}</span> : <></>}
      </div>
      <div className='form-group'>
        <label htmlFor='number_of_stops'>Number of stops</label>
        <input type='number' id='number_of_stops' name='number_of_stops' className='form-control' onInput={handleInput} />
        {errors ? <span className='error-message'>{errors.number_of_stops}</span> : <></>}
      </div>
      <div className='lines-admin-buttons'>
            <button onClick={handleAddLine} className='admin-line-btns' id='admin-addline-btn'>Add Line</button>
            <button onClick={handleUpdateLine} className='admin-line-btns' id='admin-updateline-btn'>Update Line</button>
            <button onClick={handleDeleteLine} className='admin-line-btns' id='admin-deleteline-btn'>Delete Line</button>
          </div>
    </form>
  </div>
  )
}

export default LinesForm