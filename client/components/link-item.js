import React from 'react';
import ServerAPI from '../mappersmith';

export default React.createClass({
  deleteLink() {
    ServerAPI.Links.delete({id: this.props.data.id})
  },

  render() {
    return (
      <li>
        <a href={this.props.data.url}>
          {this.props.data.title}
        </a>
        <button type="button" onClick={this.deleteLink}>
          {'\u2718'}
        </button>
      </li>
    );
  }
});
