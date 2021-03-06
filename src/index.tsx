import React from 'react'
import { render } from 'react-dom'
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App'
import reducer, { AppState } from './reducers';
import 'todomvc-app-css/index.css'
import * as test from './example-files/examples';

console.log(test);

const store: Store<AppState> = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
