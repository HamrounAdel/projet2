import React from 'react'
import './rdv.css'
import { useNavigate } from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import Navigation from '../navbar/Navigation'
import { useEffect, useState } from 'react'
import { getAllDoctor} from '../../api/apiDoctor'
import {addRDV} from '../../api/apiRDV'
function Rdv() {
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const rdv= useSelector(state=>state.RDV)
 const auth = useSelector(state=>state.User)
console.log('auth =>', auth)
const doct = useSelector(state=>state.Doctor)
console.log('auth =>', doct)

const [userList, setUserList] = useState([]);
const [searchSpeciality,setSearchSpeciality]=useState('')
const[namePatient,setNamePatient]=useState()
const[nameDoctor,setNameDoctor]=useState()
const[heure,setHeure]=useState("00:00")
const[dateRdv,setDateRdv]=useState("jj/mm/aaaa")

const handelAdd=async(value)=>{
  await addRDV(value)
  navigate('/auth')
}

    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login/User')
    }
   const getdoct = async () => {
        try{
        const data = await getAllDoctor();
           console.log('users from getUs', data.doctors);
           setUserList(data.doctors);
        }catch(error){
          console.error('Error fetching users:', error);
        }
         } 
      useEffect(() => {
      getdoct();
    }, []);

    console.log("this is users list :", userList);
   
  return (
    <>
    <Navigation auth={auth} logout={logout}  />
   
    <div className='rdv-container'>
    <h2>Prendre un Rendez-vous</h2>
      <div>
        <div>
      <label htmlFor="text"  > Nom du Patient:  </label>
       <input type="text"  
        defaultValue={`${auth.name} ${auth.lastName}`}
        onChange={(e)=>setNamePatient(e.target.value)}
       
         />
        </div>
        <br/>
        <label htmlFor="text"  > Nom du doctor:  </label>
        <input  type="text" 
        defaultValue={userList.name}
         onChange={(e) => setNameDoctor(e.target.value)}/>
          

        <label htmlFor="datePicker">Selection une Date :</label>
        <input type="date"  
        value={dateRdv}
        onChange={(e)=>setDateRdv(e.target.value)} />
        
         <label htmlFor="datePicker">Heure :</label>
        <input type="heure"  
        value={heure}
        onChange={(e)=>setHeure(e.target.value)} />       
      </div><br/>
      <button type='button' onClick={()=>handelAdd({namePatient,heure,nameDoctor,dateRdv})}>Prendre Rendez-vous</button>
    </div>
    </>
  )
}

export default Rdv
