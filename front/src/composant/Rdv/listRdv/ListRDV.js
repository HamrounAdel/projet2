import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import {getAllRDV} from '../../../api/apiRDV'
import RdvCrd from './RdvCrd'
function ListRDV() {
    const rdv =useSelector(state=>state.Rdv)
    const [rdvs,setRdvs]=useState([])

    const getrdvs = async () => {
      try{
      const data = await getAllRDV();
        //  console.log('users', data);
         console.log('users from getUs', data);
         setRdvs(data);
          // dispatch(setUser(data.users));
      }catch(error){
        console.error('Error fetching users:', error);
      }
       } 
    useEffect(() => {
    getrdvs();
  }, []);
  console.log("this is users list :", rdvs);
  const card = Object.values( rdvs)
   console.log('doctors filter',card)
 

  return (
    <div>
      {card.map((el)=> <RdvCrd  el = {el}/>)}
    </div>
  )
}

export default ListRDV
