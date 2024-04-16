import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/Movie';

export const startFetchingMovies = createAction('[Movies] Fetch Movies Start');

export const getMoviesSucces = createAction(
  '[Movies] Get Movies',
  props<{ movies: Movie[] }>()
);
