import React from 'react';
import {Link} from 'react-router';
const Movie = ({movie}) => {
  return (
    <figure>
      <div>
        <Link to={`movie/${movie.id}`}>
          {movie.original_title}
        </Link>
      </div>
    </figure>
  )
}
Movie.propTypes = {

};
export default Movie;
