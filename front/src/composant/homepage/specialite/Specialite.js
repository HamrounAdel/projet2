import React from 'react'
import './specialite.css'
function Specialite({el}) {
  return (
 
 <div>
   
    <div > 
    <img src={el.imgUrl} className="images"/>
    <h3>{el.specialite}</h3>
    </div>
    

 </div>
  )
}

export default Specialite
