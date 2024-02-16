// src/api/fetchPlanes.js

export const fetchPlanes = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/planes');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Could not fetch planes:", error);
      throw error; // Re-throwing the error to be handled by the caller
    }
  };
  