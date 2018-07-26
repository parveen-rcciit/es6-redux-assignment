import {
  createStore
} from 'redux';
import {
  SHOW_POPULAR_MOVIES,
  SHOW_POPULAR_MOVIES_SUCCESS,
  SHOW_POPULAR_MOVIES_FAILURE,
  SHOW_FULL_MOVIE_DETAILS,
  SHOW_MOVIE_COLLECTION_TYPES,
  SHOW_MOVIES_BY_COLLECTION,
  SHOW_SEARCH_MOVIE_RESULTS
} from "./actionTypes";

import {
  getPopularMovies,
  getMovieCollectionTypes
} from '../apiDataService';
import {
  createPopularMoviesList,
  createMovieDetail
} from '../movies/moviesView';

const initialState = {
  movies: [],
  colTypes: [],
  movieDetails: {},
  searchMovieDetails: [],
  moviebyColList: [],
  action: ""
};

//reducer
const movieAppReducer = (state = initialState, action) => {
  //console.log("inside reducer");
  switch (action.type) {
    case SHOW_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.item,
        action: action.type
      };
    case SHOW_FULL_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.item,
        action: action.type
      };
    case SHOW_MOVIE_COLLECTION_TYPES:
      return { ...state,
        colTypes: action.item,
        action: action.type
      };
    case SHOW_MOVIES_BY_COLLECTION:
      return { ...state,
        moviebyColList: action.item,
        action: action.type
      };
    case SHOW_SEARCH_MOVIE_RESULTS:
      return { ...state,
        searchMovieDetails: action.item,
        action: action.type
      };
    default:
      return state;
  }
}

//store
const store = createStore(movieAppReducer, {
  movies: [],
  colTypes: [],
  movieDetails: {},
  searchMovieDetails: [],
  moviebyColList: [],
  action: ""
});

export {
  store
};
