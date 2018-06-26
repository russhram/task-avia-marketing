import React, {Fragment} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import AppRoute from './AppRoute';
import appSaga from './sagas';
import './index.css';
import logo from './assets/images/logo.svg';

store.runSaga(appSaga);

const Root = (
  <Provider store={store}>
    <Fragment>
      <div className="app__page">
        <Router>
          <AppRoute />
        </Router>
      </div>
      <div className="app__logo">
        <img src={logo}/>
      </div>
    </Fragment>
  </Provider>
);

render(Root, document.querySelector('.app')); // eslint-disable-line no-undef
