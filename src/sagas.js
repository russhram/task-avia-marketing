import {put, all, takeEvery, call} from 'redux-saga/effects';
import {putData, fetchUser, updateUser} from './actions';
import {User} from './models';
import {ApiMethods, doRequest, USERS_API} from './api';

const defaultUser = User({
  id: 1,
  shared: false,
  email: null,
});

function* fetchUserSaga() {
  const makeUserRequest = () => doRequest(USERS_API, {method: ApiMethods.POST}, defaultUser);
  yield put(putData({isLoading: true}));
  const {error, ...userRaw} = yield call(makeUserRequest);
  if (error) {
    yield put(putData({isLoading: false, error}));
  } else {
    yield put(putData({user: User(userRaw), isLoading: false}));
  }
}

function* updateUserSaga(action) {
  const user = action.payload;
  const makeUserRequest = userPayload => doRequest(`${USERS_API}/${userPayload.id}`, {method: ApiMethods.PUT}, userPayload);
  yield put(putData({isLoading: true}));
  const {error, ...updatedUserRaw} = yield call(makeUserRequest, user);
  if (error) {
    yield put(putData({isLoading: false, error}));
  } else {
    yield put(putData({user: User(updatedUserRaw), isLoading: false}));
  }
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
