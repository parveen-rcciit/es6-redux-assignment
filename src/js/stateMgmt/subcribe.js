import {
    store
} from "./store";

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



store.subscribe = () => {
    console.log(store.getState());
    let action.type = null;
    switch (action.type) {
        case "GET_POPULAR_MOVIES":
            console.log(store.getState());
            showPopularMovies(data);
            break;
        case "GET_FULL_MOVIE_DETAILS":
            addMovieToCollection(data)
            break;
        case "GET_FULL_MOVIE_DETAILS_FOR_COLLECTION":
            showFullMovieDetails(data);
            break;
        case "GET_MOVIE_COLLECTION_TYPES":
            showMovieCollectionTypes(data);
            break;
        case "GET_MY_LIST_OF_MOVIES_BY_COLLECTION":
            showMoviesByCollection(data);
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
            return null;
    }
}
