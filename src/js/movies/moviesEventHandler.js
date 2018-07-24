var jQuery = require('jQuery');
import {
  getPopularMovies,
  getFullMovieDetails,
  getMovieCollectionTypes
} from '../apiDataService';

import {
  createPopularMoviesList,
  createMovieDetail
} from './moviesView';

import {
  baseUrl
} from '../apiPath';

function  moviesEventListener(){
  //get movies for pagination
  jQuery(document).on("click", "#nextMovieList", function() {
    var activeElemIndex = jQuery(".carousel-item-popular-movie").index(jQuery(".carousel-item-popular-movie.active"));
    if (activeElemIndex % 13 == 0) {
      var pageNumber = parseInt(jQuery(this).attr("pageNumber"));
      pageNumber = pageNumber + 1;
      getPopularMovies(pageNumber, showPopularMovies);
      jQuery(this).attr("pageNumber", pageNumber);
    }
  });

  //show full movie details
  jQuery(document).on("click", ".carousel-item-popular-movie, .carousel-item-search-movie", function() {
    var movieId = jQuery(this).attr("id");
    getFullMovieDetails(movieId, showFullMovieDetails);
    //getMovieCollectionTypes(showMovieCollectionTypes);

  });
}

const showPopularMovies = (data) => {
  createPopularMoviesList("topMoviesContainer", data);
}

const showFullMovieDetails = (data) => {
  createMovieDetail("movieDetail", data);

}

export {
  moviesEventListener,
  showPopularMovies
};
