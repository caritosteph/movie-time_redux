
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
export default MainContainer;
