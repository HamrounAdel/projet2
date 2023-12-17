import React, { useState,useEffect } from 'react'
import '../css/acceuilPat.css'
import { useSelector, useDispatch } from 'react-redux';
import { setDoctor } from '../../../redux/doctorSlice';
import Doctor from '../../doctor/js/Doctor';

import { getAllDoctor } from '../../../api/apiDoctor';

function AcceuilPat() {

  const doctors = useSelector(state => state.Doctor)
  console.log('doctors ',doctors)
  const auth = useSelector(state => state.User)
  console.log('users ',auth)
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchSpeciality,setSearchSpeciality]=useState('')
   const [searchAdress,setSearchAdress]= useState('')
   const [show,setShow]=useState('false')

   const handelShow = () => {
    setShow(!show);
  };
 
  const getDoc = async () => {
    const data = await getAllDoctor();
    console.log('users from getUs', data.doctors);
          setUserList(data.doctors);
       // console.log('users', data);
       //  dispatch(setDoctor(data.doctors));
     } 
      useEffect(() => {
        getDoc();
      
       }, []);
       console.log("this is doctors list :", userList);
 
 
     


 const search= Object.values(userList)
console.log('search',search)
  return (
    <div>
      
      <div className='log'>
        <div>
      <h1 > Trouvez un rendez-vous </h1>
      <div>
           <input
           type="text"
           placeholder="Search by name"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           /> 
          <select value={searchAdress}
              onChange={(e) => setSearchAdress(e.target.value)}>
                 <option defaultValue="">Sélectionnez une adresse</option>
                 <option value="Mednine">Mednine</option>
                 <option value="Tunis">Tunis</option>
                 <option value="Gabes">Gabès</option>
                 <option value="Sfax">Sfax</option>
                 <option value="Ben Arous">Ben Arous</option>
                 <option value="Nabel">Nabeul</option>
                 <option value="Tatawin">Tatawin</option>
                 <option value="Ariana">Ariana</option>
                 <option value="Monastir">Monastir</option>
                 <option value="sousse">Sousse</option>
                 <option value="Kairouan">Kairouan</option>
                 <option value="Le Kef">Le Kef</option>
         </select> 
         <select value={searchSpeciality} 
            onChange={(e) => setSearchSpeciality(e.target.value)}>
                 <option defaultValue="">Sélectionnez une spécialité</option>
                 <option value="Géneraliste">Géneraliste</option>
                 <option value="Pédiatre">Pédiatre</option>
                 <option value="Dentiste">Dentiste</option>
                 <option value="Ophtalmologue">Ophtalmologue</option>
                 <option value="Ostéopathe">Ostéopathe</option>
                 <option value="Gastro-entérologue">Gastro-entérologue</option>
         </select>
         <button onClick={handelShow}>Rechercher </button>
     </div>
    
    <div>
         {show && (<div className='grid-container'>
           {search.filter((el)=>(el.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
           && (el.specialite === searchSpeciality) &&  (el.address === searchAdress))
           .map((el)=> (<Doctor el = {el}/>))}
            </div>)
          }
   </div>
   </div>
    </div>
</div>
  )
}

export default AcceuilPat
