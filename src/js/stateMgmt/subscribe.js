import store from './store';

import {
  SHOW_POPULAR_MOVIES,
  SHOW_FULL_MOVIE_DETAILS,
  SHOW_MOVIE_COLLECTION_TYPES,
  SHOW_MOVIES_BY_COLLECTION,
  SHOW_SEARCH_MOVIE_RESULTS,
} from './actionTypes';

import { createPopularMoviesList, createMovieDetail } from '../movies/moviesView';

import { createMyCollectionOfMovies, createMoviesByCollection } from '../movieCollection/moviesCollectionView';

import { createSearchMoviesList } from '../searchMovies/searchMoviesView';

const jQuery = require('jquery');

const render = () => {
  const currState = store.getState();
  switch (currState.action) {
    case SHOW_POPULAR_MOVIES:
      createPopularMoviesList('topMoviesContainer', currState.movies);
      break;
    case SHOW_MOVIE_COLLECTION_TYPES:
      createMyCollectionOfMovies(currState.colTypes);
      break;
    case SHOW_FULL_MOVIE_DETAILS:
      createMovieDetail('movieDetail', currState.movieDetails);
      break;
    case SHOW_SEARCH_MOVIE_RESULTS:
      createSearchMoviesList('searchMovieResult', currState.searchMovieDetails);
      jQuery('#searchMovieResult').removeClass('d-none');
      jQuery('#searchMovieResult').addClass('view-search-details');
      break;
    case SHOW_MOVIES_BY_COLLECTION:
      createMoviesByCollection(currState.moviebyColList);
      break;
    default:
      break;
  }
};

function subscribeStore() {
  store.subscribe(render);
}

export default subscribeStore;
