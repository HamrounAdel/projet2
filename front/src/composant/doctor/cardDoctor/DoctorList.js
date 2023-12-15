 import React,{ useState,useEffect }  from 'react'
import './doctor.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getAllUser} from '../../../api/apiUser'
import Doctor from './Doctor'
import Navigation from '../../navbar/Navigation'
import {setUser} from '../../../redux/userSlice'

function DoctorList() {
   const auth = useSelector((state) => state.User)
  console.log('redux users',auth)
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

     const getUs = async () => {
      try{
      const data = await getAllUser();
        //  console.log('users', data);
         console.log('users from getUs', data.users);
         setUserList(data.users);
          // dispatch(setUser(data.users));
      }catch(error){
        console.error('Error fetching users:', error);
      }
       } 
    useEffect(() => {
    getUs();
  }, []);
  console.log("this is users list :", userList);
 
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
    const doctors = Object.values( userList).filter((el)=>el.role==='Doctor')
   console.log('doctors filter',doctors)
 
  return (
    <div >
       <Navigation auth={auth} logout={logout} />
       <h2>Liste des medecines disponible</h2>
       <hr/>
      <div className='grid-container'> 
     
      {doctors
      .map((el)=> <Doctor key={el._id} el = {el}/>) 
      }
    
      </div>
      
    </div>
  )
}

export default DoctorList
