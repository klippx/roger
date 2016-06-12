import AppDispatcher from '../app-dispatcher';
import {ActionTypes} from '../constants';

export default (links) => {
  console.log('receiveLinks(client)/dispatching RECEIVE_LINKS message');
  AppDispatcher.dispatch({
    type: ActionTypes.RECEIVE_LINKS,
    links: links.data
  });
}
