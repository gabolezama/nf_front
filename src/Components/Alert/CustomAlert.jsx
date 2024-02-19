import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CustomAlert = () => {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.errorHandler.globalAlert)
    const modalStyle = {
        display: alert.show ? 'block' : 'none'
    };

    const modalClass = `modal fade ${alert.show ? 'show' : ''}`;

    const handleClose = () => {
        dispatch({
            type: 'SHOW_GLOBAL_ALERT', 
            payload:{
                show: false,
                message: '',
                type: ''
            }
        })
    }
    return (
        <div className={modalClass} style={modalStyle} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{alert.type === 'success' ? 'Success' : 'Error'}</h5>
                        <button type="button" className="close" onClick={handleClose} >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{alert.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;

