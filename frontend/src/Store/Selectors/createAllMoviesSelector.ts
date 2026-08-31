import { createSelector } from 'reselect';
import AppState from 'App/State/AppState';

function createAllMoviesSelector() {
  return createSelector(
    (state: AppState) => state.movies.catalog.items,
    (movies) => movies
  );
}

export default createAllMoviesSelector;
