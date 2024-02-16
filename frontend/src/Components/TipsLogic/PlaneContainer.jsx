import React, { useState } from 'react';
import EnemyBox from '../Ennemies/EnnemyBox';
import UserTips from '../User/UserTips';

function PlaneContainer() {
  const [selectedMaxSpeed, setSelectedMaxSpeed] = useState(0);
  const [totalMaxSpeed, setTotalMaxSpeed] = useState(0);

  const handleSelectPlane = (maxSpeed) => {
    setSelectedMaxSpeed(maxSpeed);
    // Assuming you want to add to the total each time a plane is selected
    setTotalMaxSpeed(prevTotal => prevTotal + maxSpeed);
  };

  return (
    <div>
      <EnemyBox onSelectPlane={handleSelectPlane} />
      <UserTips totalMaxSpeed={totalMaxSpeed} />
    </div>
  );
}

export default PlaneContainer;
