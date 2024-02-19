import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';

export const CustomCard = ({ activity: task }) => {
    const dispatch = useDispatch();
    const handleDeleteItem = () =>{
        dispatch({type: 'DELETE_BY_ID', payload: task})
    }
    const handleUpdateItem = () =>{
        dispatch({type: 'UPDATE_ITEM', payload: task})
    }
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task?.name}</h5>
        <p className="card-text">ID: {task?.id}</p>
        <p className="card-text">{task?.description}</p>
        <p className="card-text">
          <small className="text-muted">Creado el: {task?.date}</small>
        </p>
        <div>
          <button className="btn btn-primary mr-2" onClick={handleUpdateItem}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="btn btn-danger" onClick={handleDeleteItem}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};
