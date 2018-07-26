import {
  getSearchMovieResults,
} from '../apiDataService';

import store from '../stateMgmt/store';

import {
  SHOW_SEARCH_MOVIE_RESULTS,
  FETCH_MORE_SEARCH_MOVIES_PAGINATION,
} from '../stateMgmt/actionTypes';

const jQuery = require('jquery');

const showSearchMovies = (data) => {
  store.dispatch({
    type: SHOW_SEARCH_MOVIE_RESULTS,
    item: data,
  });
};

function searchMovieEventListener() {
  // display search results
  jQuery(document).on('click', '#searchMovieButton', () => {
    const movieName = jQuery('#movieName').val();
    getSearchMovieResults(movieName, 1, showSearchMovies);
    return false;
  });


  // get search movie results for pagination
  jQuery(document).on('click', '#nextSearchMovieList', () => {
    const activeElemIndex = jQuery('.carousel-item-search-movie').index(jQuery('.carousel-item-search-movie.active'));
    if (activeElemIndex % 13 === 0) {
      store.dispatch({
        type: FETCH_MORE_SEARCH_MOVIES_PAGINATION,
      });
      const pageNumber = store.getState().searchMoviesPageNumber;
      const movieName = jQuery('#movieName').val();
      getSearchMovieResults(movieName, pageNumber, showSearchMovies);
    }
  });
}

export {
  searchMovieEventListener,
  showSearchMovies,
};
