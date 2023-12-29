import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navigation from '../navbar/Navigation';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
import {patchRdv,getRdvByDoctorId} from '../../api/apiRDV'
const UpdateRdv = () => {
  const doct = useSelector(state => state.Doctor)
 const rdv=useSelector(state=>state.RDV)
  const location = useLocation();
const doctorId = new URLSearchParams(location.search).get('doctorId');
console.log('doctorId',doctorId)
const {id} =useParams()
 console.log('rdvid',id)
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    status: "Pending", // Default value, change it according to your data model
  });
    console.log('formData',formData)


const fetchReservationData = async (doctorId) => {
  try {
    const response = await getRdvByDoctorId(doctorId)
    
    setFormData({
      status : response.status,
    });
  } catch (error) {
    console.log(error)
    console.error('Error fetching reservation data:', error.message);
  }
};
  useEffect(() => {
   
    fetchReservationData();
  }, [doctorId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await patchRdv(id,formData);

      // Handle successful response, update UI, etc.
      console.log('Reservation updated:', formData);
      navigate('/consulter/rdvDoc')
    } catch (error) {
      // Handle error, show error message, etc.
      console.error('Error updating reservation:', error.message);
    }
   
  };
  const logoutdoct = () => {
    localStorage.removeItem('token');
    navigate('/login/Doctor');
  };


  return (
    <div>
     <Navigation  doct={doct} logoutdoct={logoutdoct}/>
     <h2> Update Reservation</h2>
      <form onSubmit={handleSubmit}>
      
        <label>
          Reponse de Rendez-Vous:
          <select
          name="status"
            value={formData.status }
            onChange={handleChange}>
              <option value="Pending">Pending</option>
                 <option value="Accepted">accepted</option>
                 
          </select>
        </label>
        <button type="submit" >Update Reservation</button>
      </form>
    </div>
  );
};

export default UpdateRdv;