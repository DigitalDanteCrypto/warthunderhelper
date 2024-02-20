import React, { useState } from "react";
import EnemyBox from "../Ennemies/EnnemyBox";
import { usePlanes } from "../../Service/PlaneContext";
import { userTipsGenerator } from "../../Service/userTipsLogic";

function EnemiesDisplay() {
  const { userPlane } = usePlanes(); //*** */
  const [maxSpeeds, setMaxSpeeds] = useState(new Array(5).fill(0));

  const handleSelectPlane = (newMaxSpeed, index) => {
    setMaxSpeeds((prevMaxSpeeds) => {
      // Create a copy of the array
      const updatedMaxSpeeds = [...prevMaxSpeeds];
      // Update the value at the specific index
      updatedMaxSpeeds[index] = newMaxSpeed;
      return updatedMaxSpeeds;
    });
  };

  
  // Correctly use maxSpeeds to generate the display string
  let displayMaxSpeed = maxSpeeds.join(", ");
  
  let tip = userTipsGenerator(userPlane.maxSpeed, maxSpeeds);

  return (
    <div id="ennemies-container">
      <div id="ennemies-display">
        <EnemyBox
          onSelectPlane={(maxSpeed) => handleSelectPlane(maxSpeed, 0)}
        />
        <EnemyBox
          onSelectPlane={(maxSpeed) => handleSelectPlane(maxSpeed, 1)}
        />
        <EnemyBox
          onSelectPlane={(maxSpeed) => handleSelectPlane(maxSpeed, 2)}
        />
        <EnemyBox
          onSelectPlane={(maxSpeed) => handleSelectPlane(maxSpeed, 3)}
        />
        <EnemyBox
          onSelectPlane={(maxSpeed) => handleSelectPlane(maxSpeed, 4)}
        />
      </div>
      <p>User tips: This is max speed: {displayMaxSpeed}</p>
      {userPlane ? (<p>User max speed: {userPlane.maxSpeed}</p>) : (<p>Not defined yet</p>)}
      {tip ? (<p>User max speed: {tip}</p>): (<p>not defined yet</p>)}

      
    </div>
  );
}

export default EnemiesDisplay;
