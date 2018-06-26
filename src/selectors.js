import {createSelector} from 'reselect';
import identity from 'lodash.identity';
import Immutable from 'immutable';

export const userSelector = createSelector(state => ({
  user: state.common.get('user'),
}), identity);

export const userFormSelector = createSelector(
  userSelector,
  ({user}) => ({
    user,
    initialValues: {
      email: user.email,
    },
  })
);
