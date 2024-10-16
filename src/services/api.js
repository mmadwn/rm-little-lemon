// This is a mock API service. In a real application, you would replace this with actual API calls.

let reservations = [];

export const createReservation = async (reservationData) => {
  const newReservation = {
    id: Date.now(),
    ...reservationData,
  };
  reservations.push(newReservation);
  return newReservation;
};

export const getReservations = async () => {
  return reservations;
};
