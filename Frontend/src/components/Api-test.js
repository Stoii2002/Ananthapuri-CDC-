// src/components/FeatureList.js
import React, { useEffect, useState } from 'react';

const FeatureList = () => {
  const [features, setFeatures] = useState([]); // State to hold API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null);     // State for error handling

  useEffect(() => {
    // Fetch data from the Django API
    fetch('http://127.0.0.1:8000/api/features/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFeatures(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Api testing</h2>
      <ul>
        {features.map(feature => (
          <li key={feature.id}>
            <h6>{feature.title}</h6>
            <p>{feature.name}</p>
            <p>{feature.description}</p>
        </li> 
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
