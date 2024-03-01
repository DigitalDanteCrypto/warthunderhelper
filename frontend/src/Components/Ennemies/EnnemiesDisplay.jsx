import React, { useState } from "react";
import EnemyBox from "../Ennemies/EnnemyBox";
import { usePlanes } from "../../Service/PlaneContext";
import { BarChart } from "@mui/x-charts/BarChart";

function EnemiesDisplay() {
  const { userPlane } = usePlanes();
  const [maxSpeeds, setMaxSpeeds] = useState(new Array(5).fill(0));
  const [turnTimes, setTurnTimes] = useState(new Array(5).fill(0));
  const [planeNames, setPlaneNames] = useState(new Array(5).fill(''));

  const handleSelectPlane = (newMaxSpeed, newTurnTimeUpgraded, newPlaneName, index) => {
    setMaxSpeeds((prevMaxSpeeds) => {
      const updatedMaxSpeeds = [...prevMaxSpeeds];
      updatedMaxSpeeds[index] = newMaxSpeed;
      return updatedMaxSpeeds;
    });
    // Assuming you have a setState function for turn times as well
    setTurnTimes(prevTurnTimes => {
      const updatedTurnTimes = [...prevTurnTimes];
      updatedTurnTimes[index] = newTurnTimeUpgraded;
      return updatedTurnTimes;
    });

    setPlaneNames(prevPlaneNames => {
      const updatedPlaneNames = [...prevPlaneNames];
      updatedPlaneNames[index] = newPlaneName;
      return updatedPlaneNames;
    });
  };

const colorPalet = [
  "#6A687A", 
  "#2D728F",
  "#F49E4C",
  "#AB3428",
  "#5D2E8C",
  "#FF6666"

]

  
  let myUserPlaneName;
  if (userPlane) {
    myUserPlaneName= userPlane.name;
  } else {
    myUserPlaneName = "";
  }

  let myUserPlaneSpeed;
  if (userPlane) {
    myUserPlaneSpeed = userPlane.maxSpeed;
  } else {
    myUserPlaneSpeed = 0;
  }

  let myUserTurnTime;
  if (userPlane && userPlane.turnTime) {
    myUserTurnTime = userPlane.turnTime.upgraded;
  } else {
    myUserTurnTime = 0;
  }

  console.log(turnTimes);
  console.log(planeNames);

  return (
    <div id="ennemies-container">
      <div id="ennemies-display">
        <EnemyBox
          onSelectPlane={(planeName,maxSpeed, turnTimeUpgraded) =>
            handleSelectPlane(planeName ,maxSpeed, turnTimeUpgraded, 0)
          }
        />
         <EnemyBox
          onSelectPlane={(planeName, maxSpeed, turnTimeUpgraded) =>
            handleSelectPlane(planeName, maxSpeed, turnTimeUpgraded, 1)
          }
        />
         <EnemyBox
          onSelectPlane={(planeName, maxSpeed, turnTimeUpgraded) =>
            handleSelectPlane(planeName, maxSpeed, turnTimeUpgraded, 2)
          }
        />
         <EnemyBox
          onSelectPlane={(planeName, maxSpeed, turnTimeUpgraded) =>
            handleSelectPlane(planeName, maxSpeed, turnTimeUpgraded, 3)
          }
        />
         <EnemyBox
          onSelectPlane={(planeName, maxSpeed, turnTimeUpgraded) =>
            handleSelectPlane(planeName, maxSpeed, turnTimeUpgraded, 4)
          }
        />
      </div>

      <div id="bar-chart">
        <BarChart
        style={{
          color: '#fdb462',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
          colors={["#fdb462"]}
          series={[
            { data: [myUserPlaneSpeed], label: myUserPlaneName, color: "#8bff47" }, // Assign color to myUserPlaneSpeed
            ...maxSpeeds.map((speed, num) => (num+= 0,{ data: [speed], color: colorPalet[num], label: planeNames[num]})), // Would be great if i could pass ennemy plane names;
          ]}
          height={290}
          xAxis={[{ data: ["Your Max Speed vs enemy planes"], scaleType: "band", categoryGapRatio: 0.7, barGapRatio: 0.4 }]}
          margin={{ top: 60, bottom: 30, left: 40, right: 10 }}
        />

         <BarChart
          colors={["#fdb462"]}
          series={[
            { data: [myUserTurnTime], color: "#8bff47", label: myUserPlaneName }, // Assign color to myUserPlaneSpeed
            ...turnTimes.map((turntime, num) => (num+=0, { data: [turntime], color: colorPalet[num], label: planeNames[num] })), // Map each maxSpeed to its own series
          ]}
          height={290}
          xAxis={[{ data: ["user plane turntime vs enemy planes"], scaleType: "band", categoryGapRatio: 0.7, barGapRatio: 0.4 }]}
          margin={{ top: 60, bottom: 30, left: 40, right: 10 }}
        />
      </div>
    </div>
  );
}

export default EnemiesDisplay;
