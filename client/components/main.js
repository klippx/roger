import React from 'react';
import {API} from '../api';

export default React.createClass({
  componentWillMount() {
    API.fetchLinks();
  },

  render() {
    return <h3>Hello from Main</h3>;
  }
});
