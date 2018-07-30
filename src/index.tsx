import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Loadable from 'react-loadable'
import Router from './router';
import store from './store';
import '../scss/main.scss';

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router/>
    </Provider>,
    document.querySelector('#app')
  );
});