import {put, all, takeEvery, call} from 'redux-saga/effects';
import {putUser, fetchUser} from './actions';
import {User} from "./models";
import {toJS} from "./utils";

const defaultUser = User({
  id: 1,
  shared: true,
  email: null,
});

const makeRequestBody = body => JSON.stringify(toJS(body));

const doRequest = (url, descriptor: {method, type = 'application/json'}, body) => {
  const headers = {
    'Content-Type': type
  };
  return fetch(url, {method, headers, body: makeRequestBody(body)})
    .then(r => r.json());
};

function* fetchUserSaga(action) {
  const makeUserRequest = () => doRequest('/api/users', 'post', defaultUser);
  const user = yield call(makeUserRequest, action.payload);
  console.log('user', user)
  yield put(putUser(user));
}

function* watchFetchUser() {
  yield takeEvery(fetchUser.toString(), fetchUserSaga);
}

export default function* appSaga() {
  yield all([
    watchFetchUser()
  ]);
}