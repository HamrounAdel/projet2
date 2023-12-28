import React,{useState,useEffect} from 'react'
import { getAllDoctor } from '../../api/apiDoctor';
import { useSelector } from 'react-redux';
import { FaTrash, FaEdit} from 'react-icons/fa';
function ListMedec() {

    const doctor = useSelector((state) => state.Doctor)
    console.log('redux users',doctor)
    const [doctorList, setDoctorList] = useState([]);
   
    const getDoc = async () => {
        try{
        const data = await getAllDoctor();
          //  console.log('users', data);
           console.log('doctors from getdoc', data.doctors);
           setDoctorList(data.doctors);
            // dispatch(setUser(data.users));
        }catch(error){
          console.error('Error fetching users:', error);
        }
         } 
      useEffect(() => {
      getDoc();
    }, []);
    console.log("this is doctors list :", doctorList);
  return (
    <div>
    <h2>Liste des médecins</h2>
    <table>
      <thead>
        <tr>
          <th>Nom du médecin</th>
          <th>Spécialité</th>
          <th>telephone</th>
          <th>Address</th>
          <th>timings</th>
          {/* Ajoutez d'autres colonnes au besoin */}
        </tr>
      </thead>
      <tbody>
        {doctorList.map((el) => (
          <tr >
            <td>{`${el.name} ${el.lastName}`}</td>
            <td>{el.specialite}</td>
            <td>{el.phone}</td>
            <td>{el.address}</td>
            <td>{el.timings}</td>
             <td><FaEdit  style={{color:'green'}} /></td>
            <td><FaTrash  style={{color:'red'}}  /></td>
            {/* Ajoutez d'autres cellules au besoin */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};


export default ListMedec
