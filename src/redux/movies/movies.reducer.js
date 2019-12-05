import { moviesActionTypes } from './movies.types';

const INITIAL_STATE = {
  moviesList: []
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.UPDATE_MOVIES_LIST:
      return {
        ...state,
        moviesList: [ ...action.payload ]
      };
    default:
      return state;
  }
};

export default moviesReducer;
