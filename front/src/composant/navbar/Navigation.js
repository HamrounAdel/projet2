import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
function Navigation({auth,logout}) {
  return (
    <div className='bodynav'>
    <nav className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div class="nav-title">
      <span>Espace:{auth.role}</span>
      </div>
    </div>
    
    <ul class="nav-list">
     
      {auth.role==="Admin"?(<>
        <li><a ><Link to=''>Acceuil</Link></a></li>
        <li className='dropdown'><a >{auth.email}</a> 
         <div className='dropdown-content'>
         <ul>
          <li><a><Link to=''>Mon Profil</Link></a></li>
          <li><a  onClick={()=>logout()}>Deconnecter</a></li>
         </ul>
         </div>
         </li>

      </>) :auth.role==="Patient"?(<>

      <li><a ><Link to='/auth'>Acceuil</Link></a></li>
      <li><a  ><Link to='/patient/rdv'>Prendre un RDV</Link></a></li>
      
      <li><a ><Link to='/patient/medecines'>Medecines</Link></a></li>
      <li className='dropdown'><a >{auth.email}</a> 
         <div className='dropdown-content'>
         <ul>
          <li><a><Link to='/patient/monprofile'>Mon Profil</Link></a></li>
          <li><a  onClick={()=>logout()}>Deconnecter</a></li>
         </ul>
         </div>
         </li>

      </>):null
        // (<><li><a ><Link to='/doct'>Acceuil</Link></a></li>
        // <li><a ><Link to=''>consulter les RDVs</Link></a></li>
        // <li><a ><Link to=''>consulter mes patient</Link></a></li>
        // <li className='dropdown'><a >{doct.email}</a> 
        //  <div className='dropdown-content'>
        //  <ul>
        //   <li><a><Link to='/doct/doctor/monprofile'>Mon Profil</Link></a></li>
        //   <li><a  onClick={()=>logout()}>Deconnecter</a></li>
        //  </ul>
        //  </div>
        //  </li>
        // </>)
      }

         
    </ul>
  
  </nav>
  </div>
  )
}

export default Navigation