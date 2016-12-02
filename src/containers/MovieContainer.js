import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {addFavorite} from '../actions/actionCreator.js';
import Movie from '../components/Movie.js';

class MovieContainer extends Component {
  constructor(){
    super();
    this.addFavorite = this.addFavorite.bind(this);
  }
  addFavorite(e){
    let {movie,addFavorite} = this.props;
    e.preventDefault();
    addFavorite(movie.id);
  }
  render() {
    let {movie} = this.props;
    return (
      <Link to={`movie/${movie.id}`}>
        <Movie {...this.props}  movie={movie} addFavorite = {this.addFavorite}/>
      </Link>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addFavorite: (id) => dispatch(addFavorite(id))
  }
}

export default connect(null,mapDispatchToProps)(MovieContainer);
