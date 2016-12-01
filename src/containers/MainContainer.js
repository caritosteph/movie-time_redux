import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/actionCreator.js';
import React, {Component} from 'react';
import {Link} from 'react-router';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">MovieTime</Link>
          {React.cloneElement(this.props.children,this.props)}
        </h1>
      </div>
    );
  }
}
// export default MainContainer;

function mapStateToProps (state){
  return {
    listMovies: state.movies
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
//
// function mapDispachToProps (dispatch){
//   return {
//     listMovies: (movies) => dispatch(movies)
//   }
// }

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);
