import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import AppRoute from './AppRoute';
import appSaga from './sagas';
import './index.css';

store.runSaga(appSaga);

const Root = (
  <Provider store={store}>
    <Router>
      <AppRoute />
    </Router>
  </Provider>
);

render(Root, document.getElementById('root'));
