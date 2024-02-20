import React from 'react'
import './ActivityManager.styles.css'
import Checkbox from '../Checkbox/Checkbox'
import { useActivityHook } from './Hooks/useActivityHook'
import { useSelector } from 'react-redux'

function ActivityManager() {
    const {editItem} = useSelector(state => state.activity)
   const {
        handleActivityButon,
        handleNewActivity,
        activityBtn,
        newActivity,
        isArea
    } = useActivityHook();

    return (
        <div className='container-fluid manager-container'>
            <button className='btn btn-success' onClick={handleActivityButon}>{ activityBtn? 'Crear nueva actividad': 'Guardar Formulario'}</button>
            <div className='form-input'>
                <label>Nombre de la actividad:</label>
                <input id='name' value={newActivity.name || editItem.name} onInput={handleNewActivity} placeholder='ej: medicion de carbono' disabled={activityBtn}/>
            </div>
            <div className='form-input'>
                <label>Descripcion:</label>
                <textarea id='description' value={newActivity.description || editItem.description} onChange={handleNewActivity} cols={5} rows={5} disabled={activityBtn}/>
            </div>
            <div className='form-input'>
                <label>Es periodico?</label>
                <Checkbox onChange={handleNewActivity} options={[[1,'SI'], [2,'NO']]} disabled={activityBtn}/>
            </div>
            <div className='form-input'>
                <label>Es sobre un área?</label>
                <Checkbox onChange={handleNewActivity} options={[[3,'SI'], [4,'NO']]} disabled={activityBtn}/>
            </div>
            {   !activityBtn &&
                <p>Haga click en GUARDAR para colocar el {isArea? 'poligono': 'marcador'}</p>
            }
        </div>
    )
}

export default ActivityManager
