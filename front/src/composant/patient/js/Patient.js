import React from 'react'
import { FaTrash, FaEdit} from 'react-icons/fa';
function Patient({el}) {
  return (
    <div>
       
     <table>
        <tr>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.adress}</td>
          <td>{el.phone}</td>
          <td>{el.birthday}</td>
          <td>{el.email}</td>
          <td><FaEdit  style={{color:'green'}} /></td>
          <td><FaTrash  style={{color:'red'}} /></td>
        </tr>
     
    </table>
    </div>
  )
}

export default Patient
