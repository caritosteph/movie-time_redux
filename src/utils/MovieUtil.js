import _ from 'lodash';

export function replaceMovie(state, action){
    return _.map(state,function(movie){
      if(movie.id === action.movie_id){
        return Object.assign({},movie,{favorited: true});
      }
      return movie;
    });
}
