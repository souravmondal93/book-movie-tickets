import { moviesActionTypes } from './movies.types';

const INITIAL_STATE = {
  moviesList: [],
  selectedMovie: null
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.UPDATE_MOVIES_LIST:
      return {
        ...state,
        moviesList: [ ...action.payload ]
      };
    case moviesActionTypes.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    default:
      return state;
  }
};

export default moviesReducer;
