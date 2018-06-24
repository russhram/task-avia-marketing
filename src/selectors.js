import {createSelector} from 'reselect';
import identity from 'lodash.identity';

export const userSelector = createSelector(state => ({
    user: state.common.get('user'),
}), identity);
