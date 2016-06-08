import React from 'react';
import API from '../api';

export default React.createClass({
  componentWillMount() {
    API.Links.all()
      .then(response => {
        console.log(response.data)
      })
      .catch(error => { console.error('Failed to fetch links', error) })
  },

  render() {
    return <h3>Hello from Main</h3>;
  }
});
