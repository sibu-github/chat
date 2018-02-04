import * as types from './actionTypes';

export const addUser = userName => ({
  type: types.ADD_USER,
  payload: { userName }
});

export const addMessage = (message, userName) => ({
  type: types.ADD_MESSAGE,
  payload: {
    message,
    userName
  }
});
