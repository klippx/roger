import AppDispatcher from '../app-dispatcher';
import {EventEmitter} from 'events';
import {ActionTypes} from '../constants';

let CHANGE_EVENT = 'change';
let _messages = [];

class HelloStore extends EventEmitter {
  constructor() {
    super()
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getAll() {
    console.log('hello-store/getAll, returning messages: ', _messages)
    return _messages;
  }
}

console.log('Instantiating HelloStore instance for export...');
let helloStoreInstance = new HelloStore();

helloStoreInstance.dispatchToken = AppDispatcher.register(action => {
  console.log('hello-store, an action was received: ', action.type)

  switch(action.type) {
    case ActionTypes.RECEIVE_HELLO:
      console.log('hello-store, updating messages in store!')
      _messages = action.messages;
      helloStoreInstance.emitChange();
      break;
  }
});

export default helloStoreInstance;
