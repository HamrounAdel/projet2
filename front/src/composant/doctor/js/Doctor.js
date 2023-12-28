import React,{useState} from 'react'
import '../css/doctor.css'
import { Link } from 'react-router-dom'

function Doctor({el}) {
  
  
  return (
    <div className='bodydoc'>
      
         <>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  
      <div className="col-md-3">
        <div className="contact-box center-version">
          <a href="#profile.html">
            <img
              alt="image"
              className="img-circle"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
            />
            <h3 className="m-b-xs">
              <strong>{`${el.name} ${el.lastName}`}</strong>
            </h3>
            <div className="font-bold">Specialiste</div>
            <address className="m-t-md">
              <strong>{el.specialite}</strong>
              <br />
              {el.adress}
              <br />
              {el.email}
              <br />
              <abbr title="Phone">Tel:</abbr> {el.phone}
            </address>
          </a>
          <div className="contact-box-footer">
            <div className="m-t-xs btn-group">
             
              <a className="btn btn-xs btn-white"    >
                <i className="fa fa-user-plus"  /><Link to={`/patient/rdv?doctorId=${el._id}&doctor=${`${el.name} ${el.lastName}`}`} >Prendre un Rendez-Vous</Link> 
              </a>
            </div>
          </div>
        </div>
      
        </div>
     
 
</>

    </div>
  )
}

export default Doctor
