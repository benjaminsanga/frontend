import React from "react";

const Alerts = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', padding: '20px'}}>
      <h2>Your route has possible congestions are:</h2>
      <ul>
        <li>Intersection with Bukuru Express</li>
        <li>Roundabout on Drive 4</li>
        <li>The traffic lights at 18th street</li>
      </ul>
    </div>
  )
}

export default Alerts