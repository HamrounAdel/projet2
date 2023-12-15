import React from 'react'
import Specialite from './Specialite'

function ListSpecialite() {
  const data=[
    {specialite:"pediatre",
       imgUrl:"https://medical-rh.com/wp-content/uploads/pediatre-medical-rh.jpg"
      },
      {specialite:"hbhjb",
      imgUrl:"https://medical-rh.com/wp-content/uploads/pediatre-medical-rh.jpg"
     },
     {specialite:"hjbk",
     imgUrl:"https://medical-rh.com/wp-content/uploads/pediatre-medical-rh.jpg"
    },
    {specialite:"dentiste",
    imgUrl:"https://medical-rh.com/wp-content/uploads/pediatre-medical-rh.jpg"
   },

  ]
  return (
    <div >
      {data.map(el=><Specialite el={el}/>)}
    </div>
  )
}

export default ListSpecialite
