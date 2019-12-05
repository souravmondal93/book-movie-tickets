import { theatresActionTypes } from './theatres.types';

export const updateTheatresList = theatre => ({
  type: theatresActionTypes.UPDATE_THEATRES_LIST,
  payload: theatre
});
