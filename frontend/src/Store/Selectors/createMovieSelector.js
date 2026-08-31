import _ from 'lodash';
import { createSelector } from 'reselect';
import movieEntities from 'Movie/movieEntities';

export function createMovieSelectorForHook(movieId) {
  return createSelector(
    (state) => state.movies.itemMap,
    (state) => state.movies.items,
    (state) => state.movies.catalog.itemMap,
    (state) => state.movies.catalog.items,
    (itemMap, allMovies, catalogItemMap, catalogMovies) => {

      return movieId ? allMovies[itemMap[movieId]] ?? catalogMovies[catalogItemMap[movieId]] : undefined;
    }
  );
}

export function createMovieByEntitySelector() {
  return createSelector(
    (state, { movieId }) => movieId,
    (state, { movieEntity = movieEntities.MOVIES }) => _.get(state, movieEntity, { items: [] }),
    (movieId, movies) => {
      return _.find(movies.items, { id: movieId });
    }
  );
}

function createMovieSelector() {
  return createSelector(
    (state, { movieId }) => movieId,
    (state) => state.movies.itemMap,
    (state) => state.movies.items,
    (state) => state.movies.catalog.itemMap,
    (state) => state.movies.catalog.items,
    (movieId, itemMap, allMovies, catalogItemMap, catalogMovies) => {
      return allMovies[itemMap[movieId]] ?? catalogMovies[catalogItemMap[movieId]];
    }
  );
}

export default createMovieSelector;
