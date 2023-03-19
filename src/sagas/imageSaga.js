import React from 'react';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setError, setImages } from '../action';
import { fetchImages } from '../api';
import { IMAGES } from '../constant';

const getPage = (state) => state.nextPage;
function* handleImageLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* watchImageLoad() {
  yield takeEvery(IMAGES.LOAD, handleImageLoad);
}

export default watchImageLoad;
