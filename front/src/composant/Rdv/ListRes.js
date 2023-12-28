import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllRDV , getRdvByUserId} from '../../api/apiRDV'
import Navigation from '../navbar/Navigation'
import { setRDV } from '../../redux/rdvSlice'
function ListRes() {
    const auth = useSelector(state => state.User)
    const doct=useSelector(state=>state.Doctor)
    const rdv=useSelector(state=>state.RDV)
    const userId =useParams()
    console.log ('reservation',rdv)
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const[reservation,setReservation]=useState([])

  
    const getReservation = async (id) => {
        try{
        const data = await getRdvByUserId(id);
        
           console.log('rdvs from getdoc', data.rdvs);
          
            dispatch(setRDV(data.rdvs));
            setReservation(data.rdvs);
            
        }catch(error){
          console.error('Error fetching rdv:', error);
        }
         } 
      useEffect(() => {
        getReservation();
    }, [userId]);

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
      Object.values(reservation).map((reservation) => (
          <li key={reservation._id}>
            {reservation.doctor}-{reservation.dateRdv} - {reservation. status ? true:false }
            {/* <button >Delete</button> */}
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default ListRes
