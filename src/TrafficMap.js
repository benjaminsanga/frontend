import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Alerts from "./Alerts";

const TrafficMap = () => {
  // State to store traffic data
  const [trafficData, setTrafficData] = useState(null);

  // Fetch traffic data (replace with actual data source and fetching code)
  useEffect(() => {
    // Fetch traffic data here and set it to the state
    const fetchedTrafficData = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [8.880375, 9.932257],
              [8.882634, 9.931593],
              [8.884813, 9.929985],
              [8.886982, 9.928502],
              [8.888856, 9.927304],
              [8.890325, 9.92655]
            ]
          },
          "properties": {
            "severity": "high",
            "description": "Traffic congestion near Jos Main Market",
            "time": "2023-07-25 16:45:00"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [8.860287, 9.925732],
              [8.862405, 9.924961],
              [8.864537, 9.923808],
              [8.866718, 9.92259],
              [8.868965, 9.921338],
              [8.871176, 9.920087]
            ]
          },
          "properties": {
            "severity": "medium",
            "description": "Moderate traffic congestion along Ahmadu Bello Way",
            "time": "2023-07-25 16:45:00"
          }
        }
      ]
    }
    ;
    setTrafficData(fetchedTrafficData);
  }, []);

  const mapCenter = [51.505, -0.09];
  const zoomLevel = 13;

  return (
    <>
    <Alerts/>
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {trafficData && <GeoJSON data={trafficData} />}
    </MapContainer>
    </>
  );
};

export default TrafficMap;
