import React ,{useState} from 'react'
import './admin.css'
import DoctorList from '../doctor/js/DoctorList';
import PatientList from '../patient/js/PatientList'
function Admin() {
  
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const handleTabClick = (tab) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
  };
  return (
    <div>

    <div className='htmladmin'>
      <div className='bodyadmin'>
    <div className="dashboard">
  <div className="dashboard-nav">
    <header>
      <a href="#!" className="menu-toggle">
        <i className="fas fa-bars" />
      </a>
      <a href="#" className="brand-logo">
        <i className="fas fa-anchor" /> <span>Rendez-vous</span>
      </a>
    </header>
    <nav className="dashboard-nav-list">
      <a href="#" onClick={()=> handleTabClick('home')}
      className="dashboard-nav-item">
        <i className="fas fa-home" />
        Home{" "}
      </a>
      <a onClick={()=> handleTabClick('dashboard')} className="dashboard-nav-item active">
        <i className="fas fa-tachometer-alt"  /> dashboard
      </a>
     
      <div className="dashboard-nav-dropdown">
        <a
          onClick={()=> handleTabClick('Patient')}
          className="dashboard-nav-item dashboard-nav-dropdown-toggle"
        >
          <i className="fas fa-photo-video" /> Patient{" "}
        </a>
        
        
      </div>
      <div className="dashboard-nav-dropdown">
        <a
          onClick={()=>handleTabClick('Doctor')}
          className="dashboard-nav-item dashboard-nav-dropdown-toggle"
        >
          <i className="fas fa-users" /> Doctor{" "}
        </a>
       
      </div>
      <div className="dashboard-nav-dropdown">
        <a
          href="#!" onClick={()=>handleTabClick('RDV medicaux')}
          className="dashboard-nav-item dashboard-nav-dropdown-toggle"
        >
          <i className="fas fa-money-check-alt" /> RDV medicaux{" "}
        </a>
       
      </div>
     
      <div className="nav-item-divider" />
      <a href="/" className="dashboard-nav-item">
        <i className="fas fa-sign-out-alt" /> Logout{" "}
      </a>
    </nav>
  </div>
  <div className="dashboard-app">
    <header className="">
      
      <a href="#!" className="menu-toggle">
        <i className="fas fa-bars" />
      </a>
    </header>
    <div className="dashboard-content">
      <div className="container">
        {/* <div className="card">
          <div className="card-header">
            <h1>Welcome </h1>
          </div>
          <div className="card-body">
            <p>Your account type is: Administrator</p> */}
            {selectedTab === 'home' && (
                    <p>home </p>
                  )}
            {selectedTab === 'dashboard' && (
                    <p>Dashboard Content Goes Here</p>
                  )}
                  {selectedTab === 'Patient' && (
                    <> liste de patients
                    <PatientList/>
                    </>
                  )}
                  {selectedTab === 'Doctor' && (
                   <> liste de doctors
                   <table>{}</table></>
            
                  )}
                   {selectedTab === 'RDV medicaux' && (
                    <p>RDV medicaux</p>
                  )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Admin
