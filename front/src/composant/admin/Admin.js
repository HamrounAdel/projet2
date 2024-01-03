import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './admin.css'
import DoctorList from '../doctor/js/DoctorList';
import PatientList from '../patient/js/PatientList'

import { getAllDoctor } from '../../api/apiDoctor';
import Doctor from '../doctor/js/Doctor';
import ListMedec from './ListMedec';
import ListUser from './ListUser';
function Admin() {
  const doct=useSelector(state=>state.Doctor)
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [doctorList, setDoctorList] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

     const getDoc = async () => {
      try{
      const data = await getAllDoctor();
        //  console.log('users', data);
         console.log('doctors from getdoc', data.doctors);
         setDoctorList(data.doctors);
          // dispatch(setUser(data.users));
      }catch(error){
        console.error('Error fetching users:', error);
      }
       } 
    useEffect(() => {
    getDoc();
  }, []);
  console.log("this is doctors list :", doctorList);
  const doctors = Object.values( doctorList)
 
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
        <i className="fas fa-anchor" /> <span>MedAppoint.</span>
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
                    <> 
                   <ListUser/>
                    </>
                  )}
                  {selectedTab === 'Doctor' && (
                   <div > 
                     <ListMedec/>
            </div>)}      
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
