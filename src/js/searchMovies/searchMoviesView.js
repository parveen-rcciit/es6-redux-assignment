var jQuery = require('jQuery');
import {
 posterPath
} from '../apiPath';

//displays search movie results on home page
const  createSearchMoviesList = (containerId, movieData) => {
 var searchMovieListSize = jQuery(".carousel-item-search-movie", ".card-deck-search-movie").length;
 let searchMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  searchMoviesCarouselItems += `<div class="carousel-item col-md-2 carousel-item-search-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <!-- <div class="card-body">
                                 <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}" >Add to My List</button>
                                 </div> -->
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-search-movie").append(searchMoviesCarouselItems);
 if (searchMovieListSize == 0) {
  jQuery('.carousel-item-search-movie').first().addClass('active');
 }

}
//displays movie details
const createMovieDetail = (containerId, movieDetailData) => {

 let movieDetails = `<div class="section-content">
                          <div class="container">
                              <div class="row">
                                  <div class="col-md-4 pt-1">
                                      <div class="movie-image">
                                          <img src="${posterPath + movieDetailData.poster_path}" alt="${movieDetailData.title}" class="img-thumbnail rounded">
                                      </div>
                                  </div>
                                     <div class="col-md-8 pt-1">
                                      <div class="movie-full-details">
                                          <h2>${movieDetailData.title}</h2>
                                          <div class="" movie-details-overview>
                                              <h3>Overview</h3>
                                              <p>${movieDetailData.overview}</p>
                                          </div>
                                        <button class="collectionButton btn btn-secondary btn-sm" type="button" movieId="${movieDetailData.id}">Add to My List</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
 jQuery("#" + containerId).html(movieDetails);

}

export {
 createSearchMoviesList,
 createMovieDetail
};
