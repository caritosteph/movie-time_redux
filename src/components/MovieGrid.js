import React from 'react';
import Movie from './Movie.js';

const MovieGrid = ({movies})=> {
  return (
    <div className = "movie-grid">
      {movies}
    </div>
  );
}

export default MovieGrid;
