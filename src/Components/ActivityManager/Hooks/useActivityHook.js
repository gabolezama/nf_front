import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

export const useActivityHook = () => {
    const {editItem} = useSelector(state => state.activity)
    const[activityBtn, setActivityBtn] = useState(true);
    const[newActivity, setNewActivity] = useState({});
    const dispatch = useDispatch();
    let newActivityConfig = editItem || {};
    const handleActivityButon = () =>{
        activityBtn && setActivityBtn(false);
        !activityBtn && saveActivity();
    }
    const saveActivity = () =>{
        if(Object.values(newActivity).length !== 4){
            dispatch({type:'SHOW_GLOBAL_ALERT', payload: {
                show: true,
                message: 'No se ha completado los campos del formulario',
                type: 'danger'
            }});
            return
        }
        const date = new Date();
        
        dispatch({type:'ADD_LIST', payload: {
            id: uuidv4(),
            date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            ...newActivity
        }});
        setActivityBtn(true);
        setNewActivity({
            name: '',
            description: ''
        });
    } 
    const handleNewActivity = (evt) =>{
        let key, value;
        if(evt.target.id.includes('option')){
            if(evt.target.id.includes('3') || evt.target.id.includes('4')){
                key = 'isArea';
                value = evt.target.id.includes('3')
            }else{
                key = 'isRecursive';
                value = evt.target.id.includes('1');
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

    return{
        handleActivityButon,
        handleNewActivity,
        activityBtn,
        newActivity
    }
}