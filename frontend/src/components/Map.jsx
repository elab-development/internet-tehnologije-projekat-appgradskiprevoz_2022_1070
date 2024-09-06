import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Map = ({ lineCoordinates }) => {
  
  const [markerPosition, setMarkerPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const startCoordinate = lineCoordinates && lineCoordinates[0];
  const endCoordinate = lineCoordinates && lineCoordinates[lineCoordinates.length - 1];

  const handleSearch = async (event) => {
    event.preventDefault();
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://nominatim.openstreetmap.org/search?q',
      params:{
        q: searchQuery,
        format: 'json',
        addressdetails: 1
      },
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
      },
    };
    
    axios.request(config)
    .then((response) => {
      if(response.data.length>0){
      console.log(response.data);
      const { lat, lon } = response.data[0];
      setMarkerPosition([lat, lon]);
      }else{
        alert('Location not found.');
      }
    })
    .catch((error) => {
      console.log(error);
    });
    

  };

  return (
    <div className="map-container">
      <MapContainer center={startCoordinate || [44.81393968242733, 20.456795096397403]} zoom={11} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {lineCoordinates && (
          <>
            <Polyline positions={lineCoordinates} color="blue" />
            {startCoordinate && (
              <Marker position={startCoordinate}>
                <Popup>Start Location</Popup>
              </Marker>
            )}
            {endCoordinate && (
              <Marker position={endCoordinate}>
                <Popup>End Location</Popup>
              </Marker>
            )}
          </>
        )}
        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>Search Result</Popup>
          </Marker>
        )}
      </MapContainer>
      <form onSubmit={handleSearch} className="map-search-form">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search location" className="map-search-input" />
        <button type="submit" className="map-search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Map;
