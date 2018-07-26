import {
  posterPath,
} from '../apiPath';

const jQuery = require('jquery');

// displays all collection buttons
const createMovieCollectionButton = (containerId, movieCollectionTypesData) => {
  let movieCollectionTypes = '';

  movieCollectionTypes = '<div class="d-flex flex-row justify-content-start align-items-center flex-wrap" role="group" aria-label="Movie Collection Button">';

  movieCollectionTypesData.forEach((movieCol) => {
    movieCollectionTypes += `<button type="button" id="${movieCol.id}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${movieCol.name}</button>`;
  });

  movieCollectionTypes += '<button type="button" id="createNewMovieColId" class="btn btn-secondary btn-sm w-50 m-2">+Create New Collection</button></div>';
  jQuery('.movie-full-details').append(movieCollectionTypes);
};


// displays collection list on home page
const createMyCollectionOfMovies = (movieColData) => {
  let myCollectionOfMovies = '';
  movieColData.forEach((movieCol) => {
    myCollectionOfMovies += `<div id=${movieCol.id} class="carousel-item col-md-2 carousel-item-my-collection-movie" data-toggle="modal" data-target="#movieCollectionListView">
                                 <div class="card">
                                 <img src="../assets/images/my-col.jpg" class="card-img-top img-fluid" alt="Collection Image">
                                 <h6 class="card-title card-tilte-list">${movieCol.name}</h6>
                                 </div>
                                 </div>`;
  });
  jQuery('.card-deck-my-collection-movie').html(myCollectionOfMovies);
  jQuery('.carousel-item-my-collection-movie').first().addClass('active');
};

// displays all movies in a collection
const createMoviesByCollection = (movieCollectionData) => {
  let movieCollectionDetails = '';
  jQuery('#movieCollectionList').html('');
  movieCollectionData.forEach((movieColDetailData) => {
    movieCollectionDetails += `<div class="section-content">
                          <div class="container">
                           <button class="float-right movie-col-del" id="${movieColDetailData.genre}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                              <div class="row">
                                  <div class="col-md-3 pt-1">
                                      <div class="movie-image-col w-75" movieId="${movieColDetailData.id}">
                                          <img src="${posterPath + movieColDetailData.poster_path}" alt="${movieColDetailData.title}" class="img-thumbnail rounded">
                                      </div>
                                  </div>
                                     <div class="col-md-9 pt-1">
                                      <div class="movie-full-details">
                                          <h3>${movieColDetailData.title}</h3>
                                          <div class="" movie-details-overview>
                                              <h5>Overview</h5>
                                              <p>${movieColDetailData.overview}</p>
                                         </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
  });

  jQuery('#movieCollectionList').append(movieCollectionDetails);
};


export {
  createMyCollectionOfMovies,
  createMoviesByCollection,
  createMovieCollectionButton,
};
