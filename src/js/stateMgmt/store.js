import {
  createStore,
} from 'redux';
import {
  SHOW_POPULAR_MOVIES,
  SHOW_FULL_MOVIE_DETAILS,
  SHOW_MOVIE_COLLECTION_TYPES,
  SHOW_MOVIES_BY_COLLECTION,
  SHOW_SEARCH_MOVIE_RESULTS,
  FETCH_MORE_POPULAR_MOVIES_PAGINATION,
  FETCH_MORE_SEARCH_MOVIES_PAGINATION,
} from './actionTypes';

const initialState = {
  movies: [],
  colTypes: [],
  movieDetails: {},
  searchMovieDetails: [],
  moviebyColList: [],
  popularMoviesPageNumber: 1,
  searchMoviesPageNumber: 1,
  action: '',
};

// reducer
const movieAppReducer = (state = initialState, action) => {
  // console.log("inside reducer");
  switch (action.type) {
    case SHOW_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.item,
        action: action.type,
      };
    case SHOW_FULL_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.item,
        action: action.type,
      };
    case SHOW_MOVIE_COLLECTION_TYPES:
      return {
        ...state,
        colTypes: action.item,
        action: action.type,
      };
    case SHOW_MOVIES_BY_COLLECTION:
      return {
        ...state,
        moviebyColList: action.item,
        action: action.type,
      };
    case SHOW_SEARCH_MOVIE_RESULTS:
      return {
        ...state,
        searchMovieDetails: action.item,
        action: action.type,
      };
    case FETCH_MORE_POPULAR_MOVIES_PAGINATION:
      return {
        ...state,
        popularMoviesPageNumber: state.popularMoviesPageNumber + 1,
        action: action.type,
      };
    case FETCH_MORE_SEARCH_MOVIES_PAGINATION:
      return {
        ...state,
        searchMoviesPageNumber: state.searchMoviesPageNumber + 1,
        action: action.type,
      };
    default:
      return state;
  }
};

// store
const store = createStore(movieAppReducer, {
  movies: [],
  colTypes: [],
  movieDetails: {},
  searchMovieDetails: [],
  moviebyColList: [],
  popularMoviesPageNumber: 1,
  searchMoviesPageNumber: 1,
  action: '',
});

export default store;
