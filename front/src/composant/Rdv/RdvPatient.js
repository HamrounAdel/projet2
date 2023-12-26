import React, { useState,useEffect } from 'react'
import { deletRDV ,getRdvByUserId } from '../../api/apiRDV';
import Navigation from '../navbar/Navigation';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function RdvPatient() {
    const auth = useSelector(state => state.User)
    const [reservations, setReservations] = useState([]);
    const {userId} = useParams()
    const navigate =useNavigate()
    
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
          const response = await getRdvByUserId();
          console.log('response',response)
           setReservations(response);
        } catch (error) {
          console.error('Error fetching reservations:', error.message);
        }
      };
    
      useEffect(() => {
        fetchReservations();
      }, []);
    console.log('reservations',reservations)
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login/User');
      };
  return (
    <div>
        <Navigation  auth={auth} logout={logout}/>
       <h2>Reservations</h2>
      <ul>
       { 
       (reservations).map((reservation) => (
          <li >
            {reservation.dateRdv}  {reservation.accepted ? true : false}
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default RdvPatient
