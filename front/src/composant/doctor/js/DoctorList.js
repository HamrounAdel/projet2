 import React,{ useState,useEffect }  from 'react'
import '../css/doctor.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Doctor from './Doctor'
import Navigation from '../../navbar/Navigation'
import {setUser} from '../../../redux/userSlice'
import { getAllDoctor } from '../../../api/apiDoctor'

function DoctorList() {
   const auth = useSelector((state) => state.User)
  console.log('redux users',auth)
  const doctor = useSelector((state) => state.Doctor)
  console.log('redux users',doctor)
  const [doctorList, setDoctorList] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

     const getDoc = async () => {
      try{
      const data = await getAllDoctor();
        //  console.log('users', data);
         console.log('doctors from getdoc', data.doctors);
         setDoctorList(data.doctors);
          // dispatch(setUser(data.users));
      }catch(error){
        console.error('Error fetching users:', error);
      }
       } 
    useEffect(() => {
    getDoc();
  }, []);
  console.log("this is doctors list :", doctorList);
 
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login/Doctor')
  }
    const doctors = Object.values( doctorList)
   console.log('doctors filter',doctors)
 
  return (
    <div >
       <Navigation auth={auth} logout={logout} />
       <h2>Liste des medecines disponible</h2>
      
       <div className='pos1'>
      <div className='grid-container'> 
     
      {doctors
      .map((el)=> <Doctor key={el._id} el = {el}/>) 
      }
    
      </div>
      </div>
    </div>
  )
}

export default DoctorList
