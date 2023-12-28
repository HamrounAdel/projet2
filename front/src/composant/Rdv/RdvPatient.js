import React, { useState,useEffect } from 'react'
import { deletRDV ,getRdvByUserId } from '../../api/apiRDV';
import Navigation from '../navbar/Navigation';
import { useParams,useNavigate ,useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

function RdvPatient() {

    const auth = useSelector(state => state.User)
    const [reservations, setReservations] = useState([]);
    // const {userId} = useParams()
    const navigate =useNavigate()
    const location = useLocation();
   const doctorId = new URLSearchParams(location.search).get('doctorId');
   const userId = auth._id
      const handleDeleteReservation = async (rdvId) => {
        try {
          await deletRDV(rdvId);
        } catch (error) {
          console.error('Error deleting reservation:', error.message);
        }
      };

      const fetchReservations = async (id) => {
        try {
          const response = await getRdvByUserId(id);
          console.log('response',response.rdv)
           setReservations(response.rdv);
        } catch (error) {
          console.error('Error fetching reservations:', error.message);
        }
      };
    
      useEffect(() => {
        fetchReservations(userId);
      }, [userId]);
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
           {reservation.doctor}- {reservation.dateRdv} -  {reservation.status}
            <button onClick={()=>handleDeleteReservation(reservation._id)}>Delete</button>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default RdvPatient
