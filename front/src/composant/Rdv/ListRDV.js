import React, { useState,useEffect } from 'react'
import { deletRDV ,getAllRDV } from '../../api/apiRDV';
import axios from 'axios'
import { useParams } from 'react-router-dom';
const ListRDV = () => {
  const [reservations, setReservations] = useState([]);
const {rdvId} = useParams()


  const handleDeleteReservation = async (rdvId) => {
    try {
      await deletRDV(rdvId);
      // You may want to refresh the reservation list here
    } catch (error) {
      console.error('Error deleting reservation:', error.message);
    }
  };
  const fetchReservations = async () => {
    try {
      const data = await getAllRDV();
      console.log('response',data.rdvs)
       setReservations(data.rdvs);
    } catch (error) {
      console.error('Error fetching reservations:', error.message);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);
  
console.log('reservations',reservations)


  return (
    <div>
      <h2>Reservations</h2>
      <ul>
       { 
       (reservations).map((reservation) => (
          <li key={reservation._id}>
            {reservation.dateRdv} - {reservation.accepted ? true : false}
            <button onClick={handleDeleteReservation}>Delete</button>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default ListRDV
