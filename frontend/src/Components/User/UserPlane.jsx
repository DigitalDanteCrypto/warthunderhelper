import React, { useState } from "react";
import { usePlanes } from "../../Service/PlaneContext";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

function UserPlane() {
  const { planes, isLoading, error } = usePlanes();
  const [selectedPlane, setSelectedPlane] = useState("");

  const { updateUserPlane } = usePlanes(); //*** */

  // Function to handle plane selection change inside the select
  const handleChange = (event) => {
    setSelectedPlane(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const userPlane = planes.find((plane) => plane.id === selectedPlane);
  updateUserPlane(userPlane);
  return (
    <div id="userplane-display">
      <h2>My plane :</h2>
      <div id="select-btn">
        <Select
          id="demo-simple-select"
          onChange={handleChange}
          value={selectedPlane}
        >
          {/* Assuming each plane has a unique id that you can use as the value */}
          {planes.map((plane) => (
            <MenuItem key={plane.id} value={plane.id}>
              {plane.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      {userPlane ? (
        <>
          <div id="user-plane">
            <p>Name: {userPlane.name}</p>
            <p>Battle Rating: {userPlane.battleRating}</p>
            <p>Country: {userPlane.country}</p>
            <p>Max Altitude: {userPlane.maxAltitude}</p>
            <p>TurnTime Stock: {userPlane.turnTime.stock}</p>
            <p>TurnTime Upgraded: {userPlane.turnTime.upgraded}</p>
            <p>Max Speed: {userPlane.maxSpeed}</p>
          </div>
          <div className="container">
            <div className="features">
              <ul>
                <h4>Features:</h4>
                {userPlane.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="limits">
              <ul>
                <h4>Plane Limits :</h4>
                <li>Wings: {userPlane.limits.wings}</li>
                <li>Gear: {userPlane.limits.gear}</li>
              </ul>
            </div>

            <div className="flaps">
              <ul>
                <h4>Flaps:</h4>
                <p>
                  {userPlane.limits.flaps
                    .map((flap) => {
                      const parts = [];
                      if (flap.combat > 0) parts.push(`Combat: ${flap.combat}`);
                      if (flap.take_off > 0)
                        parts.push(`Take-off: ${flap.take_off}`);
                      if (flap.landing > 0)
                        parts.push(`Landing: ${flap.landing}`);
                      return parts.join(", ");
                    })
                    .filter((part) => part)
                    .join("; ")}
                </p>
              </ul>
            </div>
            <div className="weapons">
              <p>
                <h4>Armament :</h4>

                {Object.entries(userPlane.armament).map(([key, value]) => (
                  <p key={key}>{`${
                    key.charAt(0).toUpperCase() + key.slice(1)
                  }: ${value}`}</p>
                ))}
              </p>
            </div>
            <div className="pros">
              <ul>
                <p>Pros --------</p>
                {userPlane.pros.map((pros, index) => (
                  <li key={index}>Pros : {pros}</li>
                ))}
              </ul>
            </div>
            <div className="cons">
              <ul>
                <p>Cons --------</p>
                {userPlane.cons.map((cons, index) => (
                  <li key={index}>Cons : {cons}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Not Selected Yet</p>
      )}
    </div>
  );
}

export default UserPlane;
