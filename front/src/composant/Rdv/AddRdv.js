import React from 'react'
import './addRdv.css'
import { useNavigate ,useParams,useLocation} from 'react-router-dom'
import {useSelector } from 'react-redux'
import Navigation from '../navbar/Navigation'
import { useEffect, useState } from 'react'
import { getUniqueDoct} from '../../api/apiDoctor'
import {addingRdv} from '../../api/apiRDV'

function Rdv({el}) {

 const auth = useSelector(state=>state.User)
console.log('auth =>', auth)
const navigate = useNavigate()
const location = useLocation();
const doctorId = new URLSearchParams(location.search).get('doctorId');
const doctor = new URLSearchParams(location.search).get('doctor');
const {userId}=useParams()

const [doctorDetails, setDoctorDetails] = useState({});

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        if (doctorId) {
          const response = await getUniqueDoct(doctorId);
          setDoctorDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error.message);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);
console.log('doctorId',doctorId,'userId',userId)

    const [formData, setFormData] = useState({
      userId:auth._id,
      doctorId,
      user:`${auth.name} ${auth.lastName}`,
      doctor,
     status:false,
      dateRdv: '',
    });
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
       await addingRdv(formData)
        await alert('reservation ajout avec succeés')
        navigate('/auth')
      } catch (error) {
        // Handle error, show error message, etc.
        console.log(error)
        console.error('Error adding reservation:', error.message);
      }
    };
  console.log('reservation',formData)

    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login/User')
    }

  return (
    <>
    <Navigation auth={auth} logout={logout}  />
   
    <div className='rdv-container'>
    <h2>Prendre un Rendez-vous</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Reservation Date:
        <input
          type="date"
          name="dateRdv"
          value={formData.dateRdv}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Reservation</button>
    </form>
    </div>
    </>
  )
}

export default Rdv
