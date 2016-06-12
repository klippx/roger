import AppDispatcher from '../app-dispatcher';
import {EventEmitter} from 'events';
import {ActionTypes} from '../constants';

let CHANGE_EVENT = 'change';
let _links = [];

class LinkStore extends EventEmitter {
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
    console.log('link-store/getAll, returning links: ', _links)
    return _links;
  }
}

let linkStoreInstance = new LinkStore();

linkStoreInstance.dispatchToken = AppDispatcher.register(action => {
  console.log('link-store, an action was received: ', action.type)

  switch(action.type) {
    case ActionTypes.RECEIVE_LINKS:
      console.log('link-store, updating links in store!')
      _links = action.links;
      linkStoreInstance.emitChange();
      break;
  }
});

export default linkStoreInstance;
