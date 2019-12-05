import { moviesActionTypes } from './movies.types';

export const updateMoviesList = movies => ({
  type: moviesActionTypes.UPDATE_MOVIES_LIST,
  payload: movies
});
