import AppDispatcher from '../app-dispatcher';
import {ActionTypes} from '../constants';

export default (hello) => {
  console.log('receiveHello, hello received from server, dispatching RECEIVE_HELLO message...');
  AppDispatcher.dispatch({
    type: ActionTypes.RECEIVE_HELLO,
    messages: hello.data.data
  });
}
