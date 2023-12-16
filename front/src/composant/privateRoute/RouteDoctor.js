import React from 'react'
import {setDoctor} from '../../redux/doctorSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAccountDoct } from '../../api/apiDoctor'
import Navigation from '../navbar/Navigation'
import AcceuilDoc from '../doctor/js/AcceuilDoc'
import LoginDoctor from '../doctor/js/LoginDoctor'
function RouteDoctor() {

  const doct = useSelector(state=>state.Doctor)
  console.log('auth =>', doct)
  const auth = useSelector(state=>state.User)
  console.log('auth =>', auth)

const dispatch = useDispatch()
const navigate = useNavigate()
const getAcc=async()=>{
  const data = await getAccountDoct()
  console.log('data login', data)
  
  dispatch(setDoctor(data))
}
useEffect(()=>{
  getAcc()
},[])

const logoutdoct=()=>{
  localStorage.removeItem('token')
  navigate('/login/Doctor')
}

const token = localStorage.getItem('token')

  return (
    <div>
     
      {
token ? (<>
        <Navigation doct={doct} logoutdoct={logoutdoct} auth={auth}  /> 
 <AcceuilDoc/> 

</>):(<LoginDoctor/>)
      }
    </div>
  )
}

export default RouteDoctor