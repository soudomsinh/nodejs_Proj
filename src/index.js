import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Pricing from './Pricing';
import Dashboard from './dashboard/Dashboard';
import LandingPage from './landing-page/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/> 
      <Route path='/login' element={<Login />}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/pricing' element={<Pricing />}/> 
      <Route path='/dashboard' element={<Dashboard />}/> 
      <Route path='/landingpage' element={<LandingPage />}/> 
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
