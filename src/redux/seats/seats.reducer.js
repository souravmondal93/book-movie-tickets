import { seatsActionTypes } from './seats.types';
import { updateSeatInList } from './seats.utils';

const INITIAL_STATE = {
  seatsList: [],
  selectedSeats: []
};

const seatsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case seatsActionTypes.UPDATE_SEATS_LIST:
      return {
        ...state,
        seatsList: [ ...action.payload ]
      };
    case seatsActionTypes.ADD_SEAT_FOR_BOOKING:
      return {
        ...state,
        selectedSeats: [ ...state.selectedSeats, { ...action.payload } ],
        seatsList: updateSeatInList(state.seatsList, action.payload)
      };
    case seatsActionTypes.REMOVE_SEAT_FROM_BOOKING:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(
          seat => seat.id !== action.payload.id
        ),
        seatsList: updateSeatInList(state.seatsList, action.payload)
      };
    default:
      return state;
  }
};

export default seatsReducer;
