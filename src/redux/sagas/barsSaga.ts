import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  fetchAllBarsRequest,
  fetchAllBarsSuccess,
  fetchUserBarsRequest,
  fetchUserBarsSuccess,
  fetchBarsFailure,
} from '../barsSlice';
import { getAllBars, getYourBar } from '../../utils/GetBars';


function* fetchAllBarsSaga(): SagaIterator {
  try {
    const bars = yield call(getAllBars);
    yield put(fetchAllBarsSuccess(bars));
  } catch {
    yield put(fetchBarsFailure('Failed to load all bars'));
  }
}

function* fetchUserBarsSaga(
  { payload: { owner } }: ReturnType<typeof fetchUserBarsRequest>
): SagaIterator {
  try {
    const bars = yield call(getYourBar, owner);
    yield put(fetchUserBarsSuccess(bars));
  } catch {
    yield put(fetchBarsFailure('Failed to fetch the user bars'));
  }
}

export function* barsSaga() {
  yield takeLatest(fetchAllBarsRequest.type, fetchAllBarsSaga);
  yield takeLatest(fetchUserBarsRequest.type, fetchUserBarsSaga);
}
