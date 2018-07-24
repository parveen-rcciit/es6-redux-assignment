let headerJson = {
    method: "get",
    "Access-Control-Allow-Origin": "*",
    mode: "cors",
    "Content-Type": "application/json"
};
var jQuery = require('jQuery');
import {
    movieDetailPath,
    apiKey
} from './apiPath';

// common method to get data from API
const fetchDataFromApi = (url, callback) => {
    fetch(url, headerJson).then((response) => {
        // Examine the text in the response
        response.json().then((data) => {
            callback(data);
        });
    });
}

//get popular movies
const getPopularMovies = (pageNumber, callback) => {
    fetchDataFromApi(`https://api.themoviedb.org/3/discover/movie${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`, callback);
}

// get search movies
const getSearchMovieResults = (movieName, pageNumber, callback) => {
    fetchDataFromApi(`https://api.themoviedb.org/3/search/movie?api_key=cea6ab96d4a919c98b0d4cad5404d30a&language=en-US&query=${movieName}&page=${pageNumber}&include_adult=false`, callback);
}

// get full Movie details
const getFullMovieDetails = (movieRefId, showFullMovieDetails) => {
    const url = movieDetailPath + movieRefId + apiKey;
    fetchDataFromApi(url, showFullMovieDetails);
}

//get movie collection types
const getMovieCollectionTypes = (callback) => {
    fetchDataFromApi(`http://localhost:3031/genres`, callback);
    //fetchDataFromApi('https://api.themoviedb.org/3/genre/movie/list?api_key=cea6ab96d4a919c98b0d4cad5404d30a&language=en-US', callback);
}

//get movies by collection
const getMyListOfMoviesByCollection = (colType, callback) => {
    fetchDataFromApi(`http://localhost:3031/${colType}`, callback);
}
// saving data to collection
const saveDataTOJsonSever = (url, passData, callback) => {
    fetch(url, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passData)
        })
        .then((response) => {
            callback(response);
        }).catch(error => console.error('Error:', error));
}
export {
    getPopularMovies,
    getSearchMovieResults,
    getFullMovieDetails,
    getMovieCollectionTypes,
    getMyListOfMoviesByCollection,
    saveDataTOJsonSever
};
