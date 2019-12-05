import { seatsActionTypes } from './seats.types';

export const updateSeatsList = seats => ({
  type: seatsActionTypes.UPDATE_SEATS_LIST,
  payload: seats
});

export const addSeatForBooking = seat => ({
  type: seatsActionTypes.ADD_SEAT_FOR_BOOKING,
  payload: seat
});

export const removeSeatFromBooking = seat => ({
  type: seatsActionTypes.REMOVE_SEAT_FROM_BOOKING,
  payload: seat
});
