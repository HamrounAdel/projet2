
import './App.css';
import RegisterDoctor from './composant/doctor/js/RegisterDoctor';
import Home from './composant/homepage/Home';
import {Routes,Route} from 'react-router-dom'
import RouteUser from './composant/privateRoute/RouteUser';
import AddRdv from './composant/Rdv/AddRdv'; 
import DoctorList from './composant/doctor/js/DoctorList';

import ProfilDoctor from './composant/doctor/js/ProfilDoctor';
import RegisterUser from './composant/patient/js/RegisterUser';
import LoginUser from './composant/patient/js/LoginUser';
import LoginDoctor from './composant/doctor/js/LoginDoctor';
import RouteDoctor from './composant/privateRoute/RouteDoctor';
import ListRDV from './composant/Rdv/ListRDV';
import UpdateRdv from './composant/Rdv/UpdateRdv';
import ListResPat from './composant/Rdv/ListResPat';
import ListRdvDoc from './composant/Rdv/ListRdvDoc'
import Profil from './composant/patient/js/Profil';
import DoctProfil from './composant/doctor/js/DoctProfil';


function App() {
  return (
    <div >
      
   <Routes>
     {/* <Route path='/te' element={<Profil/>}/>  */}
    <Route path='/updatRdv/:id' element={<UpdateRdv/>}/>
   <Route path='/rdv/consulter' element={<ListResPat/>}/>
   <Route path='/consulter/rdvDoc' element={<ListRdvDoc/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/auth' element={<RouteUser/>}/>
   <Route  path='/login/User'  element={<LoginUser/>}/>
   <Route path='/register/User' element={<RegisterUser/>}/>
    <Route path='//register/Doctor' element={<RegisterDoctor/>}/>
    <Route path='/login/Doctor' element={<LoginDoctor/>}/>
    {/* <Route path='/admin' element={<Admin/>}/> */}
  
     <Route path='/doct' element={<RouteDoctor/>}/>  
     <Route path='/doctor/listrdv' element={<ListRDV/>}/>
     <Route path='/doctor/updatRdv' element={<UpdateRdv/>}/>
    <Route path='/patient/rdv'   element={<AddRdv/>}/>
    <Route path='/patient/monprofile' element={<Profil/>}/>
    <Route path='/doctor/monprofile' element={<DoctProfil/>}/>
    <Route path='/patient/medecines'  element={<DoctorList/>}/>
    
   </Routes>
    </div>
  );
}

export default App;
