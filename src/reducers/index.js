import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const messageList = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ users, messageList });
