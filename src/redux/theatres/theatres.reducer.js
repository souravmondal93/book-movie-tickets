import { theatresActionTypes } from './theatres.types';

const INITIAL_STATE = {
  theatresList: [],
  selectedTheatre: null,
  selectedTheatreTime: null
};

const theatresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case theatresActionTypes.UPDATE_THEATRES_LIST:
      return {
        ...state,
        theatresList: [ ...action.payload ]
      };
    case theatresActionTypes.SET_SELECTED_THEATRE:
        return {
          ...state,
          selectedTheatre: { ...action.payload }
        };
    case theatresActionTypes.SET_SELECTED_THEATRE_TIME:
        return {
          ...state,
          selectedTheatreTime: { ...action.payload }
        };
    default:
      return state;
  }
};

export default theatresReducer;
