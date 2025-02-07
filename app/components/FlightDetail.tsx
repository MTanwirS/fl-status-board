"use client";
//import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from './FlightDetail.module.css';

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
  details: string;
}

const FlightDetail = () => {
  const params = useParams() ;
  const { id } = params;
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);
  const API_URL_2 = "https://flight-status-mock.core.travelopia.cloud/flights/";

  useEffect(() => {
    if (id) {
      const fetchFlight = async () => {
        try {
          const response2 = await fetch(`${API_URL_2}${id}`);
          if (!response2.ok) throw new Error('Error fetching from API 2');
          
          const data2 = await response2.json();
          
          setFlight(data2);
          setError(null); // Reset error state if fetch is successful
        } catch (error) {
          if (error instanceof Error){
            if (error.message.includes('NetworkError')) {
              setError('Network error. Please check your connection.');
            } else if (error.message.includes('API limit exceeded')) {
              setError('API limit exceeded. Please try again later.');
            } else if (error.message.includes('404')) {
              setError('Flight information unavailable.');
            } else {
              setError('Failed to fetch flight data. Please try again later.');
            }
          }
        }
      };

      fetchFlight();
    }
  }, [id]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.flightDetail}>
      <h1>Flight Details</h1>
      <table className={styles.flightTable}>
        <tbody>
          <tr>
            <th>Flight Number</th>
            <td>{flight.flightNumber}</td>
          </tr>
          <tr>
            <th>Airline</th>
            <td>{flight.airline}</td>
          </tr>
          <tr>
            <th>Origin</th>
            <td>{flight.origin}</td>
          </tr>
          <tr>
            <th>Destination</th>
            <td>{flight.destination}</td>
          </tr>
          <tr>
            <th>Departure Time</th>
            <td>{flight.departureTime}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{flight.status}</td>
          </tr>
          <tr>
            <th>More Details</th>
            <td>{(flight.details)?flight.details:"None"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlightDetail;