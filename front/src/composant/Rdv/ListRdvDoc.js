import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams ,useLocation} from 'react-router-dom'
import {  getRdvByDoctorId} from '../../api/apiRDV'
import Navigation from '../navbar/Navigation'
import {setRDV} from '../../redux/rdvSlice'
import UpdateRdv from './UpdateRdv'
import'./listResPatient.css'
import { FaTrash, FaEdit} from 'react-icons/fa';
function ListRdvDoc() {

  const doct = useSelector(state => state.Doctor)
    const rdv=useSelector(state=>state.RDV)
    console.log ('reservation',rdv)
     const location = useLocation();
    
    const doctorId = new URLSearchParams(location.search).get('doctorId');
    console.log('userId',doctorId)
    const {id}=useParams()
    console.log('idrdv',id)
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const[reservation,setReservation]=useState([])

  const getReservation = async (doctorId) => {
    try{
    const data = await getRdvByDoctorId(doctorId);
    
       console.log('rdvs from get', data);
      
       dispatch(setRDV(data));
          setReservation(data);
        
    }catch(error){
      console.error('Error fetching rdv:', error);
    }
     } 
  useEffect(() => {
    getReservation(doctorId);
}, [doctorId]);

console.log('byuser',reservation)

const logoutdoct = () => {
  localStorage.removeItem('token');
  navigate('/login/Doctor');
};
const handelEdit =(id)=>{
 navigate(`/updatRdv/${id}`)
}

  return (
    <div>
        <Navigation  doct={doct} logoutdoct={logoutdoct}/>
       <h2>Reservations</h2>
      <ul className='grid-containers'>
       { 
       (reservation).map((reservation) => (
        <div className="MedicalCard__Container">
  <div className="MedicalCard__Row">
    <div className="MedicalCard__Title">
      <div className="MedicalCard__Title--container">
        <div className="MedicalCard__Title--icon">*</div>
        <div className="MedicalCard__Title--wrapper">
          <div className="MedicalCard__Title--title">Nom du patient:</div>
          <div className="MedicalCard__Title--subTitle">{reservation.user}</div>
        
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
        {reservation.status }<FaEdit style={{color:'green'}} onClick={()=>handelEdit(reservation._id)}/></div>
      <div className="MedicalCard__Title--wrapper">
        <div className="MedicalCard__Title--icon" />
        <div className="MedicalCard__Title--title">
        
        </div>
      </div>
    </div>
  </div>
</div>
          // <li >
          //  {reservation.user}- {reservation.dateRdv} -{reservation.status}
          //  <FaEdit  style={{color:'green'}} onClick={()=>handelEdit(reservation._id)} />
           
          //   {/* <FaTrash  style={{color:'red'}}  /> */}
          //   {/* <button onClick={()=>handleDeleteReservation(reservation._id)}>Delete</button> */}
          // </li>
        ))} 
      </ul>
    </div>
  )
}

export default ListRdvDoc
