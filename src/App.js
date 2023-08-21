import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet-routing-machine';
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';

// Import the default marker icon
import icon from '../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../node_modules/leaflet/dist/images/marker-shadow.png';

const RoutingControl = ({ waypoints }) => {
  const map = useMap();
  
  L.Routing.control({
    waypoints,
    routeWhileDragging: true,
    pointMarkerStyle: 'none'
  }).addTo(map);

  return null;
};

const App = () => {
  const center = [9.876727859076858, 8.873587189206491]; // Default initial position
  const [startPosition, setStartPosition] = useState(L.latLng(9.876727859076858, 8.873587189206491))
  const [endPosition, setEndPosition] = useState(L.latLng(9.871016193646259, 8.8864882500652))
  
  function MyComponent() {
    const map = useMapEvents({
      click: () => {
        map.locate()
      },
      locationfound: (location) => {
        console.log(location, 'location');
        // console.log('latitude:', location.latitude)
        // console.log('longitude:', location.longitude)
        // setEndPosition(L.latLng(location.latitude, location.longitude))
      },
    })
    return null
  }

  return (
    <div className="App">
      <h3>Traffic Alert System</h3>
      <p>This system alerts you on time to navigate a route and possible traffic along the route</p> 
      <MapContainer center={center} zoom={10} style={{ height: '550px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {[startPosition, endPosition].map((waypoint, index) => (
          <Marker key={index} position={waypoint} icon={L.icon({ 
            iconUrl: icon, 
            shadowUrl: iconShadow,
            iconSize: [25, 41], // Adjust these values as needed
            iconAnchor: [12, 41], // Adjust these values as needed
            popupAnchor: [1, -34], // Adjust these values as needed 
          })}>
            <Popup>Waypoint {index + 1}</Popup>
          </Marker>
        ))}
        {/* <RoutingControl waypoints={[startPosition, endPosition]} /> */}
        <MyComponent/>
      </MapContainer>
    </div>
  );
}

export default App;
