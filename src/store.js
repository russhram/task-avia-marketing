import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer as formReducer} from 'redux-form/immutable';
import {commonReducer} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-undef

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const reducers = combineReducers({
  common: commonReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.runSaga = sagaMiddleware.run;

export default store;
