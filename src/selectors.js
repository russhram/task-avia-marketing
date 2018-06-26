import {createSelector} from 'reselect';
import identity from 'lodash.identity';

export const userSelector = createSelector(state => ({
  user: state.common.get('user'),
}), identity);

export const errorSelector = createSelector(state => ({
  error: state.common.get('error'),
}), identity);

export const loadingSelector = createSelector(state => ({
  isLoading: state.common.get('isLoading'),
}), identity);

export const routerSelector = createSelector(
  errorSelector,
  userSelector,
  ({error}, {user}) => ({error, user}),
);

export const userFormSelector = createSelector(
  userSelector,
  ({user}) => ({
    user,
    initialValues: {
      email: user.email,
    },
  }),
);
