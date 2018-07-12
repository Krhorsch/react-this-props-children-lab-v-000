import React from 'react';
import PropTypes from 'prop-types';

class ThemedDecorations extends React.Component {
  debugger
  render() {
    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (
      <div className="themes-decorations">
        {childrenWithClassName}
      </div>
    )
  }
}

export default ThemedDecorations;

// export default class MovieBrowser extends React.Component {
//   render() {
//     const currentPlayingTitle = 'Mad Max: Fury Road';
//     const childrenWithExtraProp = React.Children.map(this.props.children, child => {
//       return React.cloneElement(child, {
//         isPlaying: child.props.title === currentPlayingTitle
//       });
//     });
//
//     return (
//       <div className="movie-browser">
//         {childrenWithExtraProp}
//       </div>
//     );
//   }
// }
