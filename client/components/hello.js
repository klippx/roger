import React from 'react';
import ServerAPI from '../mappersmith';
import receiveHello from '../actions/receive-hello';
import HelloStore from '../stores/hello-store';

function getStateFromStores() {
  console.log('hello/getStateFromStores, fetching data from stores')
  return {
    messages: HelloStore.getAll()
  }
}

export default React.createClass({
  getInitialState() {
    console.log('hello/getInitialState, getting initial state...')
    return getStateFromStores();
  },

  _onChange: function() {
    console.log('hello/_onChange, refreshing items from store...')
    this.setState(getStateFromStores());
  },

  componentWillMount() {
    console.log('hello/componentWillMount, fetching Hello from server...')
    ServerAPI.Hello.all()
      .then(response => receiveHello(response))
      .catch(console.error)
  },

  componentDidMount() {
    console.log('hello/componentDidMount, add change listener to HelloStore...');
    HelloStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    console.log('hello/componentDidMount, remove change listener to HelloStore!');
    HelloStore.removeChangeListener(this._onChange);
  },

  render() {
    console.log('hello/render');
    return (
      <div>
        {Object.keys(this.state.messages).map(key => {
          return (
            <div>{key}, {this.state.messages[key]}</div>
          );
        })}
      </div>
    );
  }
});
