import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReservationForm from './ReservationForm';
import { createReservation } from '../services/api';

// Mock the API call
vi.mock('../services/api', () => ({
  createReservation: vi.fn(),
}));

describe('ReservationForm', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders ReservationForm with all required fields', () => {
    render(<ReservationForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make reservation/i })).toBeInTheDocument();
  });

  it('validates form submission with empty fields', async () => {
    render(<ReservationForm />);
    
    fireEvent.click(screen.getByRole('button', { name: /make reservation/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });

    expect(createReservation).not.toHaveBeenCalled();
  });

  it('allows form submission with valid data', async () => {
    render(<ReservationForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-06-01' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });
    
    fireEvent.click(screen.getByRole('button', { name: /make reservation/i }));
    
    await waitFor(() => {
      expect(createReservation).toHaveBeenCalledWith({
        name: 'John Doe',
        date: '2023-06-01',
        time: '19:00',
        guests: 4,
        occasion: 'birthday',
      });
    });

    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
  });

  it('displays error message on API failure', async () => {
    createReservation.mockRejectedValue(new Error('API Error'));

    render(<ReservationForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-06-01' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    
    fireEvent.click(screen.getByRole('button', { name: /make reservation/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/error creating reservation. please try again./i)).toBeInTheDocument();
    });
  });

  it('validates number of guests', async () => {
    render(<ReservationForm />);
    
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
    fireEvent.click(screen.getByRole('button', { name: /make reservation/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/number of guests must be at least 1/i)).toBeInTheDocument();
    });
  });
});
