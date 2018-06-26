import {toJS} from './utils';

export const ApiMethods = {
  POST: 'post',
  PUT: 'put',
  GET: 'get',
};

export const makeRequestBody = body => body ? JSON.stringify(toJS(body)) : body;

const DB_ERROR = 'Похоже на проблемы с Postgres, выполните команду "psql -f createdb.sql"';
const SERVER_ERROR = 'Похоже сервер не запущен, выполните команду "npm run start"';

export const doRequest = (url, descriptor, body) => {
  const {method = ApiMethods.GET, type = 'application/json'} = descriptor;
  const headers = {
    'Content-Type': type,
  };
  return fetch(url, {method, headers, body: makeRequestBody(body)}) // eslint-disable-line no-undef
    .then(r => r.json().then(r => r, error => ({error})), error => ({error}))
    .then((r) => {
      if (r.error) {
        return {
          error: r.error.errorId === 'DB' ? DB_ERROR : SERVER_ERROR};
      }
      return r;
    });
};

export const USERS_API = '/api/users';
