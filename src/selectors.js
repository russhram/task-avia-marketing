import {createSelector} from 'reselect';
import identity from 'lodash.identity';

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
  }),
);
