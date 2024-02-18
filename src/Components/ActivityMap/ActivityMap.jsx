import React, { useState } from 'react';
import './ActivityMap.styles.css'
import { GoogleMap, LoadScript, Marker, Polygon, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '60vw',
  height: '50vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export const ActivityMap = () => {
  const [markers, setMarkers] = useState([]);
  const [polygonPaths, setPolygonPaths] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMapClick = (event) => {
    if (isDrawing) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      setMarkers([...markers, newMarker]);
    }
  };

  const handlePolygonComplete = () => {
    setIsDrawing(false);
    const paths = markers.map(marker => ({ lat: marker.lat, lng: marker.lng }));
    setPolygonPaths(paths);
  };

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing);
    setMarkers([]);
    setPolygonPaths([]);
    isDrawing && handlePolygonComplete();
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
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
          {polygonPaths.length > 0 && (
            <Polygon paths={polygonPaths} onPolygonComplete={handlePolygonComplete} />
          )}
          <DrawingManager
            drawingMode={isDrawing ? 'polygon' : null}
          />
        </GoogleMap>
      </LoadScript>
      <button
          className={'btn btn-primary drw-btn'}
          onClick={toggleDrawing}>
            {isDrawing ? 'Detener dibujo' : 'Comenzar dibujo'}
      </button>
    </div>
  );
};
