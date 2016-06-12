import React from 'react';
import LinkStore from '../stores/link-store';
import ServerAPI from '../mappersmith';
import receiveLinks from '../actions/receive-links';

function getStateFromStores() {
  console.log('main/getStateFromStores')
  return {
    links: LinkStore.getAll()
  }
}

var LinkItem = React.createClass({
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

export default React.createClass({
  getInitialState() {
    return getStateFromStores();
  },

  _onChange: function() {
    console.log('main/_onChange')
    this.setState(getStateFromStores());
  },

  componentWillMount() {
    console.log('main/componentWillMount, fetching links into stores.')
    ServerAPI.Links.all()
      .then(response => receiveLinks(response))
      .catch(console.error)
  },

  componentDidMount() {
    console.log('main/componentDidMount, add change listener');
    LinkStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    LinkStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <h2>Current number of links: {Object.keys(this.state.links).length}</h2>
        <ul>
          {this.state.links.map(link => {
            return <LinkItem id={link._id} data={link} />;
          })}
        </ul>
      </div>
    );
  }
});
