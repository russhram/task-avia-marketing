import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {commonReducer} from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

const initialState = {};

const reducers = combineReducers({
  common: commonReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.runSaga = sagaMiddleware.run;

export default store;
