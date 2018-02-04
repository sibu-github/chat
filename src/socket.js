import Chance from 'chance';
import store from './store';
import * as types from './actions/actionTypes';
import { addMessage, addUser } from './actions';

// first send userName to redux store and then broadcast
const userName = new Chance().first();
store.dispatch(addUser(userName));

const socket = new WebSocket('ws://localhost:8989');
socket.onopen = () => {
  socket.send(
    JSON.stringify({
      type: types.ADD_USER,
      userName
    })
  );
};

socket.onmessage = event => {
  const data = JSON.parse(event.data);
  console.log(data);
  switch (data.type) {
    case types.ADD_USER:
      store.dispatch(addUser(data.userName));
      break;
    case types.ADD_MESSAGE:
      store.dispatch(addMessage(data.message, data.userName));
    default:
      break;
  }
};

export default socket;
