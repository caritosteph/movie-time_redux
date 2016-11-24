import React, {Component} from 'react';
import {Link} from 'react-router';
class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">ReduxMovie</Link>
          {React.cloneElement(this.props.children,this.props)}
        </h1>
      </div>
    );
  }
}
Main.propTypes = {

};
export default Main;
