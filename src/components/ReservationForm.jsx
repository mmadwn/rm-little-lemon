import { useState } from 'react';
import { createReservation } from '../services/api';
import './ReservationForm.css';

function ReservationForm() {
  const initialFormData = {
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: name === 'guests' ? (parseInt(value, 10) || '') : value 
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setApiError('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'Number of guests must be at least 1';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await createReservation({
        ...formData,
        guests: parseInt(formData.guests, 10)
      });
      setFormData(initialFormData);
      setErrors({});
      setApiError('');
    } catch (error) {
      setApiError('Error creating reservation. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <span className="error">{errors.time}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
        />
        {errors.guests && <span className="error">{errors.guests}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date">Date Night</option>
          <option value="business">Business Meal</option>
          <option value="other">Other</option>
        </select>
      </div>
      {apiError && <div className="error">{apiError}</div>}
      <button type="submit">Make Reservation</button>
    </form>
  );
}

export default ReservationForm;
