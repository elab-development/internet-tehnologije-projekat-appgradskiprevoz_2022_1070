import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Map = ({ lineCoordinates }) => {
  
  const startCoordinate = lineCoordinates && lineCoordinates[0];
  const endCoordinate = lineCoordinates && lineCoordinates[lineCoordinates.length - 1];


  return (
    <MapContainer center={startCoordinate || [44.81393968242733, 20.456795096397403]} zoom={11} style={{ height: '400px', width: '100%' }}>
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
    </MapContainer>
  );
};

export default Map;
