import {
  getPopularMovies,
  getFullMovieDetails,
} from '../apiDataService';

import store from '../stateMgmt/store';

import {
  SHOW_POPULAR_MOVIES,
  SHOW_FULL_MOVIE_DETAILS,
  FETCH_MORE_POPULAR_MOVIES_PAGINATION,
} from '../stateMgmt/actionTypes';

const jQuery = require('jquery');

const showPopularMovies = (data) => {
  store.dispatch({
    type: SHOW_POPULAR_MOVIES,
    item: data,
  });
};

const showFullMovieDetails = (data) => {
  store.dispatch({
    type: SHOW_FULL_MOVIE_DETAILS,
    item: data,
  });
};

function moviesEventListener() {
  // get movies for pagination
  jQuery(document).on('click', '#nextMovieList', () => {
    const activeElemIndex = jQuery('.carousel-item-popular-movie').index(jQuery('.carousel-item-popular-movie.active'));
    if (activeElemIndex % 13 === 0) {
      store.dispatch({
        type: FETCH_MORE_POPULAR_MOVIES_PAGINATION,
      });
      const pageNumber = store.getState().popularMoviesPageNumber;
      getPopularMovies(pageNumber, showPopularMovies);
    }
  });

  // show full movie details
  jQuery(document).on('click', '.carousel-item-popular-movie, .carousel-item-search-movie', function () {
    const movieId = jQuery(this).attr('id');
    getFullMovieDetails(movieId, showFullMovieDetails);
    // getMovieCollectionTypes(showMovieCollectionTypes);
  });
}

export {
  moviesEventListener,
  showPopularMovies,
};
