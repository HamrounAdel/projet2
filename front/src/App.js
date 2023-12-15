
import './App.css';
import Admin from './composant/admin/Admin';
import RegisterDoctor from './composant/doctor/register/RegisterDoctor';
import Home from './composant/homepage/Home';
import {Routes,Route} from 'react-router-dom'
import RouteUser from './composant/privateRoute/RouteUser';
import Rdv from './composant/Rdv/Rdv'; 
import DoctorList from './composant/doctor/cardDoctor/DoctorList';
import ProfilPatient from './composant/patient/profile/ProfilPatient';
import ProfilDoctor from './composant/doctor/profile/ProfilDoctor';
import RegisterUser from './composant/patient/register/RegisterUser';
import LoginUser from './composant/patient/login/LoginUser';
import LoginDoctor from './composant/doctor/login/LoginDoctor';
import RouteDoctor from './composant/privateRoute/RouteDoctor';

function App() {
  return (
    <div >
      
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/auth' element={<RouteUser/>}/>
   <Route  path='/login/User'  element={<LoginUser/>}/>
   <Route path='/register/User' element={<RegisterUser/>}/>
    <Route path='//register/Doctor' element={<RegisterDoctor/>}/>
    <Route path='/login/Doctor' element={<LoginDoctor/>}/>
    <Route path='/admin' element={<Admin/>}/>
  
    {/* <Route path='/doct' element={<RouteDoctor/>}/>  */}
    <Route path='/patient/rdv'   element={<Rdv/>}/>
    <Route path='/patient/monprofile' element={<ProfilPatient/>}/>
    <Route path='/auth/doctor/monprofile' element={<ProfilDoctor/>}/>
    <Route path='/auth/medecines'  element={<DoctorList/>}/>
    
   </Routes>
    </div>
  );
}

export default App;
