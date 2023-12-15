import React from 'react'
import './specialite.css'
function Specialite({el}) {
  return (
    <div className='bodyspecialite styl'>
      <div className="container">
  <div className="wrapper">
    <div className="banner-image"> 
    <img src={el.imgUrl}/>
    </div>
    <h1>{el.specialite}</h1>
    <p>
      
    </p>
  </div>
  <div className="button-wrapper">
    <button className="btn outline">DETAILS</button>
    <button className="btn fill">BUY NOW</button>
  </div>
</div>

    </div>
  )
}

export default Specialite
