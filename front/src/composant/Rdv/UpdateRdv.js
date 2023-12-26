import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
const UpdateRdv = () => {
  // const  {doctorId} =useParams()
  const location = useLocation();
const doctorId = new URLSearchParams(location.search).get('doctorId');
  const  {idRdv} =useParams()
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    accepted: false, // Default value, change it according to your data model
  });
console.log('formData',formData)
const fetchReservationData = async () => {
  try {
    const response = await axios.get(`http://localhost:5003/RDV/getbyDoctor/${doctorId}`);
    const { accepted } = response.data;
    setFormData({
      accepted,
    });
  } catch (error) {
    console.log(error)
    console.error('Error fetching reservation data:', error.message);
  }
};
  useEffect(() => {
    // Fetch the current reservation data and populate the form
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
      const response = await axios.patch(`http://localhost:5003/RDV/updatrdv/${idRdv}`, formData);

      // Handle successful response, update UI, etc.
      console.log('Reservation updated:', response.data);
    } catch (error) {
      // Handle error, show error message, etc.
      console.error('Error updating reservation:', error.message);
    }
   
  };

  return (
    <div>
      <h2>Update Reservation</h2>
      <label> </label>
      <form onSubmit={handleSubmit}>
        <label>
          Accepted:
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Reservation</button>
      </form>
    </div>
  );
};

export default UpdateRdv;