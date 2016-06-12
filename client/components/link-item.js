import React from 'react';

export default React.createClass({
  render() {
    return (
      <li>
        <a href={this.props.data.url}>
          {this.props.data.title}
        </a>
      </li>
    );
  }
});
