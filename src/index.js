import React, {Fragment} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import store from './store';
import AppRoute from './AppRoute';
import appSaga from './sagas';
import './index.css';
import logo from './assets/images/logo.svg';
import ActionPage from './components/ActionPage';
import FinalPage from './components/FinalPage';

store.runSaga(appSaga);

const Root = (
  <Provider store={store}>
    <Fragment>
      <div className="app__page">
        <Router>
          <Switch>
            <AppRoute exact path="/" component={ActionPage}/>
            <AppRoute exact path="/final" component={FinalPage}/>
          </Switch>
        </Router>
      </div>
      <a href="https://www.aviasales.ru/" className="app__logo">
        <img src={logo}/>
      </a>
    </Fragment>
  </Provider>
);

render(Root, document.querySelector('.app')); // eslint-disable-line no-undef
