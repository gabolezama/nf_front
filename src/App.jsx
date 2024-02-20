import React from 'react';
import './App.css'
import { Login } from './Screens/Login/Login';
import CustomAlert from './Components/Alert/CustomAlert';
import Activity from './Screens/Activity/Activity';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'> 
      <CustomAlert/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route  path="/activity" element={<Activity/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
