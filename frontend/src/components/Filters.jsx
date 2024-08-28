import React from 'react'
import { useState } from 'react';

function Filters({setFilters, setCurrentPage}) {


const[vehicle, setVehicle]=useState('');
const[startLocation, setStartLocation]=useState('');
const[endLocation, setEndLocation]=useState('');
const[price, setPrice]=useState('');


 const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    setFilters({
      vehicle: vehicle,
      start_location: startLocation,
      end_location: endLocation,
      price: price,
    });
  };


  return (
<div className="filters-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle</label>
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
            <option value="">Any</option>
            <option value="bus">Bus</option>
            <option value="tram">Tram</option>
            <option value="train">Train</option>
            <option value="trolley">Trolleybus</option>
          </select>
        </div>
        <div>
          <label>Start location</label>
          <input
            type="text"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
          />
        </div>
        <div>
          <label>End location</label>
          <input
            type="text"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  )
}

export default Filters