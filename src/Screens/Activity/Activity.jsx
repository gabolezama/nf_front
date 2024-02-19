import React from 'react'
import { ActivityMap } from '../../Components/ActivityMap/ActivityMap'
import ActivityManager from '../../Components/ActivityManager/ActivityManager'
import './Activity.styles.css'
import { useSelector } from 'react-redux'
import ActivityList from '../../Components/ActivityList/ActivityList'

function Activity() {
    const user = useSelector(state => state.user)

    return (
        <div className='app-container'>
            <h3>Bienvenido a la gestión de Actividades</h3>
            <div className='map-and-manager-container'>
              {/* <ActivityMap/> */}
              <ActivityManager/>
            </div>
              <ActivityList/>
        </div>
    )
}

export default Activity
