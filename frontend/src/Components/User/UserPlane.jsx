import React, { useState } from 'react';
import { usePlanes } from '../../Features/PlaneContext';

function UserPlane() {
  const { planes, isLoading, error } = usePlanes();
  const [selectedPlane, setSelectedPlane] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Function to handle plane selection change inside the select 
  const handleChange = (event) => {
    setSelectedPlane(event.target.value);
  };

 
  const userPlane = planes.find(plane => plane.id === selectedPlane);

  return (
    <div>
      <h2>User's Plane</h2>
      <select onChange={handleChange} value={selectedPlane}>
        {/* Assuming each plane has a unique id that you can use as the value */}
        {planes.map(plane => (
          <option key={plane.id} value={plane.id}>{plane.name}</option>
        ))}
      </select>
      {userPlane ? (
        <>
          <p>Name: {userPlane.name}</p>
          <p>Battle Rating: {userPlane.battleRating}</p>
          <p>Country: {userPlane.country}</p>
          <p>Max Altitude: {userPlane.maxAltitude}</p>
          <p>Max Speed: {userPlane.maxSpeed}</p>
          <p>Features:</p>
        <ul>
      {userPlane.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <p>Plane Limits</p>
    <p>Wings: {userPlane.limits.wings}</p>
    <p>Gear: {userPlane.limits.gear}</p>
    <p>Flaps:</p>
    <ul>
      {userPlane.limits.flaps.map((flap, index) => (
        <li key={index}>
          Combat: {flap.combat}, Take-off: {flap.take_off}, Landing: {flap.landing}
        </li>
      ))}
    </ul>
    <p>Armament : {Object.entries(userPlane.armament).map(([key, value]) => (
      <p key={key}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</p>
    ))}</p>
          
        </>
      ) : <p>Not Selected Yet</p>}
    </div>
  );
}

export default UserPlane;
