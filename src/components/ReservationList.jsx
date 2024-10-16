import { useState, useEffect } from 'react';
import { getReservations } from '../services/api';
import './ReservationList.css';

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getReservations();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  return (
    <div>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul className="reservation-list">
          {reservations.map((reservation) => (
            <li key={reservation.id} className="reservation-item">
              <p><strong>Name:</strong> {reservation.name}</p>
              <p><strong>Date:</strong> {reservation.date}</p>
              <p><strong>Time:</strong> {reservation.time}</p>
              <p><strong>Guests:</strong> {reservation.guests}</p>
              {reservation.occasion && <p><strong>Occasion:</strong> {reservation.occasion}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReservationList;
