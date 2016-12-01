import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreator.js';
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

function mapStateToProps (state){
  return {
    listMovies: state.movies
  }
}

function mapDispachToProps (dispatch){
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispachToProps)(MainContainer);
