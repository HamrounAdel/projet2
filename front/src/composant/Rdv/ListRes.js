import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams ,useLocation} from 'react-router-dom'
import { getAllRDV , getRdvByUserId} from '../../api/apiRDV'
import Navigation from '../navbar/Navigation'
import'./listResPatient.css'
import { setRDV } from '../../redux/rdvSlice'
function ListRes() {
    const auth = useSelector(state => state.User)
    const rdv=useSelector(state=>state.RDV)
    console.log ('reservation',rdv)
    // const location = useLocation();
    // const userId = new URLSearchParams(location.search).get('userId');
    const userId=auth._id
    console.log('userId',userId)
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const[reservation,setReservation]=useState([])

  
    const getReservation = async (userId) => {
        try{
        const data = await getRdvByUserId(userId);
        
           console.log('rdvs from get', data);
          
            // dispatch(setRDV(data));
              setReservation(data);
            
        }catch(error){
          console.error('Error fetching rdv:', error);
        }
         } 
      useEffect(() => {
        getReservation(userId);
    }, []);

 console.log('byuser',reservation)

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login/User');
      };


  return (
    <div>
        <Navigation  auth={auth} logout={logout}/>
       <h2>Reservations</h2>
      <ul className='grid-containers'>
        
       { 
      Object.values(reservation).map((reservation) => (
        <div className="MedicalCard__Container">
  <div className="MedicalCard__Row">
    <div className="MedicalCard__Title">
      <div className="MedicalCard__Title--container">
        <div className="MedicalCard__Title--icon">*</div>
        <div className="MedicalCard__Title--wrapper">
          <div className="MedicalCard__Title--title">Nom du medecin:</div>
          <div className="MedicalCard__Title--subTitle">{reservation.doctor}</div>
        
        </div>
      </div>
    </div>
    <div className="MedicalCard__TimeTo"> Date :{reservation.dateRdv} </div>
  </div>
  <div className="MedicalCard__Row">
    <div className="MedicalCard__Location">
      <div className="MedicalCard__Title--subTitle"> Reponse de Rendez-Vous:</div>
      <div className="MedicalCard__Title--wrapper">
        <div className="MedicalCard__Title--icon" />
        {/* <div className="MedicalCard__Title--title"></div> */}
      </div>
    </div>
    <div className="MedicalCard__Date">
      <div className="MedicalCard__TimeToto" >
        {reservation.status }</div>
      <div className="MedicalCard__Title--wrapper">
        <div className="MedicalCard__Title--icon" />
        <div className="MedicalCard__Title--title"></div>
      </div>
    </div>
  </div>
</div>

         
        ))} 
      </ul>
    </div>
  )
}

export default ListRes
