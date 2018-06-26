import {toJS} from './utils';

export const ApiMethods = {
  POST: 'post',
  PUT: 'put',
  GET: 'get',
};

export const makeRequestBody = body => body ? JSON.stringify(toJS(body)) : body;

export const doRequest = (url, descriptor, body) => {
  const {method = ApiMethods.GET, type = 'application/json'} = descriptor;
  const headers = {
    'Content-Type': type,
  };
  return fetch(url, {method, headers, body: makeRequestBody(body)}) // eslint-disable-line no-undef
    .then(r => r.json());
};

export const USERS_API = '/api/users';
