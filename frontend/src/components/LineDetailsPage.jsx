import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LineShortcut from './LineShortcut';
import Map from './Map';
import coordinates from './Coordinates';
import BuyTicketBtn from './BuyTicketBtn';


function LineDetailsPage({authToken}) {

  
    const {number} = useParams();   //useParams kupi iz url-a number

    const[line, setLine]=useState([]);



    useEffect(() => {
        const fetchLine = async () => {                                                     
          try {                                                                               
            const response = await axios.get(`/api/lines/${number}`,{
              headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
              }
            });
            console.log(response.data);
            setLine(response.data);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchLine();
      }, [number]);



  return (
    <div className="line-details-page">
        <div className='details-title'><h1>Line {line.number}</h1></div>
        <div className='details-second-container'>
        <div className="line-info">
            <div className="line-details">
            <div className="line-detail-row">
                    <span className="label-details">Start Location:</span>
                    <span className="value-details">{line.start_location}</span>
                </div>
                <div className="line-detail-row">
                    <span className="label-details">End Location:</span>
                    <span className="value-details">{line.end_location}</span>
                </div>
                <div className="line-detail-row">
                    <span className="label-details">Price:</span>
                    <span className="value-details">{line.price}</span>
                </div>
                <div className="line-detail-row">
                    <span className="label-details">Vehicle:</span>
                    <span className="value-details">{line.vehicle}</span>
                </div>
                <div className="line-detail-row">
                    <span className="label-details">Duration:</span>
                    <span className="value-details">{line.duration}</span>
                </div>
                <div className="line-detail-row">
                    <span className="label-details">Number of stops:</span>
                    <span className="value-details">{line.number_of_stops}</span>
                </div>
                <BuyTicketBtn authToken={authToken} number={number}/>
            </div>
            <div className="line-map">
                <Map lineCoordinates={coordinates[number]}/>
            </div>
        </div>
        <div className="line-shortcut-details">
            <LineShortcut />
        </div>
        </div>
    </div>
  )
}

export default LineDetailsPage