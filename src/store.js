import {applyMiddleware, createStore, combineReducers, compose, bindActionCreators} from 'redux';
import createSagaMiddleware from 'redux-saga';
import forEach from 'lodash.foreach';
import {reducer as formReducer} from 'redux-form/immutable';
import {commonReducer} from './reducers';
import * as actions from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

const initialState = {};

const reducers = combineReducers({
  common: commonReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

forEach(actions, (creator) => {
  creator.dispatch = bindActionCreators(creator, store.dispatch);
});

store.runSaga = sagaMiddleware.run;

export default store;
