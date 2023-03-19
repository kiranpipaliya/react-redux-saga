import { all } from 'redux-saga/effects';
import imageSaga from './imageSaga';
import watchStatsSaga from './statsSaga';

function* rootSaga() {
  yield all([imageSaga(), watchStatsSaga()]);
}
export default rootSaga;
