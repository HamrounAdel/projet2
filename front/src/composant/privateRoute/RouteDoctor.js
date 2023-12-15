import React from 'react'
import {setDoctor} from '../../redux/doctorSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAccountDoct } from '../../api/apiDoctor'
import Navigation from '../navbar/Navigation'
import AcceuilDoc from '../doctor/AcceuilDoctor/AcceuilDoc'
import LoginDoctor from '../doctor/login/LoginDoctor'
function RouteDoctor() {

  const doct = useSelector(state=>state.Doctor)
  console.log('auth =>', doct)

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

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login/Doctor')
}

const token = localStorage.getItem('token')

  return (
    <div>
     
      {
token ? (<>
       {/* <Navigation doct={doct} logout={logout}   /> */}
 <AcceuilDoc/> 

</>):(<LoginDoctor/>)
      }
    </div>
  )
}

export default RouteDoctor