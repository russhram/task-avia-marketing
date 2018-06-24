import {Record} from 'immutable';

export const SHARED = 'shared';
export const EMAIL = 'email';

export const User = Record({
  id: null,
  [SHARED]: false,
  [EMAIL]: null,
});
