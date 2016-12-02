import * as types from '../constants/actionType';

//load movies
// export function loadMovies(movies){
//   return {
//     type: types.LOAD_MOVIES,
//     movies
//   };
// }

//search movies
export function searchMovies(movies_name){
  return {
    type: types.SEARCH_MOVIES,
    movies_name
  };
}

//show movie detail
export function movieDetail(movie_id){
  return {
    type: types.MOVIE_DETAIL,
    movie_id
  };
}

//add favorites movie
export function addFavorite(movie_id){
  return {
    type: types.ADD_FAVORITES,
    movie_id
  };
}

//sort movies by
export function sortMovies(sort_movies_by){
  return {
    type: types.SORT_MOVIES,
    sort_movies_by
  };
}

//show favorites movies
export function favoritesMovies(favorites){
  return {
    type: types.FAVORITES_MOVIES,
    favorites
  };
}

//share movie
export function shareMovie(movie_id){
  return {
    type: types.SHARE_MOVIE,
    movie_id
  };
}
