import React from 'react';
import './App.css'
import { ActivityMap } from './Components/ActivityMap/ActivityMap';
import ActivityManager from './Components/ActivityManager/ActivityManager';
import { Login } from './Screens/Login/Login';

const App = () => {

  return (
    <div className='app-container'>
      <Login/>
      { false &&
        <>
          <h3>Bienvenido a la gestión de Actividades</h3>
          <div className='map-and-manager-container'>
            <ActivityMap/>
            <ActivityManager/>
          </div>
        </>
      }
    </div>
  );
};

export default App;
