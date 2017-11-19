import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {...window.APP_STATE});

ReactDOM.hydrate(
  <Provider store={store}>
    <App {...window.APP_STATE} />
  </Provider>,
  document.getElementById('app'));
