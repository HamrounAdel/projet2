import React from 'react';
import axios from 'axios';

const DeleteRdv = ({ userId, reservationId }) => {
  const handleDeleteReservation = async () => {
    try {
      await axios.delete(`http://localhost:4000/reservation/${userId}/${reservationId}`);
      // You may want to refresh the reservation list here
    } catch (error) {
      console.error('Error deleting reservation:', error.message);
    }
  };

  return (
    <div>
      <h2>Delete Reservation</h2>
      <button onClick={handleDeleteReservation}>Delete Reservation</button>
    </div>
  );
};

export default DeleteRdv;