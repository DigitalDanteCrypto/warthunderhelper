import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchPlanes } from './/PlaneFetcher';

const PlanesContext = createContext();

export const usePlanes = () => useContext(PlanesContext);

export const PlanesProvider = ({ children }) => {
  const [planes, setPlanes] = useState([]);

  const [userPlane, setUserPlane] = useState({}); // Add userPlane state //*** */
  const updateUserPlane = (plane) => setUserPlane(plane); // ***
  
  
  useEffect(() => {

    console.log("We are in planeContext");
    fetchPlanes()
      .then(data => {
        setPlanes(data);

      })
  }, []);

  return (
    <PlanesContext.Provider value={{ planes, userPlane, updateUserPlane }}>
      {children}
    </PlanesContext.Provider>
  );
};