import React from 'react'
import { ActivityMap } from '../../Components/ActivityMap/ActivityMap'
import ActivityManager from '../../Components/ActivityManager/ActivityManager'
import './Activity.styles.css'
import { useDispatch, useSelector } from 'react-redux'
import ActivityList from '../../Components/ActivityList/ActivityList'
import { createActivity, updateActivity } from '../../api/routes'

function Activity() {
    const {formData, mapData, isEditing, dataToSend} = useSelector(state => state.activity);
    const dispatch = useDispatch();
    const handleSaveAll = () =>{
        dispatch({type: 'ADD_LIST'})
        isEditing?  updateActivity(dataToSend).then() : createActivity(dataToSend).then();
    }
    return (
        <div className='app-container'>
            <div className='container'>
                <h3>Bienvenido a la gestión de Actividades</h3>
                {formData && mapData && <button className='btn btn-success' onClick={handleSaveAll}> Guardar Todo </button>}
            </div>
            <div className='map-and-manager-container'>
            <ActivityManager/>
            <ActivityMap/>
            </div>
            <ActivityList/>
        </div>
    )
}

export default Activity
