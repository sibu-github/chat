import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store';
import './socket';
import * as types from './actions/actionTypes';
import { addMessage, addUser } from './actions';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
