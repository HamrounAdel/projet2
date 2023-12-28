import React,{useState,useEffect} from 'react'

import { useSelector } from 'react-redux';
import { FaTrash, FaEdit} from 'react-icons/fa';
import { getAllUser } from '../../api/apiUser';
function ListUser() {

    const user = useSelector((state) => state.User)
    console.log('redux users',user)
    const [userList, setUserList] = useState([]);
   
    const getUs = async () => {
        try{
        const data = await getAllUser();
          //  console.log('users', data);
           console.log('userss from getdoc', data.users);
           setUserList(data.users);
            // dispatch(setUser(data.users));
        }catch(error){
          console.error('Error fetching users:', error);
        }
         } 
      useEffect(() => {
      getUs();
    }, []);
    console.log("this is user list :", userList);
  return (
    <div>
    <h2>Liste des Patient</h2>
    <table>
      <thead>
        <tr>
          <th>Nom du Patient</th>
          <th>Date de naissance</th>
          <th>telephone</th>
          <th>Address</th>
          <th>address Email</th>
          {/* Ajoutez d'autres colonnes au besoin */}
        </tr>
      </thead>
      <tbody>
        {userList.filter(el=>el.role==="Patient").map((el) => (
          <tr >
            <td>{`${el.name} ${el.lastName}`}</td>
            <td>{el.birthday}</td>
            <td>{el.phone}</td>
            <td>{el.address}</td>
            <td>{el.email}</td>
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


export default ListUser
