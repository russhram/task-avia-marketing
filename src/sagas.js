import {put, all, takeEvery, call} from 'redux-saga/effects';
import {putUser, fetchUser, updateUser} from './actions';
import {User} from './models';
import {ApiMethods, doRequest, USERS_API} from './api';

const defaultUser = User({
  id: 1,
  shared: false,
  email: null,
});

function* fetchUserSaga() {
  const makeUserRequest = () => doRequest(USERS_API, {method: ApiMethods.POST}, defaultUser);
  const user = yield call(makeUserRequest);
  yield put(putUser(user));
}

function* updateUserSaga(action) {
  const user = action.payload;
  const makeUserRequest = userPayload => doRequest(`${USERS_API}/${userPayload.id}`, {method: ApiMethods.PUT}, userPayload);
  const updatedUser = yield call(makeUserRequest, user);
  yield put(putUser(updatedUser));
}

function* watchFetchUser() {
  yield takeEvery(fetchUser.toString(), fetchUserSaga);
}

function* watchUpdateUser() {
  yield takeEvery(updateUser.toString(), updateUserSaga);
}

export default function* appSaga() {
  yield all([
    watchFetchUser(),
    watchUpdateUser(),
  ]);
}