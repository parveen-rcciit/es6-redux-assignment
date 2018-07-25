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

import {
  SHOW_MOVIE_COLLECTION_TYPES,
  SHOW_MOVIES_BY_COLLECTION,
  ADD_MOVIE_TO_COLLECTION,
  DELETE_MOVIE_FROM_COLLECTION,
} from "../stateMgmt/actionTypes";

import {
  store
} from "../stateMgmt/store";


function moviesCollectionEventListener() {

  //adds movie to a collection
  jQuery(document).on("click", ".movie-col-type", function () {
    var movieId = jQuery(this.parentElement.previousElementSibling).attr("movieid");
    getFullMovieDetails(movieId, addMovieToCollection);

  });

  //remove movie from a collection
  jQuery(document).on("click", ".movie-col-del", function () {
    var movieId = jQuery(this.nextElementSibling.firstElementChild.firstElementChild).attr("movieid");
    var colType = jQuery(this).attr("id");
    deleteMovieFromCollection(baseUrl + colType + "/" + movieId, updateCollectionListForMovies);
  });


  //get movie collection types
  jQuery(document).on("click", ".collectionButton", function () {
    getMovieCollectionTypes(showMovieCollectionTypes);
  });

  //shows movies by collection
  jQuery(document).on("click", ".carousel-item-my-collection-movie", function () {
    var colType = jQuery(this).attr("id");
    getMyListOfMoviesByCollection(colType, showMoviesByCollection);
  });

  //adds textbox to capture text for new collection button
  jQuery(document).on("click", "#createNewMovieColId", function () {
    var buttonText = `<input type="text" id="newButtonId" name"buttonText">`;
    jQuery("#createNewMovieColId").before(buttonText);
  });

  //creates new collection button
  jQuery(document).on("keypress", "#newButtonId", function (e) {
    if (e.which == 13) {
      var buttonText = jQuery(this).val();
      var buttonId = buttonText.toLocaleLowerCase();
      var newColButton = `<button type="button" id="${buttonId}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${buttonText}</button>`;
      jQuery("#newButtonId").remove();
      jQuery("#createNewMovieColId").before(newColButton);
      addToCollection(buttonId, buttonText, updateCollectionList);
    }
  });


}


const showMyCollectionOfMovies = (data) => {
  store.dispatch({
    type: SHOW_MOVIE_COLLECTION_TYPES,
    item: data
  });
}

const saveDataToCollection = (collectionname) => {
  saveDataTOJsonSever(baseUrl + collectionname, data)
}

const showMovieCollectionTypes = (data) => {
  createMovieCollectionButton("movieDetail", data);
}

const showMoviesByCollection = (data) => {
  store.dispatch({
    type: SHOW_MOVIES_BY_COLLECTION,
    item: data
  });
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
  saveDataTOJsonSever(baseUrl + colType, saveData, updateCollection)
}

const addToCollection = (colId, colname, callback) => {
  var saveCol = {
    id: colId,
    name: colname
  };
  saveDataTOJsonSever(baseUrl + "genres", saveCol, callback);
}

const updateCollection = (response) => {
  console.log(response);
}

const updateCollectionList = (response) => {
  getMovieCollectionTypes(showMyCollectionOfMovies);
}
const updateCollectionListForMovies = (response) => {
  store.dispatch({type: DELETE_MOVIE_FROM_COLLECTION, item: response});
  /*var colType = response.url.split("/")[3];
  getMyListOfMoviesByCollection(colType, showMoviesByCollection);*/
}
export {
  moviesCollectionEventListener,
  showMyCollectionOfMovies
};
