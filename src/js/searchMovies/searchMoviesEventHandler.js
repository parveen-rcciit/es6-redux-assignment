var jQuery = require('jQuery');
import {
  getFullMovieDetails,
  getSearchMovieResults
} from '../apiDataService'
import {
  createMovieDetail,
  createSearchMoviesList
} from './searchMoviesView'
import {
  baseUrl
} from '../apiPath'

function searchMovieEventListener() {
  //display search results
  jQuery(document).on("click", "#searchMovieButton", function () {
    var movieName = jQuery('#movieName').val();
    getSearchMovieResults(movieName, 1, showSearchMovies);
    return false;
  });

  //get search movie results for pagination
  jQuery(document).on("click", "#nextSearchMovieList", function () {
    var activeElemIndex = jQuery(".carousel-item-search-movie").index(jQuery(".carousel-item-search-movie.active"));
    if (activeElemIndex % 13 == 0) {
      var pageNumber = parseInt(jQuery(this).attr("pageNumber"));
      pageNumber = pageNumber + 1;
      var movieName = jQuery('#movieName').val();
      getSearchMovieResults(movieName, pageNumber, showSearchMovies);
      jQuery(this).attr("pageNumber", pageNumber);
    }
  });
  //shows full movie details
  jQuery(document).on("click", ".carousel-item-popular-movie, .carousel-item-search-movie", function () {
    var movieId = jQuery(this).attr("id");
    getFullMovieDetails(movieId, showFullMovieDetails);
    //getMovieCollectionTypes(showMovieCollectionTypes);
  });
}
function showSearchMovies(data) {
  createSearchMoviesList("searchMovieResult", data);
  jQuery("#searchMovieResult").removeClass("d-none");
  jQuery("#searchMovieResult").addClass("view-search-details");
}

function showFullMovieDetails(data) {
  //jQuery("#detailsPage").removeClass("d-none");
  //jQuery("#detailsPage").addClass("view-movie-details");
  createMovieDetail("movieDetail", data);
  //jQuery("#popularMovies").addClass("d-none");
  //jQuery("#myListMovies").addClass("d-none");

}
export {
  searchMovieEventListener,
  showSearchMovies
};
