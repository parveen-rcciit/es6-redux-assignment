var jQuery = require('jQuery');
import {
  getFullMovieDetails,
  saveDataTOJsonSever,
  getMovieCollectionTypes,
  getMyListOfMoviesByCollection,
  deleteMovieFromCollection
} from '../apiDataService';
import {
  createMyCollectionOfMovies,
  createMoviesByCollection,
  createMovieCollectionButton
} from './moviesCollectionView';
import {
  baseUrl
} from '../apiPath';

function moviesCollectionEventListener() {

  //adds movie to a collection
  jQuery(document).on("click", ".movie-col-type", function() {
    var movieId = jQuery(this.parentElement.previousElementSibling).attr("movieid");
    getFullMovieDetails(movieId, addMovieToCollection);

  });
  
  //remove movie from a collection
  jQuery(document).on("click", ".movie-col-del", function() {
    var movieId = jQuery(this.nextElementSibling.firstElementChild.firstElementChild).attr("movieid");
    var colType = jQuery(this).attr("id");
    deleteMovieFromCollection(baseUrl + colType + "/" + movieId, updateCollectionList);
  });
  
  
  //get movie collection types
  jQuery(document).on("click", ".collectionButton", function() {
    getMovieCollectionTypes(showMovieCollectionTypes);
  });

  //shows movies by collection
  jQuery(document).on("click", ".carousel-item-my-collection-movie", function() {
    var colType = jQuery(this).attr("id");
    getMyListOfMoviesByCollection(colType, showMoviesByCollection);
  });

  //adds textbox to capture text for new collection button
  jQuery(document).on("click", "#createNewMovieColId", function() {
    var buttonText = `<input type="text" id="newButtonId" name"buttonText">`;
    jQuery("#createNewMovieColId").before(buttonText);
  });

  //creates new collection button
  jQuery(document).on("keypress", "#newButtonId", function(e) {
    if (e.which == 13) {
      var buttonText = jQuery(this).val();
      var buttonId = buttonText.toLocaleLowerCase();
      var newColButton = `<button type="button" id="${buttonId}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${buttonText}</button>`;
      jQuery("#newButtonId").remove();
      jQuery("#createNewMovieColId").before(newColButton);
      addToCollection(buttonId, buttonText);
    }
  });


}

const showPopularMovies = (data) =>{
  createPopularMoviesList("topMoviesContainer", data);
}

const showSearchMovies = (data) => {
  createSearchMoviesList("searchMovieResult", data);
  jQuery("#searchMovieResult").removeClass("d-none");
  jQuery("#searchMovieResult").addClass("view-search-details");
}

const showMyCollectionOfMovies = (data) => {
  createMyCollectionOfMovies(data);
}

const saveDataToCollection = (collectionname) => {
  saveDataTOJsonSever(baseUrl + collectionname, data)
}

const showFullMovieDetails = (data) => {
  //jQuery("#detailsPage").removeClass("d-none");
  //jQuery("#detailsPage").addClass("view-movie-details");
  createMovieDetail("movieDetail", data);
  //jQuery("#popularMovies").addClass("d-none");
  //jQuery("#myListMovies").addClass("d-none");

}

const showMovieCollectionTypes = (data) => {
  createMovieCollectionButton("movieDetail", data);
}

const showMoviesByCollection = (data) => {
  createMoviesByCollection(data);
}

const addMovieToCollection = (data) => {
  var colType = jQuery(":focus").attr("id");
  var saveData = {
    id: data.id,
    original_language: data.original_language,
    overview: data.overview,
    poster_path: data.poster_path,
    release_date: data.release_date,
    title: data.title,
    vote_average: data.vote_average,
    genre: colType
  };
  saveDataTOJsonSever(baseUrl + colType, saveData)
}

const addToCollection = (colId, colname) => {
  var saveCol = {
    id: colId,
    name: colname
  };
  saveDataTOJsonSever(baseUrl + "genres", saveCol);
}

const updateCollectionList = (msg) => {
  //console.log(msg);
  var colType = msg.url.split("/")[3];
  getMyListOfMoviesByCollection(colType, showMoviesByCollection);
}
export {
  moviesCollectionEventListener,
  showMyCollectionOfMovies
};
