import React from 'react';
import { IMAGES } from '../constant';

const loadingReducer = (state = false, action) => {
  if (action.type === IMAGES.LOAD) return true;
  if (action.type === IMAGES.LOAD_SUCCESS) return false;
  if (action.type === IMAGES.LOAD_FAIL) return false;
  return state;
};

export default loadingReducer;
