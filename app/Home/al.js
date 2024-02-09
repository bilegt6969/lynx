// pages/index.js
'use client'
import React, { useState, useEffect } from 'react';

const IndexPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        // Check if jsonData.text is an array
        if (Array.isArray(jsonData.text)) {
          setData(jsonData.text);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data from localhost:3000</h1>
      {data && (
  <ul>
    {data.map((x, index) => (
      <li key={index}>
        <img src={x} alt={`Image ${index}`} />
      </li>
    ))}
  </ul>
)}
    </div>
  );
};

export default IndexPage;
