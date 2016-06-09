import AppDispatcher from '../app-dispatcher';
import {ActionTypes} from '../constants';

export default (links) => {
  console.log('2. in receive links');
  AppDispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_LINKS,
    links
  });
}
