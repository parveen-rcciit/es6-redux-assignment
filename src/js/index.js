var jQuery = require('jQuery');
import 'popper.js';
import 'bootstrap';
import 'jquery-ui';
//import 'font-awesome';
import img from '../assets/images/hero-image1.jpg'
require("../scss/style.scss");
import subscribeStore from './stateMgmt/subscribe';
// local file imports
import {
  getPopularMovies,
  getMovieCollectionTypes
} from './apiDataService';
import {
  moviesEventListener,
  showPopularMovies
} from './movies/moviesEventHandler';
import {
  moviesCollectionEventListener,
  showMyCollectionOfMovies
} from './movieCollection/moviesCollectionEventHandler';
import {
  searchMovieEventListener
} from './searchMovies/searchMoviesEventHandler';
import {
  baseUrl
} from './apiPath';

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('app initialized');
  getPopularMovies(1, showPopularMovies);
  getMovieCollectionTypes(showMyCollectionOfMovies);
  moviesEventListener();
  moviesCollectionEventListener();
  searchMovieEventListener();
  subscribeStore();

  //to display multiple cards in carousel
  jQuery('#myCarousel, #myCarousel-search, #myCarousel-myColMovie').on('slid.bs.carousel', function () {
    jQuery(".carousel-item.active:nth-child(" + (jQuery(".carousel-inner .carousel-item").length - 1) + ") + .carousel-item").insertBefore(jQuery(".carousel-item:first-child"));
    jQuery(".carousel-item.active:last-child").insertBefore(jQuery(".carousel-item:first-child"));
  });
});
