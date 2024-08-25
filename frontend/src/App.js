import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import NavBar from './components/NavBar';
import Lines from './components/Lines';


function App() {


  const [authToken, setAuthToken]=useState(window.sessionStorage.getItem('auth_token'));  // stavio sam da mu je ovo pocetna vrednost,  tkd ako se refresh-uje stranica opet pokupi trenutnog korisnika

  const[userRole, setUserRole]=useState();



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage setAuthToken={setAuthToken} setUserRole={setUserRole} />} />
        <Route path='/login' element={<LoginPage setAuthToken={setAuthToken} setUserRole={setUserRole} />} />
        <Route path='/resetpassword' element={<ResetPasswordPage />} />
      </Routes>
      <NavBar authToken={authToken} setAuthToken={setAuthToken} userRole={userRole} setUserRole={setUserRole} />
      <Routes>
        <Route path='/lines' element={<Lines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
