import { theatresActionTypes } from './theatres.types';

export const updateTheatresList = theatreList => ({
  type: theatresActionTypes.UPDATE_THEATRES_LIST,
  payload: theatreList
});

export const setSelectedTheatre = theatre => ({
  type: theatresActionTypes.SET_SELECTED_THEATRE,
  payload: theatre
});

export const setSelectedTheatreTime = time => ({
  type: theatresActionTypes.SET_SELECTED_THEATRE_TIME,
  payload: time
});


