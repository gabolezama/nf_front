import React, { useState } from 'react'
import './ActivityManager.styles.css'
import Checkbox from '../Checkbox/Checkbox'
import { v4 as uuidv4 } from 'uuid';

function ActivityManager() {
    const[activityBtn, setActivityBtn] = useState(true);
    const[newActivity, setNewActivity] = useState({});
    let newActivityConfig = {};
    const handleActivityButon = () =>{
        activityBtn && setActivityBtn(false);
        !activityBtn && saveActivity();
    }
    const saveActivity = () =>{
        console.log('Guardando...', newActivityConfig);
        setActivityBtn(true);
        setNewActivity({
            name: '',
            description: ''
        })
    } 
    const handleNewActivity = (evt) =>{
        let key, value;
        if(evt.target.id.includes('option')){
            if(evt.target.id.includes('3') || evt.target.id.includes('4')){
                key = 'isArea';
                value = evt.target.id.includes('3')
            }else{
                key = 'isRecursive';
                value = evt.target.id.includes('1')
            }
        }else{
            key = evt.target.id;
            value = evt.target.value;
        }

        newActivityConfig={
            ...newActivity,
            [key]: value 
        }
        setNewActivity(newActivityConfig);
    }
    return (
        <div className='container-fluid manager-container'>
            <button className='btn btn-success' onClick={handleActivityButon}>{ activityBtn? 'Crear nueva actividad': 'Guardar'}</button>
            <div className='form-input'>
                <label>Nombre de la actividad:</label>
                <input id='name' value={newActivity.name} onInput={handleNewActivity} placeholder='ej: medicion de carbono' disabled={activityBtn}/>
            </div>
            <div className='form-input'>
                <label>Descripcion:</label>
                <textarea id='description' value={newActivity.description} onChange={handleNewActivity} cols={5} rows={5} disabled={activityBtn}/>
            </div>
            <div className='form-input'>
                <label>Es periodico?</label>
                <Checkbox onChange={handleNewActivity} options={[[1,'SI'], [2,'NO']]} disabled={activityBtn}/>
            </div>
            <div className='form-input'>
                <label>Es puntual o sobre un área?</label>
                <Checkbox onChange={handleNewActivity} options={[[3,'SI'], [4,'NO']]} disabled={activityBtn}/>
            </div>
        </div>
    )
}

export default ActivityManager
