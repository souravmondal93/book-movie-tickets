import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import theatresReducer from './theatres/theatres.reducer';
import seatsReducer from './seats/seats.reducer';

export default combineReducers({
  movies: moviesReducer,
  theatres: theatresReducer,
  seats: seatsReducer
});
