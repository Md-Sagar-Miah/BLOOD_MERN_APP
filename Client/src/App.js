
import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Componends/Home';
import Login from './Componends/LoginPage/Login';
import Registration from './Componends/RegisterPage/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonorsPage from './Componends/DonorsPage/DonorsPage';
import AboutUsPage from './Componends/AboutUsPage/AboutUsPage';
import Profile from './Componends/Profile/Profile';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donors" element={<DonorsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
