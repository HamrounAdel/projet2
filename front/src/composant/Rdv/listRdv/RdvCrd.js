import React from 'react'

function RdvCrd({el}) {
  return (
    <div>
      {el.nameDoctor}
      {el.specialite}
      {el.namePatient}
      {el.dateRdv}
    </div>
  )
}

export default RdvCrd
