import {
  saveDataTOJsonSever,
  getMovieCollectionTypes,
  getMyListOfMoviesByCollection,
  deleteMovieFromCollection,
} from '../apiDataService';
import {
  createMovieCollectionButton,
} from './moviesCollectionView';
import {
  baseUrl,
} from '../apiPath';

import {
  SHOW_MOVIE_COLLECTION_TYPES,
  SHOW_MOVIES_BY_COLLECTION,
} from '../stateMgmt/actionTypes';

import store from '../stateMgmt/store';

const jQuery = require('jquery');

const showMyCollectionOfMovies = (data) => {
  store.dispatch({
    type: SHOW_MOVIE_COLLECTION_TYPES,
    item: data,
  });
};

const showMovieCollectionTypes = (data) => {
  createMovieCollectionButton('movieDetail', data);
};

const showMoviesByCollection = (data) => {
  store.dispatch({
    type: SHOW_MOVIES_BY_COLLECTION,
    item: data,
  });
};

const updateCollection = () => {
};

const addMovieToCollection = (data) => {
  const colType = jQuery(':focus').attr('id');
  const saveData = {
    id: data.id,
    original_language: data.original_language,
    overview: data.overview,
    poster_path: data.poster_path,
    release_date: data.release_date,
    title: data.title,
    vote_average: data.vote_average,
    genre: colType,
  };
  saveDataTOJsonSever(baseUrl + colType, saveData, updateCollection);
};

const addToCollection = (colId, colname, callback) => {
  const saveCol = {
    id: colId,
    name: colname,
  };
  saveDataTOJsonSever(`${baseUrl}genres`, saveCol, callback);
};

const updateCollectionList = () => {
  getMovieCollectionTypes(showMyCollectionOfMovies);
};
const updateCollectionListForMovies = (response) => {
  const colType = response.url.split('/')[3];
  getMyListOfMoviesByCollection(colType, showMoviesByCollection);
};

function moviesCollectionEventListener() {
  // adds movie to a collection
  jQuery(document).on('click', '.movie-col-type', () => {
    addMovieToCollection(store.getState().movieDetails);
  });

  // remove movie from a collection
  jQuery(document).on('click', '.movie-col-del', function () {
    const movieId = jQuery(this.nextElementSibling.firstElementChild.firstElementChild).attr('movieid');
    const colType = jQuery(this).attr('id');
    deleteMovieFromCollection(`${baseUrl + colType}/${movieId}`, updateCollectionListForMovies);
  });


  // get movie collection types
  jQuery(document).on('click', '.collectionButton', () => {
    getMovieCollectionTypes(showMovieCollectionTypes);
  });

  // shows movies by collection
  jQuery(document).on('click', '.carousel-item-my-collection-movie', function () {
    const colType = jQuery(this).attr('id');
    getMyListOfMoviesByCollection(colType, showMoviesByCollection);
  });

  // adds textbox to capture text for new collection button
  jQuery(document).on('click', '#createNewMovieColId', () => {
    const buttonText = '<input type="text" id="newButtonId" name"buttonText">';
    jQuery('#createNewMovieColId').before(buttonText);
  });

  // creates new collection button
  jQuery(document).on('keypress', '#newButtonId', function (e) {
    if (e.which === 13) {
      const buttonText = jQuery(this).val();
      const buttonId = buttonText.toLocaleLowerCase();
      const newColButton = `<button type="button" id="${buttonId}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${buttonText}</button>`;
      jQuery('#newButtonId').remove();
      jQuery('#createNewMovieColId').before(newColButton);
      addToCollection(buttonId, buttonText, updateCollectionList);
    }
  });
}

export {
  moviesCollectionEventListener,
  showMyCollectionOfMovies,
};
