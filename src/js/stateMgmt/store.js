import {
    createStore
} from 'redux';
import {
    GET_POPULAR_MOVIES,
    GET_FULL_MOVIE_DETAILS,
    GET_MOVIE_COLLECTION_TYPES,
    GET_MY_LIST_OF_MOVIES_BY_COLLECTION,
    CREATE_NEW_COLLECTION_BUTTON,
    CREATE_NEW_MOVIE_COLLECTION,
    ADD_MOVIE_TO_COLLECTION,
    SHOW_FULL_MOVIE_DETAILS,
    SHOW_MOVIE_COLLECTION_TYPES,
    SHOW_MOVIES_BY_COLLECTION
} from "./actionTypes";
import {
  getPopularMovies,
  getMyListOfMoviesByCollection,
  getMovieCollectionTypes,
  getSearchMovieResults
} from './apiDataService';

import {
   showPopularMovies 
} from './index';
const movieAppReducer = (state={}, action) => {
    switch (action.type) {
        case "GET_POPULAR_MOVIES":
            getPopularMovies(action.pageNumber);
            break;
        case "GET_FULL_MOVIE_DETAILS":
            getFullMovieDetails(action.movieId, addMovieToCollection);
            break;
        case "GET_FULL_MOVIE_DETAILS_FOR_COLLECTION":
            getFullMovieDetails(action.movieId, showFullMovieDetails);
            break;
        case "GET_MOVIE_COLLECTION_TYPES":
            getMovieCollectionTypes(showMovieCollectionTypes);
            break;
        case "GET_MY_LIST_OF_MOVIES_BY_COLLECTION":
            getMyListOfMoviesByCollection(action.colType, showMoviesByCollection);
            break;
        case "CREATE_NEW_MOVIE_COLLECTION":
            //getFullMovieDetails(action.movieId, addMovieToCollection);
            break;
        case "ADD_MOVIE_TO_COLLECTION":
            //getFullMovieDetails(action.movieId, addMovieToCollection);
            break;
        case "SHOW_FULL_MOVIE_DETAILS":
            //getFullMovieDetails(action.movieId, addMovieToCollection);
            break;
        case "SHOW_MOVIE_COLLECTION_TYPES":
            //getFullMovieDetails(action.movieId, addMovieToCollection);
            break;
        case "SHOW_MOVIES_BY_COLLECTION":
            //getFullMovieDetails(action.movieId, addMovieToCollection);
            break;
        default:
            return state;
    }
}
         
const store = createStore(movieAppReducer);

store.subscribe(() => {
    console.log("store.getState() = "+store.getState());
});
   

export {
    store
};
