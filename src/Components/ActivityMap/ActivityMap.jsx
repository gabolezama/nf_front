import React, { useState } from 'react';
import './ActivityMap.styles.css'
import { GoogleMap, LoadScript, Marker, Polygon, DrawingManager } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const containerStyle = {
  width: '60vw',
  height: '70vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export const ActivityMap = () => {
  const [markers, setMarkers] = useState([]);
  const [singleMarker, setSingleMarker] = useState({});
  const [polygonPaths, setPolygonPaths] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const isArea = useSelector(state => state?.isArea.status);

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    if (!isArea) {
      setSingleMarker(newMarker);
      console.log('single');
    } else if (isArea && isDrawing) {
      setMarkers([...markers, newMarker]);
      console.log('area');
    }
  };

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing);
    setMarkers([]);
    setPolygonPaths([]);
  };

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
            <Polygon paths={polygonPaths} />
          )}
          {isArea && (
            <DrawingManager
              drawingMode={isDrawing ? 'polygon' : 'marker'}
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
