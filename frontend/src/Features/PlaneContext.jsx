import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchPlanes } from '../Features/PlaneFetcher'; 

const PlanesContext = createContext();

export const usePlanes = () => useContext(PlanesContext);

export const PlanesProvider = ({ children }) => {
  const [planes, setPlanes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("We are in planeContext");
    fetchPlanes()
      .then(data => {
        setPlanes(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <PlanesContext.Provider value={{ planes, isLoading, error }}>
      {children}
    </PlanesContext.Provider>
  );
};