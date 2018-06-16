import {put, all, takeEvery, call} from 'redux-saga/effects';
import {putUser, fetchUser} from './actions';
import {User} from "./models";

function* fetchUserSaga(action) {
  const user = yield call((id) => Promise.resolve(User({id, shared: true})), action.payload);
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