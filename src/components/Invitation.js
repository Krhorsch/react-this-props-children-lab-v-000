import React from 'react';
import PropTypes from 'prop-types';

class Invitation extends React.Component {
  render() {
    return (
        <div>
          <h1>You&#39;ve been invited!</h1>
          <div>
            {this.props.children}
          </div>
        </div>
    )
  }
}

export default Invitation;
