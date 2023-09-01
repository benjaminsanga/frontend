import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const TrafficAlertSystem = () => {
  useEffect(() => {
    const map = L.map('map').setView([9.876727859076858, 8.873587189206491], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([9.876727859076858, 8.873587189206491]).addTo(map);

    map.on('click', function (e) {
      const endMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

      L.Routing.control({
        waypoints: [
          L.latLng(9.871016193646259, 8.8864882500652),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
      }).addTo(map);
    });
  }, []);

  return (
    <div>
      <h1>Traffic Alert System</h1>
      <p>This system alerts you on time to navigate a route and possible traffic along the route</p>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default TrafficAlertSystem;
