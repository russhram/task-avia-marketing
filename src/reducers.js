import Immutable from 'immutable';
import {handleActions} from 'redux-actions';
import {putData} from './actions';
import {User} from './models';

const initialState = Immutable.Map({
  user: User({}),
});

export const commonReducer = handleActions({
  [putData]: (state, {payload}) => state.merge(payload),
}, initialState);
