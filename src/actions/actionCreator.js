import * as types from '../constants/actionTypes';

//load movies
export default loadMovies(movies){
  return {
    type: types.LOAD_MOVIES,
    movies
  }
}

//search movies
export default searchMovies(movies_name){
  return {
    type: types.SEARCH_MOVIES,
    movies_name
  }
}

//show movie detail
export default movieDetail(movie_id){
  return {
    type: types.MOVIE_DETAIL,
    movie_id
  }
}

//add favorites movie
export default addFavorites(movie_id){
  return {
    type: types.ADD_FAVORITES,
    movie_id
  }
}

//sort movies by
export default sortMovies(sort_movies_by){
  return {
    type: types.SORT_MOVIES,
    sort_movies_by
  }
}

//show favorites movies
export default favoritesMovies(favorites){
  return {
    type: types.FAVORITES_MOVIES,
    favorites
  }
}

//share movie
export default favoritesMovies(movie_id){
  return {
    type: types.SHARE_MOVIE,
    movie_id
  }
}
