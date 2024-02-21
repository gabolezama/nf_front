import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { createActivity, updateActivity } from "../../../api/routes";

export const useActivityHook = () => {
    const {editItem, isEditing} = useSelector(state => state.activity)
    const [activityBtn, setActivityBtn] = useState(true);
    const [newActivity, setNewActivity] = useState({});
    const [isArea, setIsArea] = useState(null);
    const [singleMarker, setSingleMarker] = useState({});
    const [polygonPaths, setPolygonPaths] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);

    const handlePolygonComplete = polygon => {
        const polygonPath = polygon.getPath().getArray().map(latLng => ({
          lat: latLng.lat(),
          lng: latLng.lng()
        }));
        setPolygonPaths(polygonPath);
      };

    const handleMapClick = (event) => {
        const newMarker = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setSingleMarker(newMarker)
    };
  
    const toggleDrawing = () => {
      setIsDrawing(!isDrawing);
      setPolygonPaths([]);
    };
    const dispatch = useDispatch();
    let newActivityConfig = editItem || {};


    const handleActivityButon = () =>{
        activityBtn && setActivityBtn(false);
        const required = ['name', 'description','isArea', 'isRecursive'];
        const keys = Object.keys(newActivity);
        const condition = required.every(propiedad => keys.includes(propiedad))

        if(condition){ 
            saveActivity();
        }else if(!activityBtn){
            dispatch({type:'SHOW_GLOBAL_ALERT', payload: {
                 show: true,
                 message: 'No ha completado todos los datos de la actividad',
                 type: 'danger'
            }});
        }
    }

    const saveActivity = () =>{
        const date = new Date();
        const objToSave = {
            task_id: isEditing? editItem.task_id : uuidv4(),
            date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            ...newActivity,
        }

        dispatch({type: 'ADD_LIST', payload: objToSave})
        isEditing?  updateActivity(objToSave).then() : createActivity(objToSave).then();

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
                value = evt.target.id.includes('3');
                setIsArea(value);
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
        console.log('SET NEW:', newActivity);
        setNewActivity(newActivityConfig);
    }

    return{
        handleActivityButon,
        handleNewActivity,
        activityBtn,
        newActivity,
        handleMapClick, 
        toggleDrawing, 
        isArea,
        singleMarker,
        polygonPaths,
        handlePolygonComplete,
        isDrawing
    }
}
