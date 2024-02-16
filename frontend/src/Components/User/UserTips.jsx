import React, { useState } from "react";


function UserTips({ totalMaxSpeed }) {

  return (
    <div>
      <h2>User Tips</h2>
      <p>Total Max Speed of Selected Planes: {totalMaxSpeed}</p>
    </div>
  );
}

export default UserTips;