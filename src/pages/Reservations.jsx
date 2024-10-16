import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';
import './Reservations.css';

function Reservations() {
  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <div className="reservations-container">
        <div className="reservation-form-container">
          <h2>Make a Reservation</h2>
          <ReservationForm />
        </div>
        <div className="reservation-list-container">
          <h2>Current Reservations</h2>
          <ReservationList />
        </div>
      </div>
    </div>
  );
}

export default Reservations;
