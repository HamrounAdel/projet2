import React from 'react'
import './rdv.css'
import { useNavigate } from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import Navigation from '../navbar/Navigation'
import { useEffect, useState } from 'react'
import { getAllUser } from '../../api/apiUser'
import {addRDV} from '../../api/apiRDV'
function Rdv() {
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const rdv= useSelector(state=>state.RDV)
const auth = useSelector(state=>state.User)
console.log('auth =>', auth)

const [userList, setUserList] = useState([]);
const [searchSpeciality,setSearchSpeciality]=useState('')
const[patient,setPatient]=useState()
const[doctor,setDoctor]=useState()
const[specialite,setSpecialite]=useState()
const[dateRdv,setDateRdv]=useState()

const handelAdd=async(value)=>{
  await addRDV(value)
  navigate('/auth')
}

    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }


   const getUs = async () => {
        try{
        const data = await getAllUser();
           console.log('users from getUs', data.users);
           setUserList(data.users);
        }catch(error){
          console.error('Error fetching users:', error);
        }
         } 
      useEffect(() => {
      getUs();
    }, []);

    console.log("this is users list :", userList);
   
    const doctors = userList.filter(el =>(el.role === 'Doctor') &&(el.specialite===searchSpeciality))
  
  
  return (
    <>
    <Navigation auth={auth} logout={logout}   />
   
    <div className='rdv-container'>
    <h2>Prendre un Rendez-vous</h2>
      <div>
        <div>
      <label htmlFor="text"  > Nom:  </label>
       <input type="text"  
        defaultValue={`${auth.name} ${auth.lastName}`}
        value={patient}
        onChange={(e)=>setPatient(e.target.value)}
       
         />
        </div>
        <br/>

        <label htmlFor="datePicker">Selection une Date :</label>
        <input type="date"  
        value={dateRdv}
        onChange={(e)=>setDateRdv(e.target.value)} />

        <label htmlFor="text">Selection un Specialite :</label>
        <select type="select" 
        value={searchSpeciality} 
        
        onChange={(e) => setSearchSpeciality(e.target.value)} 
        > 
        <option value={specialite} 
        onChange={(e)=>setSpecialite(e.target.value)}></option>
        <option value="Géneraliste">Géneraliste</option>
  <option value="Pédiatre">Pédiatre</option>
  <option value="Dentiste">Dentiste</option>
  <option value="Ophtalmologue">Ophtalmologue</option>
  <option value="Ostéopathe">Ostéopathe</option>
  <option value="Gastro-entérologue">Gastro-entérologue</option>
        </select>

        
        <label htmlFor="text">Selection un  Doctor :</label>
        <select type="select"  
        value={doctor}
         onChange={(e)=>setDoctor(e.target.value)}  > 
        {doctors. map(el=>
          <option value={`${el.name} ${el.lastName}`}>{`${el.name} ${el.lastName}`} </option>)}
        </select>
      </div><br/>
      <button type='button' onClick={()=>handelAdd({patient,doctor,dateRdv,specialite})}>Prendre Rendez-vous</button>
    </div>
    </>
  )
}

export default Rdv
