import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
function Navigation({auth,logout,logoutdoct,doct}) {
  return (
    <div className='bodynav'>
    <nav className="nav">
    
    {auth && auth.role === "Admin" ?(<>
      <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title">
      <span>Espace:{auth.role}</span>
      </div>
    </div>
    
    <ul class="nav-list">
     
      
        <li><a ><Link to='/auth'>Acceuil</Link></a></li>
        <li className='dropdown'><a >{auth.email}</a> 
         <div className='dropdown-content'>
         <ul>
          <li><a><Link to=''>Mon Profil</Link></a></li>
          <li><a  onClick={()=>logout()}>Deconnecter</a></li>
         </ul>
         </div>
         </li>
         </ul>
      </>) : auth && auth.role==="Patient"?(<>
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
      <div className="nav-title">
      <span>Espace:{auth.role}</span>
      </div>
    </div>
    
    <ul class="nav-list">
      <li><a ><Link to='/auth'>Acceuil</Link></a></li>
     <li><a  ><Link to={`/rdv/consulter?userId=${auth._id}`}>Consulter mon Rendez-vous</Link></a></li> 
      
      <li><a ><Link to='/patient/medecines'>Medecines</Link></a></li>
      <li className='dropdown'><a >{auth.email}</a> 
         <div className='dropdown-content'>
         <ul>
          <li><a><Link to='/patient/monprofile'>Mon Profil</Link></a></li>
          <li><a  onClick={()=>logout()}>Deconnecter</a></li>
         </ul>
         </div>
         </li>
        </ul>
      </>):doct &&
        (<>
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">

      <div className="nav-title">
      <span>Espace:Doctor</span>
      </div>
    </div>
    
    <ul class="nav-list">
        <li><a ><Link to='/doct'>Acceuil</Link></a></li>
        <li><a ><Link to={`/consulter/rdvDoc?doctorId=${doct._id}`}>consulter les RDVs</Link></a></li>
        <li><a ><Link to=''>consulter mes patient</Link></a></li>
        <li className='dropdown'><a >{doct.email}</a> 
         <div className='dropdown-content'>
         <ul>
          <li><a><Link to='/doctor/monprofile'>Mon Profil</Link></a></li>
           <li><a  onClick={()=>logoutdoct()}>Deconnecter</a></li>
         </ul>
          </div>
         </li>
         </ul>
         </>)
      }

         
   
  
  </nav>
  </div>
  )
}

export default Navigation