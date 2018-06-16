import Immutable from 'immutable';
import {handleActions} from 'redux-actions';
import {putUser} from './actions';
import {User} from './models';

const initialState = Immutable.Map({
  user: User({}),
});

export const commonReducer = handleActions({
  [putUser]: (state, {payload: user}) => state.mergeIn(['user'], user)
}, initialState);