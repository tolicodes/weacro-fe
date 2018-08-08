import { all, put, takeLatest } from 'redux-saga/effects';
import api from '../API';
import {
  FILL_USER, GET_POSES, GET_USER, STORE_POSE,
} from './actions/actionTypes';


function* getPoses() {
  try {
    yield put({ type: STORE_POSE, pose: yield api.poses.get(false) });
  } catch (e) {
    yield put({ type: 'POSES_FETCH_FAILED', message: e.message });
  }
}
function* getUser() {
  try {
    yield put({ type: FILL_USER, user: yield api.user.get(false) });
  } catch (e) {
    yield put({ type: 'POSES_FETCH_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_POSES, getPoses),
    takeLatest(GET_USER, getUser),
  ]);
}
