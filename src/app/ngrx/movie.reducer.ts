import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/Movie';
import { getMoviesSucces } from './movie.actions';

const initialState: Movie[] = [];

export const movieReducer = createReducer(
  initialState,

  on(getMoviesSucces, (state, action) => action.movies)
);
