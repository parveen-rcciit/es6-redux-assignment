var jQuery = require('jQuery');
import {
  getSearchMovieResults
} from '../apiDataService'
import {
  createSearchMoviesList
} from './searchMoviesView'
import {
  baseUrl
} from '../apiPath'

function searchMovieEventListener() {
  //display search results
  jQuery(document).on("click", "#searchMovieButton", function() {
    var movieName = jQuery('#movieName').val();
    getSearchMovieResults(movieName, 1, showSearchMovies);
    return false;
  });

  //get search movie results for pagination
  jQuery(document).on("click", "#nextSearchMovieList", function() {
    var activeElemIndex = jQuery(".carousel-item-search-movie").index(jQuery(".carousel-item-search-movie.active"));
    if (activeElemIndex % 13 == 0) {
      var pageNumber = parseInt(jQuery(this).attr("pageNumber"));
      pageNumber = pageNumber + 1;
      var movieName = jQuery('#movieName').val();
      getSearchMovieResults(movieName, pageNumber, showSearchMovies);
      jQuery(this).attr("pageNumber", pageNumber);
    }
  });
}
const showSearchMovies = (data) => {
  createSearchMoviesList("searchMovieResult", data);
  jQuery("#searchMovieResult").removeClass("d-none");
  jQuery("#searchMovieResult").addClass("view-search-details");
}

export {
  searchMovieEventListener,
  showSearchMovies
};
