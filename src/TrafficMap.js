// React component to display traffic congestion map
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './css/traffic.css'

const TrafficMap = () => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    // Fetch traffic data from OpenTraffic API
    const fetchTrafficData = async () => {
      try {
        const response = await fetch('https://api.opentraffic.io/v1/traffic');
        const data = await response.json();
        setMapData(data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      }
    };

    fetchTrafficData();
  }, []);

  return (
    <div id='map'>
      <MapContainer center={[9.8965, 8.8583]} zoom={12}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {mapData.map((marker, index) => (
          <Marker key={index} position={[marker.latitude, marker.longitude]}>
            {/* Add your custom marker component here */}
          </Marker>
        ))}
    </MapContainer>
    </div>
    
  );
};

export default TrafficMap;
