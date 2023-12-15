import React from 'react'
import {setUser} from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getAccount} from '../../api/apiUser'
import Admin from '../admin/Admin'
import Navigation from '../navbar/Navigation'
import AcceuilPat from '../patient/AcceuilPatient/AcceuilPat'
import LoginUser from '../patient/login/LoginUser'
function RouteUser() {

  const auth = useSelector(state=>state.User)
  console.log('auth =>', auth)

const dispatch = useDispatch()
const navigate = useNavigate()
const getAcc=async()=>{
  const data = await getAccount()
  console.log('data login', data)
  
  dispatch(setUser(data))
}
useEffect(()=>{
  getAcc()
},[])

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login/User')
}

const token = localStorage.getItem('token')

  return (
    <div>
     
      {
token ? (<>
       <Navigation auth={auth} logout={logout}   />
{
  auth.role === "Admin" ?  <Admin/> :  auth.role === "Patient" ?  <AcceuilPat /> :null

}</>):(<LoginUser/>)
      }
    </div>
  )
}

export default RouteUser