import React from 'react'
import Patient from './Patient'
import {useSelector,useDispatch}from 'react-redux'
import { getAllUser } from '../../../api/apiUser'
import {setUser} from '../../../redux/userSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../navbar/Navigation'
function PatientList() {
  
  const auth = useSelector(state => state.User)
  console.log('ghjklllm',auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

     const getUs = async () => {
      const data = await getAllUser();
         console.log('users', data);
          dispatch(setUser(data.users));
       } 
    useEffect(() => {
    getUs();
  }, []);

  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
    const patients = Object.values(auth).filter((el)=>el.role==='Patient')
   console.log('patients filter',patients)



  return (
 
    
    <div>
    <div className=''> 
    {/* <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Address</th>
          <th>Telphone</th>
          <th>Date de naissance</th>
          <th>Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
      </table> */}
    {patients
    .map((el)=> <Patient key={el._id} el = {el}/>) 
    }
  
    </div>
      
     
    </div>
   
  )
}

export default PatientList
