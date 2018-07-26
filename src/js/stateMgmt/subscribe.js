var jQuery = require('jQuery');
import {
  store
} from "./store";
import {
  SHOW_POPULAR_MOVIES,
  SHOW_FULL_MOVIE_DETAILS,
  SHOW_MOVIE_COLLECTION_TYPES,
  SHOW_MOVIES_BY_COLLECTION,
  SHOW_SEARCH_MOVIE_RESULTS
} from "./actionTypes";

import {
  createPopularMoviesList,
  createMovieDetail
} from '../movies/moviesView';

import {
  showMoviesByCollection
} from '../movieCollection/moviesCollectionEventHandler';

import {
  createMyCollectionOfMovies,
  createMoviesByCollection,
  createMovieCollectionButton
} from '../movieCollection/moviesCollectionView';

import {
  createSearchMoviesList
} from '../searchMovies/searchMoviesView';

import {
  getMyListOfMoviesByCollection
} from '../apiDataService';

function subscribeStore() {
  store.subscribe(render);
}

const render = () => {
  const currState = store.getState();
  switch (currState.action) {
    case SHOW_POPULAR_MOVIES:
      createPopularMoviesList("topMoviesContainer", currState.movies);
    case SHOW_MOVIE_COLLECTION_TYPES:
      createMyCollectionOfMovies(currState.colTypes);
    case SHOW_FULL_MOVIE_DETAILS:
      createMovieDetail("movieDetail", currState.movieDetails);
    case SHOW_SEARCH_MOVIE_RESULTS:
      createSearchMoviesList("searchMovieResult", currState.searchMovieDetails);
      jQuery("#searchMovieResult").removeClass("d-none");
      jQuery("#searchMovieResult").addClass("view-search-details");
    case SHOW_MOVIES_BY_COLLECTION:
      createMoviesByCollection(currState.moviebyColList);
    default:
      return null;
  }
  console.log("exiting render");
}
export {
  subscribeStore
};
