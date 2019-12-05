import { theatresActionTypes } from './theatres.types';

const INITIAL_STATE = {
  theatresList: []
};

const theatresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case theatresActionTypes.UPDATE_THEATRES_LIST:
      return {
        ...state,
        theatresList: [ ...action.payload ]
      };
    default:
      return state;
  }
};

export default theatresReducer;
