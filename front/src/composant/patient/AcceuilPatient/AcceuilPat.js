import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setDoctor } from '../../../redux/doctorSlice';
import Doctor from '../../doctor/cardDoctor/Doctor';
import './acceuilPat.css'
import { getAllDoctor } from '../../../api/apiDoctor';
import { setUser } from '../../../redux/userSlice';
import { getAllUser } from '../../../api/apiUser';
function AcceuilPat() {

  const doctors = useSelector(state => state.Doctor)
  console.log('users jdid',doctors)
  const auth = useSelector(state => state.User)
  console.log('users jdid',auth)
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
       console.log("this is users list :", userList);
 
  const getUs = async () => {
   const data = await getAllUser();
   console.log('users from getUs', data.users);
        //  setUserList(data.doctors);
      // console.log('users', data);
       dispatch(setUser(data.users));
    } 
     useEffect(() => {
       getUs();
     
      }, []);
     


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
      <select value={searchAdress} onChange={(e) => setSearchAdress(e.target.value)}>
  <option defaultValue="">Sélectionnez une adresse</option>
  <option value="Mednine">Mednine</option>
  <option value="Tunis">Tunis</option>
  <option value="Gabes">Gabès</option>
  <option value="Sfax">Sfax</option>
  <option value="Ben Arous">ben Arous</option>
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
      
      
       {show && (<div className='grid-container'>
      {search.filter((el)=>(el.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
      && (el.specialite === searchSpeciality) &&  (el.adress === searchAdress))
      .map((el)=> (<Doctor el = {el}/>))}
    </div>)}

      </div>
      </div>
      </div>
    </div>
  )
}

export default AcceuilPat
