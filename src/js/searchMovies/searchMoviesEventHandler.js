import {
  getSearchMovieResults,
} from '../apiDataService';

import store from '../stateMgmt/store';

import {
  SHOW_SEARCH_MOVIE_RESULTS,
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
  jQuery(document).on('click', '#nextSearchMovieList', function () {
    const activeElemIndex = jQuery('.carousel-item-search-movie').index(jQuery('.carousel-item-search-movie.active'));
    if (activeElemIndex % 13 === 0) {
      let pageNumber = parseInt(jQuery(this).attr('pageNumber'), 10);
      pageNumber += 1;
      const movieName = jQuery('#movieName').val();
      getSearchMovieResults(movieName, pageNumber, showSearchMovies);
      jQuery(this).attr('pageNumber', pageNumber);
    }
  });
}

export {
  searchMovieEventListener,
  showSearchMovies,
};
