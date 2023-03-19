import { call, fork, put, take } from 'redux-saga/effects';
import { loadImageStats, setImagesStats, setImagesStatsError } from '../action';
import { fetchImagesStats } from '../api';
import { IMAGES } from '../constant';

function* handlerStatSaga(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id));
      const res = yield call(fetchImagesStats(id));
      yield put(setImagesStats(id, res.downloads.total));
      return true;
    } catch (error) {}
  }
  yield put(setImagesStatsError(id));
}

function* watchStatsSaga() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handlerStatSaga, images[i].id);
    }
  }
}
export default watchStatsSaga;
