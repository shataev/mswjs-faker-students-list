import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';

import App from './App';
import {configureStore} from './store';

export const store = configureStore();

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const {worker} = require('./mocks');
    return worker.start();
  }
  return Promise.resolve();
}
prepare().then(() => {
  ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root'),
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
