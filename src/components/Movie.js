import React from 'react';
import {Link} from 'react-router';

const img = "https://image.tmdb.org/t/p/w500";

const Movie = ({movie}) => {
  return (
    <figure>
      <div>
        <Link to={`movie/${movie.id}`}>
          <img src={img + movie.backdrop_path} alt= {movie.title}/>
          {/* <label>{movie.original_title}</label> */}
        </Link>
      </div>
    </figure>
  )
}
Movie.propTypes = {

};
export default Movie;
