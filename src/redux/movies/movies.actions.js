import { moviesActionTypes } from './movies.types';

export const updateMoviesList = movies => ({
  type: moviesActionTypes.UPDATE_MOVIES_LIST,
  payload: movies
});

export const setSelectedMovie = movie => ({
  type: moviesActionTypes.SET_SELECTED_MOVIE,
  payload: movie
});
