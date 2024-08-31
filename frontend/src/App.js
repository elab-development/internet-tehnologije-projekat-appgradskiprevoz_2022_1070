import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import NavBar from './components/NavBar';
import Lines from './components/Lines';
import { useLocation } from 'react-router-dom';
import LineDetailsPage from './components/LineDetailsPage';
import MyTicketsPage from './components/MyTicketsPage';
import AdminPage from './components/AdminPage';


function App() {


  const [authToken, setAuthToken]=useState(window.sessionStorage.getItem('auth_token'));  // stavio sam da mu je ovo pocetna vrednost,  tkd ako se refresh-uje stranica opet pokupi trenutnog korisnika

  const[userRole, setUserRole]=useState(window.sessionStorage.getItem('user_role'));  //da bi namestio da samo kada je user admin/moderator se prikaze admin na navbar-u


  const noNavBar=['/register', '/login', '/resetpassword'];

  function ConditionalNavBar({ noNavBar, authToken, setAuthToken, userRole, setUserRole }) {
    const location = useLocation();
  
    if (noNavBar.includes(location.pathname)) {
      return null;
    }
  
    return <NavBar authToken={authToken} setAuthToken={setAuthToken} userRole={userRole} setUserRole={setUserRole} />;
  }
  


  return (
    <BrowserRouter>
      <ConditionalNavBar noNavBar={noNavBar} authToken={authToken} setAuthToken={setAuthToken} userRole={userRole} setUserRole={setUserRole} />
      <Routes>
        <Route path='/register' element={<RegisterPage setAuthToken={setAuthToken} setUserRole={setUserRole} />} />
        <Route path='/login' element={<LoginPage setAuthToken={setAuthToken} setUserRole={setUserRole} />} />
        <Route path='/resetpassword' element={<ResetPasswordPage />} />
      </Routes>
      <Routes>
        <Route path='/lines' element={<Lines authToken={authToken} />} />
        <Route path='/lines/:number' element={<LineDetailsPage authToken={authToken}/>} />
        <Route path='/mytickets' element={<MyTicketsPage authToken={authToken} />} />
        <Route path='/admin' element={<AdminPage authToken={authToken} userRole={userRole} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
