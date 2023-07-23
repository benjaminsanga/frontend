import { useState } from 'react';
import axios from 'axios';
import './css/App.css';
// import TrafficMap from './TrafficMap'
import './css/traffic.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function App() {
  // const position = [51.505, -0.09]
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/traffic');
      console.log(response, 'response');
    } catch (error) {
      console.error('Error fetching traffic data:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Traffic Detection System</h3>
      </header>
      <div id='main'>
        <div className='route-form'>
          <p>Enter your current location and destination</p>
          <form>
            <input type='text' placeholder='From' value={from} onChange={(e) => setFrom(e.target.value)} />
            <input type='text' placeholder='To' value={to} onChange={(e) => setTo(e.target.value)} />
            <button onClick={handleSearch}>Go</button>
            <p>Result will show traffic in ride path</p>
          </form>
          <hr/>
          <div>
            {/* <h4>Results</h4>
            <p>Results of congestion on path show here after submitting form</p> */}
          </div>
        </div>
        <MapContainer center={[9.8965, 8.8583]} zoom={13} scrollWheelZoom={false} id='map'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        
      </div>
      
    </div>
  );
}

export default App;
