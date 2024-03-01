import React, { useState } from "react";
import { usePlanes } from "../../Service/PlaneContext";
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';


function EnemyBox({ onSelectPlane }) {
  const { planes, isLoading, error } = usePlanes();
  const [selectedPlane, setSelectedPlane] = useState("");
  const [enemyPlane, setEnemyPlane] = useState(null); // Define state to hold the selected enemy plane
 
  
  // Function to handle plane selection change
  const handleChange = (event) => {
    const selectedId = event.target.value;
    setSelectedPlane(selectedId);
    

    const plane = planes.find((p) => p.id === selectedId);
    if (plane) {
      setEnemyPlane(plane); // Update the state with the found plane
      onSelectPlane(plane.maxSpeed, plane.turnTime.upgraded, plane.name);
    } else {
      setEnemyPlane(null); // Reset if no plane is found
    }
  };

  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div id="enemy-box">
      
      <Select  id="demo-simple-select" onChange={handleChange} label="Select Plane" value={selectedPlane}>
        {planes.map((plane) => (
          <MenuItem key={plane.id} value={plane.id}>
            {plane.name}
          </MenuItem>
        ))}
      </Select>

      {enemyPlane ? (
        <>
          <p><span id="yellow-title">Name: </span>{enemyPlane.name}</p>
          <p><span id="yellow-title">Battle Rating:</span> {enemyPlane.battleRating}</p>
          <p><span id="yellow-title">Country:</span> {enemyPlane.country}</p>
          <p><span id="yellow-title">Max Altitude:</span> {enemyPlane.maxAltitude}</p>
          <p><span id="yellow-title">Max Speed:</span> {enemyPlane.maxSpeed}</p>
          <p><span id="orange-title">Turn Time Stock:</span>  {enemyPlane.turnTime.stock}</p>
          <p><span id="green-title">Turn Time Upgraded:</span> {enemyPlane.turnTime.upgraded}</p>
        </>
      ) : (
        <p>Not Selected Yet</p>
      )}
    </div>
  );
}

export default EnemyBox;
