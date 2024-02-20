import React, { useState } from "react";
import { usePlanes } from "../../Service/PlaneContext";

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
      onSelectPlane(plane.maxSpeed);
    } else {
      setEnemyPlane(null); // Reset if no plane is found
    }
  };

  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div id="enemy-box">
      <select onChange={handleChange} value={selectedPlane}>
        <option value="" disabled>
          Select a plane
        </option>
        {planes.map((plane) => (
          <option key={plane.id} value={plane.id}>
            {plane.name}
          </option>
        ))}
      </select>

      {enemyPlane ? (
        <>
          <p>Name: {enemyPlane.name}</p>
          <p>Battle Rating: {enemyPlane.battleRating}</p>
          <p>Country: {enemyPlane.country}</p>
          <p>Max Altitude: {enemyPlane.maxAltitude}</p>
          <p>Max Speed: {enemyPlane.maxSpeed}</p>
          <p>Turn Time: {enemyPlane.turnTime.stock}</p>
        </>
      ) : (
        <p>Not Selected Yet</p>
      )}
    </div>
  );
}

export default EnemyBox;
