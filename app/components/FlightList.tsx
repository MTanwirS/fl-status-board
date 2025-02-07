"use client";
//import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './FlightList.module.css';

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightList = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchInterval = 60000; // milliseconds
  const API_URL_1 = "https://flight-status-mock.core.travelopia.cloud/flights";


  useEffect(() => {
    
    const fetchFlights = async () => {
      try {
        const response1 = await fetch(API_URL_1);
        if (!response1.ok) throw new Error('Error fetching from API 1');
        
        const data1 = await response1.json();
        
        setFlights(data1);
        setError(null); // Reset error state if fetch is successful
      } catch (error) {
        if (error instanceof Error){
          if (error.message.includes('NetworkError')) {
            setError('Network error. Please check your connection.');
          } else if (error.message.includes('API limit exceeded')) {
            setError('API limit exceeded. Please try again later.');
          } else {
            setError('Failed to fetch flight data. Please try again later.');
          }
        }
      }
    };

    fetchFlights(); // Fetch the flight table fisrt time.

    const intervalId = setInterval(fetchFlights, fetchInterval); // Refreshes the page with updates at a regular interval, (60 seconds)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.flightList}>
      <h1>Flight Status Information</h1>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <table className={styles.flightTable}>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Airline</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight.id} className={styles.flightItem}>
                <td>
                  <Link href={`/flight/${flight.id}`}>
                    {flight.flightNumber}
                  </Link>
                </td>
                <td>{flight.airline}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FlightList;
