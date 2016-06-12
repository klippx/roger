import React from 'react';
import LinkStore from '../stores/link-store';
import ServerAPI from '../mappersmith';
import receiveLinks from '../actions/receive-links';

function getStateFromStores() {
  console.log('main/getStateFromStores, fetching data from stores')
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
    console.log('main/getInitialState, getting initial state...')
    return getStateFromStores();
  },

  _onChange: function() {
    console.log('main/_onChange, refreshing items from store...')
    this.setState(getStateFromStores());
  },

  componentWillMount() {
    console.log('main/componentWillMount, fetching links from server...')
    ServerAPI.Links.all()
      .then(response => receiveLinks(response))
      .catch(console.error)
  },

  componentDidMount() {
    console.log('main/componentDidMount, add change listener to LinkStore...');
    LinkStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    console.log('main/componentDidMount, remove change listener to LinkStore!');
    LinkStore.removeChangeListener(this._onChange);
  },

  render() {
    console.log('main/componentDidMount, render!');
    return (
      <div>
        <h2>Current number of links: {this.state.links.length}</h2>
        <ul>
          {this.state.links.map(link => {
            return <LinkItem key={link._id} data={link} />;
          })}
        </ul>
      </div>
    );
  }
});
