import React from 'react'
import ActivityManager from '../../Components/ActivityManager/ActivityManager'
import './Activity.styles.css'
import ActivityList from '../../Components/ActivityList/ActivityList'

function Activity() {

    return (
        <div className='app-container'>
            <div className='container title'>
                <h3>Bienvenido a la gestión de Actividades</h3>
            </div>
            <div className='map-and-manager-container'>
                <ActivityManager/>
            </div>
            <ActivityList/>
        </div>
    )
}

export default Activity
