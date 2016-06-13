import React from 'react';
import LinkStore from '../stores/link-store';
import ServerAPI from '../mappersmith';
import receiveLinks from '../actions/receive-links';
import LinkItem from './link-item';

function getStateFromStores() {
  console.log('links/getStateFromStores, fetching data from stores')
  return {
    links: LinkStore.getAll()
  }
}

export default React.createClass({
  getInitialState() {
    console.log('links/getInitialState, getting initial state...')
    return getStateFromStores();
  },

  _onChange: function() {
    console.log('links/_onChange, refreshing items from store...')
    this.setState(getStateFromStores());
  },

  componentDidMount() {
    console.log('links/componentDidMount, add change listener to LinkStore...');
    LinkStore.addChangeListener(this._onChange);
    console.log('links/componentDidMount, fetching links from server...')
    ServerAPI.Links.all()
      .then(response => receiveLinks(response))
      .catch(console.error)
  },

  componentWillUnmount() {
    console.log('links/componentDidMount, remove change listener to LinkStore!');
    LinkStore.removeChangeListener(this._onChange);
  },

  render() {
    console.log('links/render');
    var currentLinks =
      <ul>
        {this.state.links.map(link => {
          return <LinkItem key={link.id} data={link} />;
        })}
      </ul>;

    var addLink =
      <form action="data/links" method="post">
        <h3>Add new link</h3>
        <input type="text" placeholder="Enter link title" />
        <input type="text" placeholder="Enter link url" />
        <br />
        <input type="submit" value="Add link" />
      </form>;

    return (
      <div>
        {currentLinks}
        <br />
        {addLink}
      </div>
    );
  }
});
