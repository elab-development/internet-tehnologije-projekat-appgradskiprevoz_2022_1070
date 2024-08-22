import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import { useState } from 'react';
import LoginPage from './components/LoginPage';



function App() {


  const [authToken, setAuthToken]=useState();



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage setAuthToken={setAuthToken} />} />
        <Route path='/login' element={<LoginPage setAuthToken={setAuthToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
