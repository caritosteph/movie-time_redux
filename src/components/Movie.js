import React from 'react';
import {Link} from 'react-router';

const img = "https://image.tmdb.org/t/p/w500";

const Movie = ({movie,addFavorite}) => {
  return (
      <div>
        <img src={img + movie.backdrop_path} alt= {movie.title}/>
        <button onClick={addFavorite}>addFavorite</button>
        <label>Favorited: {movie.favorited? 'SI': 'No'} </label>
      </div>
  );
};
Movie.propTypes = {

};
export default Movie;
