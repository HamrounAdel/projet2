import React from 'react'
import './admin.css'

function Admin() {
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
      <a href="#" className="dashboard-nav-item">
        <i className="fas fa-home" />
        Home{" "}
      </a>
      <a href="#" className="dashboard-nav-item active">
        <i className="fas fa-tachometer-alt" /> dashboard
      </a>
     
      <div className="dashboard-nav-dropdown">
        <a
          href="#!"
          className="dashboard-nav-item dashboard-nav-dropdown-toggle"
        >
          <i className="fas fa-photo-video" /> Patient{" "}
        </a>
        
        
      </div>
      <div className="dashboard-nav-dropdown">
        <a
          href="#!"
          className="dashboard-nav-item dashboard-nav-dropdown-toggle"
        >
          <i className="fas fa-users" /> Doctor{" "}
        </a>
       
      </div>
      <div className="dashboard-nav-dropdown">
        <a
          href="#!"
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
        <div className="card">
          <div className="card-header">
            <h1>Welcome </h1>
          </div>
          <div className="card-body">
            <p>Your account type is: Administrator</p>
          </div>
        </div>
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
