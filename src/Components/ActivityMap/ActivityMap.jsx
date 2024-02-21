import React, { useState } from 'react';
import './ActivityMap.styles.css'
import { GoogleMap, LoadScript, Marker, Polygon, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '60vw',
  height: '70vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export const ActivityMap = ({
  handleMapClick, 
  toggleDrawing, 
  isArea,
  singleMarker,
  polygonPaths,
  isDrawing,
  handlePolygonComplete
}) => {

  return (
    <div className='container-fluid map-container'>
      <LoadScript
        googleMapsApiKey={'AIzaSyCncM1DkHRCNGdPRVeQgeDIqBPPHxVJCRg'}
        libraries={['drawing']}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}
        >
          {!isArea && (
            <Marker position={singleMarker} />
          )}
          {isArea && polygonPaths.length > 0 && (
            <Polygon paths={polygonPaths} 
            options={{
              fillColor: '#FFFF00',
              fillOpacity: 0.35,
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              clickable: true,
              draggable: true,
              editable: true,
              geodesic: true
            }}
            />
          )}
          {isArea && (
            <DrawingManager
              drawingMode={isDrawing ? 'polygon' : null}
              onPolygonComplete={handlePolygonComplete}
            />
          )}
        </GoogleMap>
      </LoadScript>
      {isArea && (
        <button
          className={'btn btn-primary drw-btn'}
          onClick={toggleDrawing}
        >
          {isDrawing ? 'Detener dibujo' : 'Comenzar dibujo'}
        </button>
      )}
    </div>
  );
};
