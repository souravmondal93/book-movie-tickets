import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import theatresReducer from './theatres/theatres.reducer';

export default combineReducers({
  movies: moviesReducer,
  theatres: theatresReducer
});
