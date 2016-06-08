import React from 'react';
import ReactDOM from 'react-dom';

let Hello = React.createClass({
  render() {
    return <h3>Hello React with JSX</h3>;
  }
});

ReactDOM.render(<Hello />, document.getElementById('react'));
