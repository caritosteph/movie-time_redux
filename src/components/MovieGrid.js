import React, {Component} from 'react';
import { Link } from 'react-router';
class MovieGrid extends Component {
  render() {
    let post = {"code": "1"};
    return (
      <div className = "movie-grid">
        I'm a MovieGrid
      </div>
    );
  }
}
MovieGrid.propTypes = {

};
export default MovieGrid;
