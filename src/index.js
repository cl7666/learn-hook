import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'

import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
