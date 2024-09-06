import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { FaWind, FaTint, FaMoon, FaCloudSun, FaCloudMoon, FaCloud, FaCloudSunRain, FaCloudMoonRain, FaCloudShowersHeavy, FaSnowflake} from "react-icons/fa";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { IoThunderstorm } from "react-icons/io5";
import { TbMist } from "react-icons/tb";

function Weather() {


    const[weather, setWeather]=useState();
    const lat = 44.787197;
    const lon = 20.457273;
    const apiKey = '20a5b350da3a927d7e14cb115468688e';
    const units='metric';




    useEffect(()=>{
        const fetchWeather = async() => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.openweathermap.org/data/2.5/weather',
                headers: { 
                  'Accept': 'application/json', 
                  'Content-Type': 'application/json', 
                },
                params:{
                    lat,
                    lon,
                    appid: apiKey,
                    units: units
                }
              };
              
              axios.request(config)
              .then((response) => {
                console.log(response.data);
                setWeather(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
        }
        fetchWeather();
    },[]);

    if (!weather) {
        return <div>Loading...</div>;
    }


    const current={
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
        temp: Math.round(weather.main.temp),
        feels_like: Math.round(weather.main.feels_like),
        wind_speed: weather.wind.speed,
        humidity: weather.main.humidity,
        weather: weather.weather[0].main,
        icon: weather.weather[0].icon
    };

    const weatherIcon={
        '01d': <IoIosSunny className='weather-icon' />,
        '01n': <FaMoon className='weather-icon' />,
        '02d': <FaCloudSun className='weather-icon' />,
        '02n': <FaCloudMoon className='weather-icon' />,
        '03d': <FaCloud className='weather-icon' />,
        '03n': <FaCloud className='weather-icon' />,
        '04d': <FaCloud className='weather-icon' />,
        '04n': <FaCloud className='weather-icon' />,
        '09d': <FaCloudShowersHeavy className='weather-icon' />,
        '09n': <FaCloudShowersHeavy className='weather-icon' />,
        '10d': <FaCloudSunRain className='weather-icon' />,
        '10n': <FaCloudMoonRain className='weather-icon' />,
        '11d': <IoThunderstorm className='weather-icon' />,
        '11n': <IoThunderstorm className='weather-icon' />,
        '13d': <FaSnowflake className='weather-icon' />,
        '13n': <FaSnowflake className='weather-icon' />,
        '50d': <TbMist className='weather-icon' />,
        '50n': <TbMist className='weather-icon' />
    }

    

  return (
    <div className='weather-main'>
      <div className='weather-top'>
        <div className='weather-top-city'>
          <span>Belgrade</span>
        </div>
        <div className='weather-top-time'>
          <span>{current.time}</span>
        </div>
      </div>
      <div className='weather-mid'>
        <div>
          <span className='weather-current-temp'>{current.temp}°C</span>
        </div>
        <div>
        <span className='weather-current-weather'>{current.weather}</span>
        </div>
      </div>
      <div className='weather-bot'>
        <div className='weather-icons'>
          <div className="icon-text">
            <FaTemperatureQuarter style={{ color: "#000000" }} /> 
            <span className="ms-1">Feels like: {current.feels_like}°C</span>
          </div>
          <div className="icon-text">
            <FaWind style={{ color: "#000000" }} /> 
            <span className="ms-1">{current.wind_speed} km/h</span>
          </div>
          <div className="icon-text">
            <FaTint style={{ color: "#000000" }} /> 
            <span className="ms-1">{current.humidity}%</span>
        </div>
        </div>
        <div className='weather-icon'>
          {weatherIcon[current.icon] || <FaCloudSun className='weather-icon' />}
        </div>
      </div>
    </div>
  )
}

export default Weather